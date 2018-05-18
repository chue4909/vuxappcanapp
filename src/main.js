// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import global from './js/global'
import appcan from './libs/appcan'
import '@/assets/fonts/iconfont.css'
import store from './store'
import VueScroller from 'vue-scroller'
import VueLazyLoad from 'vue-lazyload'

import {
  Actionsheet,
  XHeader,
  Group,
  Cell,
  XInput,
  TransferDom,
  Popup,
  Grid,
  GridItem,
  ViewBox,
  Loading,
  BusPlugin,
  Previewer,
  Flexbox,
  FlexboxItem,
  GroupTitle
} from 'vux'
Vue.use(global)
Vue.use(appcan)
Vue.use(BusPlugin)
Vue.use(VueScroller)
Vue.directive('transfer-dom', TransferDom)
Vue.component('actionsheet', Actionsheet)
Vue.component('x-header', XHeader)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-input', XInput)
Vue.component('popup', Popup)
Vue.component('grid', Grid)
Vue.component('gridItem', GridItem)
Vue.component('view-box', ViewBox)
Vue.component('loading', Loading)
Vue.component('previewer', Previewer)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('group-title', GroupTitle)
Vue.use(VueLazyLoad, {
  error: './static/default.png',
  loading: './static/default.png'
})
FastClick.attach(document.body)

Vue.config.productionTip = false
// simple history management
router.isPush = false
router.endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  router.endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function(...args) {
    router.isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function(to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  // 判断是否是ios左滑返回
  if (!router.isPush) {
    if (Date.now() - router.endTime < 377) {
      store.commit('updateDirection', { direction: '' })
    } else {
      store.commit('updateDirection', { direction: 'reverse' })
    }
  } else {
    if (router.isBack) {
      store.commit('updateDirection', { direction: 'reverse' })
    } else {
      store.commit('updateDirection', { direction: 'forward' })
    }
  }
  if (to.meta && to.meta.title && Vue.title) {
    Vue.title(to.meta.title)
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function(to) {
  router.isPush = false
  router.isBack = false
  store.commit('updateLoadingStatus', { isLoading: false })
})
/* eslint-disable no-new */
appcan.ready(function() {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app-box')
})
