import Vue from 'vue'
import Vuex from 'vuex'

const SHOWLOADING = 'SHOWLOADING'

const vantModule = {
  state: {
    showLoading: false
  },
  getters: {
    showLoading (state) {
      return state.showLoading
    }
  },
  mutations: {
    SHOWLOADING (state, loadingStatus) {
      state.showLoading = loadingStatus
    }
  },
  actions: {
    loader ({commit}, loadingStatus) {
      commit(SHOWLOADING, loadingStatus)
    }
  }
}
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    vantModule
  }
})

export default store