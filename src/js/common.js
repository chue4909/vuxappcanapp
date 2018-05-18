import appcan from '../libs/appcan'
import Vue from 'vue'
import global from './global'
import { ToastPlugin, AlertPlugin, LoadingPlugin } from 'vux'
Vue.use(global)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

let config = {
  site: ''
}
if (process.env.NODE_ENV === 'production') {
  config.site = 'http://222.222.111.132:9089'
}
let url = {
  healthNum: {
    getList: config.site + '/cPortal/v1/healthNum/getList'
  },
  demoUrl: config.site + '',
  fileUpload: config.site + '/cPortal/v1/common/fileUpload',
  auth: {
    authUrl: config.site + '/oauthSrv/v1/service/authorize?responseType=code&scope=UserAuthorited&state=STATE&',
    tokenUrl: config.site + '/oauthSrv/v1/service/getAccessToken',
    userUrl: config.site + '/openSite/v1/external/authentication'
  }
}
export default {
  base: config.site,
  api_url: url,
  errFn(t, err) {
    Vue.$vux.loading.hide()
    if (t === 1) {
      if (err.data.retCode === '010016' || err.data.status === 14504) {
        // 未登录
        Vue.$router.push({ name: 'login' })
      } else {
        Vue.$vux.toast.show({
          text: err
            ? err.data.errInfo || err.data.msg || err.data.message
            : '请求错误',
          type: 'text'
        })
      }
    } else {
      Vue.$vux.toast.show({
        text: '网络不给力，请稍后重试',
        type: 'text'
      })
    }
  },
  // upload
  fileUpload(param, cb) {
    let self = this
    return new Promise((resolve, reject) => {
      appcan
        .upload({
          url: this.api_url.fileUpload,
          path: param,
          type: 0,
          field: 'upFile',
          quality: 1,
          maxwidth: 640,
          onUploadProgress: function(response) {
            cb(response.percent)
          }
        })
        .then(
          function(response) {
            var data = JSON.parse(response.responseString)
            if (data.retCode === '000000') return resolve(data)
            else {
              Vue.$vux.loading.hide()
              Vue.$vux.toast.show({
                text: '上传失败',
                type: 'text'
              })
            }
          },
          function(err) {
            self.errFn(err)
            // Vue.$vux.loading.hide()
            return reject(err)
          }
        )
        .catch(function(err) {
          // Vue.$vux.loading.hide()
          self.errFn(err)
          return reject(err)
        })
    })
  },
  // post demo
  getHealthNumListList(param) {
    let self = this
    return new Promise((resolve, reject) => {
      appcan
        .request({
          url: this.api_url.healthNum.getList,
          method: 'POST',
          data: param
        })
        .then(function(response) {
          if (response.data.retCode === '000000') return resolve(response)
          else self.errFn(1, response)
        })
        .catch(function(err) {
          self.errFn(err)
          // return reject(err)
        })
    })
  },
  // get demo demoUrl无效
  getDemo(param) {
    let self = this
    return new Promise((resolve, reject) => {
      appcan
        .request({
          url: this.api_url.demoUrl,
          method: 'GET',
          params: param
        })
        .then(function(response) {
          if (response.data.retCode === '000000') return resolve(response)
          else self.errFn(1, response)
        })
        .catch(function(err) {
          self.errFn(err)
          // return reject(err)
        })
    })
  },
  getAccessToken (param) {
    let self = this
    return new Promise((resolve, reject) => {
      appcan
        .request({
          url: this.api_url.auth.tokenUrl,
          method: 'POST',
          data: param
        })
        .then(function(response) {
          if (response.data.retCode === '000000') return resolve(response)
          else self.errFn(1, response)
        })
        .catch(function(err) {
          self.errFn(err)
          // return reject(err)
        })
    })
  },
  getUserData (param) {
    let self = this
    return new Promise((resolve, reject) => {
      appcan
        .request({
          url: this.api_url.auth.userUrl,
          method: 'POST',
          data: param
        })
        .then(function(response) {
          if (response.data.retCode === '000000') return resolve(response)
          else self.errFn(1, response)
        })
        .catch(function(err) {
          self.errFn(err)
          // return reject(err)
        })
    })
  }
}
