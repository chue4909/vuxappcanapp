<template>
  <div id="child">
    <view-box ref="viewBox" body-padding-top="46px">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"  :left-options="{backText: ''}" > 上传图片 </x-header>
    <fileUpload :images="images" :hasDelete="true" :total="4"></fileUpload>
    </view-box>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import fileUpload from '../../components/fileUpload'
export default {
  components: {
    fileUpload
  },
  name: 'upload',
  data() {
    return {
      title: '其他',
      content: '',
      images: [],
      id: ''
    }
  },
  computed: {
    ...mapGetters('login', ['isLogin'])
  },
  methods: {
    set() {},
    init() {},
    activated() {},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
        vm.init()
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';

#child {
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  position: relative;
  background-color: #efeff4;
}
</style>
