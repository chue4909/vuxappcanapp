import appcan from '@/libs/appcan'
export default {
  namespaced: true,
  state: {
    isLogin: '', // 是否登录，空为未登录
    loginName: ''
  },
  getters: {
    isLogin: state => {
      return state.isLogin
    },
    loginName: state => {
      return state.loginName
    }
  },
  mutations: {
    set_isLogin(state, val) {
      state.isLogin = val
      appcan.val('isLogin', val)
    },
    set_loginName(state, val) {
      state.loginName = val
      appcan.val('loginName', val)
    }
  },
  actions: {
  }
}
