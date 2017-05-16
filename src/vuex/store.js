import Vue from 'vue'
import Vuex from 'vuex'
import StockPosition from './modules/StockPosition'
import DeclpoCancel from './modules/DeclpoCancel'

Vue.use(Vuex)

export default new Vuex.Store({
  //组合各个模块
  modules: {
    StockPosition,
    DeclpoCancel
  },
})
