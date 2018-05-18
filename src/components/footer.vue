<template>
    <tabbar v-model="value" class="tabbar">
      <tabbar-item :selected="item.selected" @on-item-click="itemClick(item)" :link="item.link" v-for="(item, index) in footerData" :key="index" :badge="item.badge" :show-dot="item.isShowdot" >
        <i class="icon iconfont icon-color" slot="icon" v-html="item.iconfont"></i>
        <span slot="label">{{ item.label }}</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  props: ['footerData', 'tabindex'],
  components: {
    TabbarItem,
    Tabbar
  },
  name: 'Afooter',
  data() {
    return {
      value: 0
    }
  },
  watch: {
    tabindex(val) {
      this.value = val
    },
    value(val) {
      this.$emit('update:tabindex', val)
    }
  },
  methods: {
    itemClick(item) {
      this.$emit('on-footer-click', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  position: relative;
  top: -4px;
}

.tabbar .weui-tabbar::before {
  border: 1px solid #e3e3ea;
}
</style>
<style>

</style>

