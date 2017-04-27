import * as types from '../mutation-types'
import axios from 'axios'

class Model {
  constructor(StockpositionCode = '', StockpositionName = '', AreaCode = '', StockpositionType = '', Warehousecode ='') {
    this.StockpositionCode = StockpositionType
    this.StockpositionName = StockpositionName
    this.AreaCode = AreaCode
    this.Stockpositiontype = StockpositionType
    this.Warehousecode = Warehousecode
  }
}
var CriteriaModel = new Model()
var EditModel = new Model()
//改模块的初始状态
const state = {
  CriteriaModel,
  EditModel,
  StockpositionTypeList: [{},{
        label: '正常存库位',
        value: '1'
      }, {
        label: '残次库位',
        value: '2'
      }, {
        label: '虚拟库位',
        value: '3'
      }, {
        label: '暂存库位',
        value: '4'
  }],
  List: {
    loading2 : false,
    totalData: 0,
    currentpage: 1,
    pageSize: 10,
    currentData: [],
    tableData: [],
  },
  Edit: {
    addStockposition: false
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
  }
  
}

const getters = {
  CriteriaModel: state => {
    return state.CriteriaModel
  },
  EditModel: state => {
    return state.EditModel
  },
  List: state => {
    return state.List
  },
  Edit: state => {
    return state.Edit
  },
  StockpositionTypeList: state => {
    return state.StockpositionTypeList
  }
}

//异步操作
const actions = {
  //查询
  SearchList ({ commit, state }, CriteriaModel) {
    //this.loading2 = true
    axios.post('/api/stockposition/list/?currentPage=' + state.List.currentpage , {
      LikeStockpositioncode: CriteriaModel.StockpositionCode,
      Stockpositionname: CriteriaModel.StockpositionName,
      Areacode: CriteriaModel.AreaCode,
      Stockpositiontype: CriteriaModel.StockpositionType
    })
    .then(res => {
      //this.loading2 = false
      var ojson = JSON.parse(res.data)
      console.dir(ojson)
      commit(types.SET_TABLE_DATA, ojson.list)
      commit(types.SET_TOTAL_DATA, ojson.listLength)
      //this.tableData = ojson.list
      //this.totalData = ojson.listLength
    })
    .catch(err => {
      console.log(err)
    })
  },
  ResetEditModel ({ commit, state }) {
    commit(types.RESET_EDIT_MODEL)
  },
  AddModel({ commit, state}, model) {
        try{
          if (true) {
            axios.post('/api/stockposition/add/', {
              Stockpositioncode: model.StockpositionCode,
              Stockpositiontype: model.StockpositionType,
              Areacode: model.AreaCode,
              WarehouseCode: model.Warehousecode
            })
            .then(res => {
              if (res.data.Success) {
              //this.toastr.success(res.data.Message)
               console.log(res.data)
               commit(types.SET_EDIT_VODAL, false)
               commit(types.RESET_EDIT_MODEL)
               //closeModal()
             }

            })
            .catch(e => {
              this.toastr.warn('保存失败！')
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
