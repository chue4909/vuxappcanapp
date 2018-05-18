import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.go = function(t) {
  this.isBack = true
  console.log('go===' + this.history.current.name)
  let currentName = this.history.current.name
  if (!t) window.history.go(-1)
  else window.history.go(t)
  var self = this
  setTimeout(function() {
    if (currentName === self.history.current.name) {
      try {
        uexWindow.close(-1)
      } catch (e) {}
    }
  }, 100)
}
Router.prototype.back = function(t) {
  this.isBack = true
  let currentName = this.history.current.name
  if (t) window.history.back()
  else window.history.back()
  var self = this
  setTimeout(function() {
    if (currentName === self.history.current.name) {
      try {
        uexWindow.close(-1)
      } catch (e) {}
    }
  }, 100)
}
// 路由懒加载
const index = () => import('@/page/index/index').then(m => m.default)
const home = () => import('@/page/index/home/index').then(m => m.default)
const b = () => import('@/page/index/b/index').then(m => m.default)
const jssdk = () => import('@/page/jssdk/jssdk').then(m => m.default)
const list = () => import('@/page/list/index').then(m => m.default)
const upload = () => import('@/page/upload/index').then(m => m.default)
const startpage = () => import('@/page/startpage/index').then(m => m.default)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index/home',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index/home',
          name: 'home',
          component: home,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/index/b',
          name: 'b',
          component: b,
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/jssdk',
      name: 'jssdk',
      component: jssdk,
      meta: {
        title: 'jssdk'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        title: '列表'
      }
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload,
      meta: {
        title: '上传'
      }
    },
    {
      path: '/startpage',
      name: 'startpage',
      component: startpage,
      meta: {
        title: '认证中'
      }
    }
  ]
})
