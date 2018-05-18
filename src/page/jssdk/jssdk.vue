<template>
  <div style="height:100%;z-index:2">
    <view-box ref="viewBox" body-padding-top="46px"  body-padding-bottom="0">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">jssdk</x-header>
      <group :title="msg">
        <cell title="是否是appcan" value="isAppCan" is-link @click.native="isAppCan"></cell>
        <x-input title="长度" v-model="uidLength"></x-input>
        <cell title="获取uid" value="getUID" is-link @click.native="getUID"></cell>
        <x-input title="设备信息Id" v-model="deviceId"></x-input>
        <cell title="获取设备信息" value="getInfo" is-link @click.native="getInfo"></cell>
        <cell title="获取网络状态" value="getNetworkType" is-link @click.native="getNetworkType"></cell>
        <x-input title="图片是否压缩" placeholder="0压缩，非0不压缩" v-model="comtextareass"></x-input>
        <x-input title="图片压缩质量" placeholder="comtextareass为0时有效,取值范围[0-100]" v-model="quality"></x-input>
        <cell title="拍照，调用系统相机拍照,回调" value="takePicture" is-link @click.native="takePicture"></cell>
        <cell title="拍照，调用系统相机拍照,promise" value="takePicturePromise" is-link @click.native="takePicturePromise"></cell>
        <cell title="选择图片,回调" value="chooseImage" is-link @click.native="chooseImage"></cell>
        <cell title="选择图片,promise" value="chooseImagePromise" is-link @click.native="chooseImagePromise"></cell>
        <cell title="预览图片,回调" value="previewImage" is-link @click.native="previewImage"></cell>
        <cell title="预览图片,promise" value="previewImagePromise" is-link @click.native="previewImagePromise"></cell>
        <x-input  v-model="picPath"></x-input>
        <cell title="剪裁图片,回调" value="openCropper" is-link @click.native="openCropper"></cell>
        <cell title="剪裁图片,promise" value="openCropperPromise" is-link @click.native="openCropperPromise"></cell>
        <x-input title="坐标系"  v-model="locationType"></x-input>
        <cell title="获取经纬度,回调" value="getLocation" is-link @click.native="getLocation"></cell>
        <cell title="获取经纬度,promise" value="getLocationPromise" is-link @click.native="getLocationPromise"></cell>
        <cell title="log日志" value="logs" is-link @click.native="logs"></cell>
        <cell title="扫一扫" value="scanQRCode" is-link @click.native="scanQRCode"></cell>
        <x-input title="二维码图片路径"  v-model="scannerPath"></x-input>
        <cell title="识别二维码图片,回调" value="scanImage" is-link @click.native="scanImage"></cell>
        <cell title="识别二维码图片,promise" value="scanImagePromise" is-link @click.native="scanImagePromise"></cell>
        <x-input title="菜单项" placeholder="0-返回键,1-菜单键" v-model="keyCode"></x-input>
        <cell title="android物理键监听" value="onKeyPressed" is-link @click.native="onKeyPressed"></cell>
        <cell title="关闭当前窗口" value="closeWindow" is-link @click.native="closeWindow"></cell>
        <cell title="开启录音" value="startRecord" is-link @click.native="startRecord"></cell>
        <cell title="停止录音,回调" value="stopRecord" is-link @click.native="stopRecord"></cell>
        <cell title="停止录音,promise" value="stopRecordPromise" is-link @click.native="stopRecordPromise"></cell>
        <x-input title="录音文件"  v-model="voicePath"></x-input>
        <cell title="播放语音" value="playVoice" is-link @click.native="playVoice"></cell>
        <cell title="暂停播放语音" value="pauseVoice" is-link @click.native="pauseVoice"></cell>
        <cell title="停止播放语音" value="stopVoice" is-link @click.native="stopVoice"></cell>
        <cell title="监听语音播放完毕接口,回调" value="onVoicePlayEnd" is-link @click.native="onVoicePlayEnd"></cell>
        <cell title="监听语音播放完毕接口,promise" value="onVoicePlayEndPromise" is-link @click.native="onVoicePlayEndPromise"></cell>
        <x-input title="storage 内容"  v-model="storage"></x-input>
        <cell title="localstorage 设置" value="val" is-link @click.native="setVal"></cell>
        <cell title="localstorage 获取" value="val" is-link @click.native="getVal"></cell>
        <cell title="localstorage 清除" value="clear" is-link @click.native="clear"></cell>
        <cell title="localstorage 通过key清除" value="clear" is-link @click.native="clearbykey"></cell>
        <cell title="修改当前页面标题(健康号专用)" value="setWindowTitle" is-link @click.native="setWindowTitle"></cell>
        <x-input title="健康号右侧menu选项(健康号专用)"  v-model="menus"></x-input>
        <cell title="设置健康号右侧menu选项(健康号专用)" value="setTitleMenu" is-link @click.native="setTitleMenu"></cell>
        <cell title="获取健康号右侧menu选项(健康号专用)" value="getTitleMenu" is-link @click.native="getTitleMenu"></cell>
        <x-input title="当前页面标题颜色(健康号专用)"  v-model="titleColor"></x-input>
        <cell title="修改当前页面标题颜色(健康号专用)" value="setTitleBackgroundColor" is-link @click.native="setTitleBackgroundColor"></cell>

      </group>
      <div v-transfer-dom>
        <popup v-model="show">
          <div class="popup0">
            {{value}}
          </div>
        </popup>
      </div>
    </view-box>
  </div>
</template>

<script>
import appcan from '../../libs/appcan'

export default {
  methods: {
    getUID() {
      this.value = appcan.getUID(this.uidLength)
      this.show = true
    },
    getInfo() {
      this.value = appcan.getInfo(this.deviceId)
      this.show = true
    },
    getNetworkType() {
      this.value = appcan.getNetworkType()
      this.show = true
    },
    takePicture() {
      var self = this
      appcan.takePicture(this.comtextareass, this.quality, function(data) {
        self.value = data
        self.show = true
      })
    },
    takePicturePromise() {
      var self = this
      appcan
        .takePicturePromise(this.comtextareass, this.quality)
        .then(function(data) {
          self.value = data
          self.show = true
        })
    },
    chooseImage() {
      var self = this
      appcan.chooseImage(this.chooseData, function(res) {
        if (res.error) {
          self.value = res.error
        } else {
          self.value = JSON.stringify(res.images)
          self.picPath = res.images[0]
        }
        self.show = true
      })
    },
    chooseImagePromise() {
      var self = this
      appcan.chooseImagePromise(this.chooseData).then(
        function(res) {
          if (res.error) {
            self.value = res.error
          } else {
            self.value = JSON.stringify(res.images)
            self.picPath = res.images[0]
          }
          self.show = true
        },
        function(err) {
          self.value = err
          self.show = true
        }
      )
    },
    previewImage() {
      appcan.previewImage(this.previewData, function() {
        console.log('关闭了')
      })
    },
    previewImagePromise() {
      appcan.previewImagePromise(this.previewData).then(function() {
        console.log('关闭了')
      })
    },
    openCropper() {
      var self = this
      this.cropperData.src = this.picPath
      appcan.openCropper(this.cropperData, function(res) {
        self.value = JSON.stringify(res)
        if (!res.error) {
          self.picPath = res.path
        }
        self.show = true
      })
    },
    openCropperPromise() {
      var self = this
      this.cropperData.src = this.picPath
      appcan.openCropperPromise(this.cropperData).then(function(res) {
        self.value = JSON.stringify(res)
        if (!res.error) {
          self.picPath = res.path
        }
        self.show = true
      })
    },
    getLocation() {
      var self = this
      appcan.getLocation(this.locationType, function(res) {
        self.value = JSON.stringify(res)
        self.show = true
      })
    },
    getLocationPromise() {
      var self = this
      appcan.getLocationPromise(this.locationType).then(
        function(res) {
          if (res) {
            self.value = JSON.stringify(res)
            self.show = true
          }
        },
        function(err) {
          self.value = JSON.stringify(err)
          self.show = true
        }
      )
    },
    logs() {
      appcan.logs('log日志')
    },
    scanQRCode() {
      var self = this
      appcan.scanQRCode(function(error, data) {
        if (!error) {
          self.value = JSON.stringify(data)
          self.show = true
        }
      })
    },
    scanImage() {
      var self = this
      appcan.scanImage(this.scannerPath, function(res) {
        self.value = res
        self.show = true
      })
    },
    scanImagePromise() {
      var self = this
      appcan.scanImagePromise(this.scannerPath).then(function(res) {
        self.value = res
        self.show = true
      })
    },
    onKeyPressed() {
      var self = this
      appcan.onKeyPressed(this.keyCode, function(key) {
        self.value = key
        self.show = true
      })
    },
    closeWindow() {
      appcan.closeWindow()
    },
    startRecord() {
      appcan.startRecord(this.voiceMode)
    },
    stopRecord() {
      var self = this
      appcan.stopRecord(function(path) {
        self.value = path
        self.voicePath = path
        self.show = true
      })
    },
    stopRecordPromise() {
      var self = this
      appcan.stopRecordPromise().then(function(path) {
        self.value = path
        self.voicePath = path
        self.show = true
      })
    },
    playVoice() {
      this.onVoicePlayEndPromise()
      appcan.playVoice(this.voicePath)
      self.value = '语音播放开始'
    },
    pauseVoice() {
      appcan.pauseVoice()
    },
    stopVoice() {
      appcan.stopVoice()
    },
    onVoicePlayEnd() {
      var self = this
      appcan.onVoicePlayEnd(function() {
        self.value = '语音播放完毕 onVoicePlayEnd'
        self.show = true
      })
    },
    onVoicePlayEndPromise() {
      var self = this
      appcan.onVoicePlayEndPromise().then(function() {
        self.value = '语音播放完毕 onVoicePlayEndPromise'
        self.show = true
      })
    },
    isAppCan() {
      this.value = appcan.isAppCan() ? '是' : '否'
      this.show = true
    },
    setWindowTitle() {
      appcan.setWindowTitle('健康号标题')
    },
    setTitleMenu() {
      var menus = this.menus
      try {
        menus = JSON.parse(menus)
        appcan.setTitleMenu(menus)
      } catch (e) {
        this.value = '参数错误，不是数组'
        this.show = true
      }
    },
    getTitleMenu() {
      this.value = JSON.stringify(appcan.getTitleMenu())
      this.show = true
    },
    setTitleBackgroundColor() {
      appcan.setTitleBackgroundColor(this.titleColor)
    },
    setVal() {
      appcan.val('storage', this.storage)
      this.value = '设置成功'
      this.show = true
    },
    getVal() {
      this.value = appcan.val('storage')
      this.show = true
    },
    clear() {
      appcan.clear()
    },
    clearbykey() {
      appcan.clear('storage')
    }
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'jssdk demo,jssdk版本',
      uidLength: 10,
      show: false,
      value: '',
      deviceId: 1,
      comtextareass: 0,
      quality: 50,
      chooseData: {
        min: 1,
        max: 3,
        style: 1
      },
      previewData: {
        startIndex: 1,
        data: [
          'http://www.appcan.cn/daemon_file/indeximg/indeximg20160923_061948428_2.png',
          'http://www.appcan.cn/images/logo.png'
        ],
        style: 1
      },
      cropperData: {
        src: '',
        mode: 1
      },
      picPath: '',
      locationType: 'bd09',
      scannerPath: 'https://work.appcan.cn/uploads/dl/css/ios.png',
      keyCode: 0,
      voiceMode: 0,
      voicePath: '',
      titleColor: '#333333',
      showMenus: false,
      showMore: true,
      storage: '我是storage内容',
      menus: `["pyq","weixin","qq","weibo","refresh","copyUrl","openInBrowser"]`
    }
  },
  mounted() {
    console.log(appcan.getUID(this.uidLength))
    appcan.logs('aaaaa')
    this.msg = this.msg + appcan.version
  }
}
window.onerror = function(errorMsg) {
  alert(errorMsg)
}
</script>

<style>
.popup0 {
  padding: 2em 0;
}
</style>
