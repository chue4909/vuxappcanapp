<template>
    <div>
    </div>
</template>
<script>
import API from '../../js/common'
export default {
  name: 'startpage',
  data() {
    return {
      authCode: '',
      appId: '549743e8-8b3b-4830-950c-b36d9f6baf99',
      appKey: '14615a37-be30-4a22-b913-d9939a9a4344'
    }
  },
  methods: {
    getUserData() {
      var postdata = {
        accessToken: this.accessToken
      }
      let that = this
      API.getUserData(postdata).then(function(data) {
        let obj = data.data.data.detail
        // TODO 添加获取到用户信息后保存等后续操作
        console.log(obj)
        // 进入首页
        that.$router.replace({ name: 'index' })
      })
    },
    getAccessToken() {
      var postdata = {
        authCode: this.authCode,
        appId: this.appId,
        secret: this.appKey,
        grantType: 'authCode'
      }
      var that = this
      console.log(postdata)
      API.getAccessToken(postdata).then(function(data) {
        let accessToken = data.data.data.accessToken
        if (accessToken) {
          that.accessToken = accessToken
          // data.data.data.detail 用户信息
          that.getUserData()
        }
      })
    },
    createAuth() {
      // 如果已认证会获取到authCode
      let authCode = this.$route.query.authCode || this.$route.query.autocode
      this.authCode = authCode
      let that = this
      // 未认证，进行认证
      if (!authCode) {
        window.location.href = API.api_url.auth.authUrl + 'appId=' + this.appId + '&redirectUrl=' + encodeURIComponent(API.base + '/demo/index.html#/startpage')
      } else {
        // 已认证获取accessToken
        that.getAccessToken()
      }
    }
  },
  created: function() {
    let that = this
    this.$nextTick(function() {
      that.createAuth()
    })
  }
}
</script>

