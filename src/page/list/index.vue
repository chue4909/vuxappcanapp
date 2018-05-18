<template>
  <div style="height:100%;z-index:5;background-color:#ffffff;">
    <view-box ref="viewBox"  body-padding-top="46px"  body-padding-bottom="0">
    <x-header slot="header" :left-options="{backText: ''}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">list
    </x-header>
    <scroller
      :on-refresh="refresh"
      :on-infinite="loadMore"
      ref="myscroller" v-show="!isNoData" :class="[device==='ios'?'positionios':'position']" >
      <glist :list="data"></glist>
    </scroller>
    <noData text="暂无数据" v-show="isNoData"></noData>
    </view-box>
  </div>
</template>

<script>
import glist from '../components/list'
import noData from '../../components/noData'
import API from '../../js/common'
import { mapGetters } from 'vuex'
export default {
  directives: {},
  components: {
    glist,
    noData
  },
  name: 'list',
  data() {
    return {
      msg: 'CPortal',
      data: [],
      follow: 0,
      catId: '',
      page: 1,
      pageSize: 24,
      isNoData: false,
      position: {},
      listItem: []
    }
  },
  methods: {
    init() {
      this.$refs.myscroller.triggerPullToRefresh()
    },
    getHealthNumList() {
      var self = this
      API.getHealthNumListList({
        follow: this.follow,
        catId: this.catId,
        page: this.page,
        pageSize: this.pageSize
      }).then(function(response) {
        self.$log(self.page, response.data.data.list.length)
        if (response.data.retCode === '000000') {
          if (self.page === 1) {
            self.$refs.myscroller.finishPullToRefresh()
            self.data = []
          }
          self.listItem = response.data.data.list
          let start = self.listItem.length
          for (let i = 0; i < start; i++) {
            self.data.push(self.listItem[i])
          }
          if (self.data.length === 0) {
            self.isNoData = true
          } else {
            self.isNoData = false
          }
          if (self.listItem.length === self.pageSize) {
            self.page++
            self.$refs.myscroller.finishInfinite(0)
          } else {
            self.listItem = []
            return self.$refs.myscroller.finishInfinite(2)
          }
          self.$refs.myscroller.resize()
        }
      })
    },
    loadMore() {
      if (!this.listItem.length) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2)
        })
        return
      }
      this.getHealthNumList()
    },
    refresh() {
      this.page = 1
      this.getHealthNumList()
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === 'home') {
      next(vm => {
        // 通过 `vm` 访问组件实例
        vm.catId = vm.$route.params.catId
        vm.data = []
        vm.page = 1
        vm.listItem = []
        vm.isNoData = false
        vm.init()
      })
    } else next()
  },
  created() {},
  activated() {
    var self = this
    if (this.position.top) {
      setTimeout(() => {
        self.$refs.myscroller.scrollBy(
          self.position.left,
          self.position.top,
          false
        )
        self.position = {}
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    this.position = this.$refs.myscroller.getPosition()
    next()
  },
  watch: {
    isLogin(val) {
      this.init()
    }
  },
  computed: {
    ...mapGetters('login', ['isLogin']),
    ...mapGetters(['device'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.itemImg {
  width: 3rem !important;
  height: 3rem !important;
  left: -0.625rem;
  top: -1.25rem;
  position: relative;
}
.itemLable {
  position: relative;
}
#child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  z-index: 5;
  background-color: #fbf9fe;
}
.position {
  padding-top: 46px;
  height: calc(~'100% - 46px') !important;
}
.positionios {
  padding-top: 66px;
  height: calc(~'100% - 66px') !important;
}
</style>
