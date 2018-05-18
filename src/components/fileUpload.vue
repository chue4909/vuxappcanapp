<template>
  <div id="upload">
      <group-title style="padding-top: .5em;" >上传图片<span style="float:right;">{{ numSet }}</span></group-title>
      <flexbox :gutter="0" wrap="wrap"  align="center" style="background-color: white;">
      <flexbox-item :span="1/4" v-for="( src, index ) in listPic" :key="index" @click.native.prevent.stop="showPre(index)"><div class="flex-icon"><div class="flex-inner vux-1px">
          <div :style="{backgroundImage: `url('${src.src}')`}"  class="ximg-demo" error-class="ximg-error" />
        </div></div></flexbox-item>
      <flexbox-item :span="1/4" v-show="listPic.length<total"><div class="flex-icon"><div class="flex-inner vux-1px"  @click="itemAddClick()"><i class="iconfont fontSize">&#xe620;</i></div></div></flexbox-item>
    </flexbox>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="memuClick"></actionsheet>
    </div>
    <div v-transfer-dom>
      <previewer ref="previewer" :list="listPic" :options="options" v-if="hasDelete">
        <template slot="button-before">
          <span class="previewer-delete-icon-box">
            <i class="iconfont previewer-delete-icon" @click.prevent.stop="removeImg">&#xe635;</i>
          </span>
        </template>
      </previewer>
    </div>
    <div v-transfer-dom>
      <loading :show="showLoading" :text="textLoading"></loading>
    </div>
  </div>
</template>

<script>
import API from '../js/common'
import appcan from '../libs/appcan'
export default {
  directives: {
  },
  components: {
  },
  name: 'fileUpload',
  props: {
    hasDelete: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 4
    },
    images: Array
  },
  data() {
    return {
      num: 0,
      showMenus: false,
      realpath: '',
      menus: {
        menu1: '拍照',
        menu2: '从相册中选择'
      },
      listPic: [
        // { src: 'https://ooo.0o0.ooo/2017/05/17/591c271acea7c.jpg' },
        // { src: 'https://placekitten.com/800/400' }
      ],
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.ximg-demo')[index]
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        },
        isClickableElement: function(el) {
          return /previewer-delete-icon/.test(el.className)
        }
      },
      chooseData: {
        min: 1,
        max: 1,
        style: 1
      },
      showLoading: false,
      textLoading: '上传中'
    }
  },
  computed: {
    numSet() {
      this.num = this.listPic.length
      return this.num + '/' + this.total
    }
  },
  methods: {
    showPre(index) {
      this.$refs.previewer.show(index)
    },
    removeImg() {
      let index = this.$refs.previewer.getCurrentIndex()
      if (this.listPic.length === 1) {
        this.$refs.previewer.close()
      }
      this.listPic.splice(index, 1)
      this.images.splice(index, 1)
    },
    init() {},
    memuClick(key) {
      let self = this
      switch (key) {
        case 'menu1':
          // 拍照
          setTimeout(function() {
            self.takePicture()
          }, 300)
          break
        case 'menu2':
          // 选择照片
          setTimeout(function() {
            self.chooseImage()
          }, 300)
          break
        default:
          break
      }
    },
    takePicture() {
      var vmSelf = this
      appcan.takePicture(0, 50, function(data) {
        vmSelf.fileUpload(data)
      })
    },
    chooseImage() {
      var vmSelf = this
      appcan.chooseImage(this.chooseData, function(res) {
        if (res.error) {
          // vmSelf.$vux.toast.show({
          //   text: '选择图片出错',
          //   type: 'text'
          // })
        } else {
          vmSelf.fileUpload(res.images[0])
        }
      })
    },
    fileUpload(filePath) {
      var self = this
      self.realpath = filePath
      self.textLoading = '上传中'
      self.showLoading = true
      var path = filePath
      API.fileUpload(path, function(data) {
        if (data === 100) {
          self.showLoading = false
        } else {
          self.textLoading = data + ' %'
        }
      }).then(
        function(response) {
          self.showLoading = false
          self.listPic.push({ src: response.data.preAddr })
          self.images.push(response.data.storeAddr)
          self.$vux.toast.show({
            type: 'text',
            text: '上传成功',
            onHide() {}
          })
        },
        function() {
          self.showLoading = false
        }
      )
    },
    itemAddClick() {
      this.showMenus = true
    }
  },
  activated() {
    this.init()
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

.flex-icon {
  padding: 0.5rem;
  justify-content: center;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;
}
.flex-inner {
  width: 4rem;
  height: 4rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.fontSize {
  font-size: 3rem;
  color: #c7c7c7;
}
.ximg-demo {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.ximg-error {
  background-color: rgba(0, 0, 0, 0.5);
}
.previewer-delete-icon-box {
  position: relative;
  left: auto;
  top: auto;
  margin: 0;
  float: right;
  width: 44px;
  height: 44px;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;
  justify-content: center;
}
.previewer-delete-icon {
  font-size: 1.2em;
  color: white;
}
</style>
