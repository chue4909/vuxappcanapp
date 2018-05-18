<template>
  <div id="app">
    <view-box ref="viewBox">
    <!-- <transition name='fade'> -->
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->
      <Afooter slot="bottom" :footerData="footerData" @on-footer-click="onfooterclick" :tabindex.sync="tabIndex" ></Afooter>
    </view-box>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Afooter from '../../components/footer'
export default {
  components: {
    Afooter
  },
  name: 'app',
  data() {
    return {
      msg: 'CPortal',
      tabIndex: 0,
      footerData: [
        {
          link: { name: 'home' },
          iconfont: '&#xe61a;',
          label: '首页',
          index: 0
        },
        {
          link: { name: 'b' },
          iconfont: '&#xe615;',
          label: '健康',
          index: 1
        },
        {
          iconfont: '&#xe67c;',
          label: '服务',
          index: 2
        },
        {
          iconfont: '&#xe617;',
          label: '我的',
          index: 3
        }
      ]
    }
  },
  computed: {
    ...mapGetters('login', ['isLogin'])
  },
  watch: {
    $route(val) {
      this.init(this.$route.name)
    }
  },
  methods: {
    onfooterclick(item) {
      switch (item.index) {
        case 0:
          break
        case 1:
          break
        case 2:
          break
        case 3:
          this.isLoginSta()
          break
      }
    },
    init(name) {
      switch (name) {
        case 'home':
          this.tabIndex = 0
          break
        case 'b':
          this.tabIndex = 1
          break
        case 'pkgm':
          this.tabIndex = 2
          break
        case 'user':
          this.tabIndex = 3
          break
        default:
          break
      }
    },
    isLoginSta() {
      // if (!this.isLogin) {
      //   this.$router.push({ name: 'login' })
      //   return
      // }
      // this.$router.push({ name: 'user' })
      this.tabIndex = 3
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.init(vm.$route.name)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.icon {
  position: relative;
  top: -6px;
}
</style>



