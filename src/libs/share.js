import Vue from 'vue'
import { ToastPlugin } from 'vux'
/**
 *  微信分享相关方法
 */
export const weChatMethods = {
  AppID: 'wxcd9021ee78eb3ab4',
  AppSecret: '',
  access_token: '', // 接口调用凭证
  shareLinkJson: {
    thumbImg: 'res://icon.png', // (必选)缩略图地址Url(大小必须小于32k)
    wedpageUrl: 'http://www.appcan.cn', // (必选)链接的地址
    scene: 0, // (必选)发送的目标场景 0-会话场景 1-朋友圈场景
    title: '', // (必选)链接的标题
    description: '' // (必选)描述
  },
  // 用户授权
  shareLinkContent: function() {
    Vue.$vux.toast.show({
      text: '分享中',
      type: 'text'
    })
    uexWeiXin.cbRegisterApp = function (opCode, dataType, data) {
      // 0-成功,1-失败。
      if (Number(data) === 0) {
        uexWeiXin.shareLinkContent(JSON.stringify(self.shareLinkJson))
      } else {
        Vue.$vux.toast.hide()
        Vue.$vux.toast.text(`微信授权失败`, 'middle')
      }
    }
    uexWeiXin.cbShareLinkContent = function(data) {
      Vue.$vux.toast.hide()
      if (Number(data) === 0) {
        Vue.$vux.toast.show({
          text: '分享成功',
          type: 'text',
          onHide() {
            uexWindow.closePopover('share')
          }
        })
      } else {
        Vue.$vux.toast.show({
          text: '分享失败',
          type: 'text',
          onHide() {
            uexWindow.closePopover('share')
          }
        })
      }
    }
    uexWeiXin.registerApp(this.AppID)
  }
}
export const qqMethod = {
  AppID: '101353713',
  AppKey: '',
  shareLinkJson: {
    title: weChatMethods.shareLinkJson.title,
    summary: weChatMethods.shareLinkJson.description,
    targetUrl: weChatMethods.shareLinkJson.wedpageUrl,
    imageUrl: weChatMethods.shareLinkJson.thumbImg,
    appName: weChatMethods.shareLinkJson.title
  },
  uexShareWebImgText: function() {
    var self = this
    Vue.$vux.toast.show({
      text: '分享中',
      type: 'text'
    })
    uexQQ.cbIsQQInstalled = function(opId, dataType, data) {
      // 安装结果，0-已安装，1-未安装
      if (Number(data) === 0) {
        uexQQ.shareWebImgTextToQQ(
          self.AppID,
          JSON.stringify(self.shareLinkJson)
        )
      } else {
        Vue.$vux.toast.hide()
        Vue.$vux.toast.text(`未安装QQ！`, 'middle')
      }
    }
    uexQQ.cbLogin = function(opId, dataType, data) {
      var jsondata = JSON.parse(data)
      if (Number(jsondata.ret) === 0) {
      } else {
        Vue.$vux.toast.hide()
        Vue.$vux.toast.text(`QQ登录失败`, 'middle')
      }
    }

    uexQQ.cbShareQQ = function(opId, dataType, data) {
      var jsondata = JSON.parse(data)
      if (Number(jsondata.errCode) === 0) {
        Vue.$vux.toast.show({
          text: '分享成功',
          type: 'text',
          onHide() {
            uexWindow.closePopover('share')
          }
        })
      } else {
        Vue.$vux.toast.show({
          text: '分享失败',
          type: 'text',
          onHide() {
            uexWindow.closePopover('share')
          }
        })
      }
    }
    uexQQ.isQQInstalled()
  }
}
export const shareWB = {
  AppID: '1652165019',
  AppKey: '7bfb1d39bcea62f517f67de019223b07',
  shareLinkJson: {
    title: weChatMethods.shareLinkJson.title,
    imageUrl: weChatMethods.shareLinkJson.thumbImg,
    registerURL: 'https://api.weibo.com/oauth2/default.html'
  },
  uexShareWebImgText: function() {
    var self = this
    Vue.$vux.toast.show({
      text: '分享中',
      type: 'text'
    })
    uexSina.cbRegisterApp = function(opId, dataType, data) {
      if (Number(data) === 0) {
        uexSina.sendImageContent(
          self.shareLinkJson.imageUrl,
          self.shareLinkJson.title
        )
      } else {
        Vue.$vux.toast.hide()
        Vue.$vux.toast.text(`微博注册失败`, 'middle')
      }
    }

    uexSina.cbShare = function(opId, dataType, data) {
      if (Number(data) === 0) {
        Vue.$vux.toast.show({
          text: '分享成功',
          type: 'text',
          onHide() {
            uexWindow.closePopover('share')
          }
        })
      } else {
        Vue.$vux.toast.show({
          text: '分享失败',
          type: 'text',
          onHide() {
            uexWindow.closePopover('share')
          }
        })
      }
    }
    uexSina.registerApp(self.AppID, self.AppKey, self.shareLinkJson.registerURL)
  }
}
