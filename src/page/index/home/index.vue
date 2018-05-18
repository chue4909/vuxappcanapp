<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px">
      <x-header slot="header" :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">首页</x-header>
      <group title="">
        <cell title="jssdk" is-link :link="{name:'jssdk'}"></cell>
        <cell title="下拉刷新、无限加载、网络请求list" is-link :link="{name:'list',param:{catId:'3eb3ad42-cecc-4d83-9283-4b40c15b06eb'}}"></cell>
      </group>
    </view-box>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>

</style>
