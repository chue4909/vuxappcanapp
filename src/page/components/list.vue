<template>
  <div class="app">
    <Agrid :list="list" :cols="cols" @on-gridItem-click="onHealthClick"></Agrid>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Agrid from '../../components/grid'
export default {
  components: {
    Agrid
  },
  props: ['list', 'cols'],
  name: 'glist',
  data() {
    return {
      msg: 'CPortal'
      // defaultSrc: require('../assets/image/logo.png')
    }
  },
  computed: {
    ...mapGetters('login', ['isLogin'])
  },
  methods: {
    onHealthClick(item) {
      console.log(item)
    },
    followDeal(info) {
      for (var i in this.list) {
        if (info.id === this.list[i].id) {
          this.list[i].follow = info.follow
        }
      }
    }
  },
  mounted() {
    console.log(this.list)
  },
  created() {
    // this.$vux.Bus.$on('followDeal', value => {
    //   this.followDeal(value)
    // })
  },
  beforeDestroy() {
    // this.$vux.Bus.$off('followDeal')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
