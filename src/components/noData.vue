<template>
<div  class="card-box">
  <div class="card-item-content" style="padding-top:5em">
    <flexbox orient="vertical">
      <flexbox-item><div class=" imgsize" ><img  :src="image"></div></flexbox-item>
      <flexbox-item><div class="card-item-content">{{ text }}</div></flexbox-item>
    </flexbox>
  </div>

</div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
    text: {
      type: String,
      default: '暂无数据'
    },
    image: {
      type: String,
      default: require('../assets/image/noData1.png')
    }
  },
  name: 'nodata',
  data() {
    return {
      msg: 'CPortal'
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.card-box {
  padding: 0.25em;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: flex-start;
}

.card-item-content {
  flex: 1;
  word-break: break-word;
  word-wrap: break-word;
  padding-left: 0.8em;
  padding-right: 0.8em;
  min-height: 3em;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  align-content: center;
  color: #999;
}
.imgsize {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgsize img {
  width: 30%;
}
</style>
