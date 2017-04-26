import { SET_MODEL_VAL } from '../mutation-types'


//改模块的初始状态
const state = {
  CriteriaModel: {
    StockpositionCode: 'sxs',
    StockpositionName: '',
    AreaCode: '',
    WarehouseCode: '',
    Capacity: '',
    Use: [],
    StateName: '',
    StockpositionType: '',
  }
}

//相关的 mutations
const mutations = {
  [SET_MODEL_VAL] (state, model) {
    state.CriteriaModel = model;
  }
}

const getters = {
  CriteriaModel: state => {
    return state.CriteriaModel
  }
}

export default {
  state,
  getters,
  mutations
}
