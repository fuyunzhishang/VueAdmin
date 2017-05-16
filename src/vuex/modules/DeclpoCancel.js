import * as types from '../mutation-types'
import axios from 'axios'
import Model from '../models/DeclpoCancel'

var CriteriaModel = new Model()
var EditModel = new Model()
//改模块的初始状态
const state = {
  CriteriaModel,
  EditModel,
  // StockpositionTypeList: [{},{
  //       label: '正常存库位',
  //       value: '1'
  //     }, {
  //       label: '残次库位',
  //       value: '2'
  //     }, {
  //       label: '虚拟库位',
  //       value: '3'
  //     }, {
  //       label: '暂存库位',
  //       value: '4'
  // }],
  List: {
    loading2 : false,
    totalData: 0,
    currentpage: 1,
    pageSize: 10,
    currentData: [],
    tableData: [],
  },
  Edit: {
    addStockposition: false,
    saveResult:{
      state: '',
      message: ''
    }
  }  
}

//相关的 mutations
const mutations = {
  [types.SET_MODEL_VAL] (state, model) {
    state.CriteriaModel = model;
  },
  [types.SET_TABLE_DATA] (state, DataList) {
    state.List.tableData = DataList
  },
  [types.SET_TOTAL_DATA] (state, totalData) {
    state.List.totalData = totalData
  },
  [types.SET_EDIT_VODAL] (state, status) {
    state.Edit.addStockposition = status
  },
  [types.RESET_EDIT_MODEL] (state) {
    state.EditModel = new Model()
  },
  [types.SET_EDIT_MODEL] (state, model) {
    //把值传入EditModel
    for(let key in model) {
      state.EditModel[key] = model[key]
    }
  },
  [types.SET_SAVE_INFO] (state, result) {
    state.Edit.saveResult.state = result.Success
    state.Edit.saveResult.message = result.Message
  },

  
}

const getters = {
  DeclpoCancelCriteriaModel: state => {
    return state.CriteriaModel
  },
  DeclpoCancelEditModel: state => {
    return state.EditModel
  },
  DeclpoCancelList: state => {
    return state.List
  },
  DeclpoCancelEdit: state => {
    return state.Edit
  }
}

//异步操作
const actions = {
  //查询
  SearchList ({ commit, state }, CriteriaModel) {
    state.List.loading2 = true
    axios.post('/api/stockposition/list/?currentPage=' + state.List.currentpage , {
      LikeStockpositioncode: CriteriaModel.StockpositionCode,
      Stockpositionname: CriteriaModel.StockpositionName,
      Areacode: CriteriaModel.AreaCode,
      Stockpositiontype: CriteriaModel.StockpositionType
    })
    .then(res => {
      state.List.loading2 = false
      var ojson = JSON.parse(res.data)
      console.dir(ojson)
      commit(types.SET_TABLE_DATA, ojson.list)
      commit(types.SET_TOTAL_DATA, ojson.listLength)
      //toastr.success('查询成功！')
    })
    .catch(err => {
      console.log(err)
    })
  },
  ResetEditModel ({ commit, state }) {
    commit(types.RESET_EDIT_MODEL)
  },
  SetEditModel ({commit, state}, model) {
    //console.log(model)
    commit(types.SET_EDIT_MODEL, model)
    commit(types.SET_EDIT_VODAL, true)
  },
  AddModel({ commit, state}, model) {
    console.log({'add':model})
        try{
          if (true) {
            axios.post('/api/stockposition/add/', {
              // Identification: model.Identification,
              // Stockpositioncode: model.Stockpositioncode,
              // Stockpositionname: model.Stockpositionname,
              // Stockpositiontype: model.StockpositionType,
              // Areacode: model.Areacode,
              // WarehouseCode: model.Warehousecode,
              model
            })
            .then(res => {    
              if (res.data.Success) { 
               console.log(res.data)
               commit(types.SET_EDIT_VODAL, false) //关闭Edit
               commit(types.RESET_EDIT_MODEL) //重置EditModel
               commit(types.SET_SAVE_INFO, res.data) //推送通知
             }
            })
            .catch(e => {
              //this.toastr.warn('保存失败！')
              console.log(e)
            })
          }else {
            console.log('提交失败！')
          }
        }
        catch(e) {
          console.log(e)
        }
      },
     
}

export default {
  state,
  actions,
  getters,
  mutations
}
