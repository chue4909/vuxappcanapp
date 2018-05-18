<template>
  <div class="app">
    <grid :cols="cols" >
        <grid-item style="padding:1.8rem 0 .5rem;border:1px" v-for="( listItem, indx ) in list" :key="indx"  @on-item-click="$emit('on-gridItem-click', listItem)">
          <img slot="icon" v-lazy="listItem.icon" class="itemImg icon-circle">
          <span slot="label" class="itemLable">{{ listItem.name }}</span>
        </grid-item>
      </grid>
  </div>
</template>
<script>
import { Grid, GridItem } from 'vux'
export default {
  components: {
    Grid,
    GridItem
  },
  props: {
    list: [Object, Array],
    cols: {
      type: Number,
      default: 4
    }
  },
  name: 'Agrid',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.itemImg {
  width: 2.8125rem !important;
  height: 2.8125rem !important;
  left: -0.53125rem;
  top: -1.05rem;
  position: relative;
}
.app .weui-grid__label {
  width: 7em;
  text-overflow: clip;
}
.itemLable {
  position: relative;
  text-overflow: clip;
  width: 7em;
}
.app .weui-grids::after {
  border: none;
}
.app .weui-grids::before {
  border: none;
}
.app .weui-grid::after {
  border: none;
}
.app .weui-grid::before {
  border: none;
}
.icon-circle{
  border-radius: 50%;
}
</style>
