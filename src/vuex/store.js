import Vue from 'vue'
import Vuex from 'vuex'
import StockPosition from './modules/StockPosition'

Vue.use(Vuex)

export default new Vuex.Store({
  //组合各个模块
  modules: {
    StockPosition,
  },
})
