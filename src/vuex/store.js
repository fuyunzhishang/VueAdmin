import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //组合各个模块
  modules: {
    StockPosition
  }
})
