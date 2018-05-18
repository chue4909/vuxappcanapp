import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './login/index'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  device: 'android'
}

const getters = {
  direction: state => {
    return state.direction
  },
  isLoading: state => state.isLoading,
  device: state => {
    return state.device
  }
}

const mutations = {
  setDevice(state, val) {
    state.device = val
  },
  updateLoadingStatus(state, payload) {
    state.isLoading = payload.isLoading
  },
  updateDirection (state, direction) {
    state.direction = direction.direction
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    login: loginModule
  }
})
