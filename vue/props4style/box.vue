<!--
 * @description: 
 * @version: 
 * @Author: ya`nan
 * @Date: 2021-01-09 10:51:51
 * @LastEditors: ya`nan
 * @LastEditTime: 2021-01-09 11:01:17
-->
<template>
  <div class="box" :style="styleVar">
    the style of this div comes from props
  </div>
</template>

<script>

export default {
  props: {
    height: {
      type: Number,
      default: 300
    },
    width: {
      type: Number,
      default: 300
    },
    bgcolor: {
      type: String,
      default: '#f01ab3'
    }
  },
  computed: {
    styleVar() {
      return {
        '--box-height': this.height + 'px',
        '--box-width' : this.width + 'px',
        '--box-bgcolor': this.bgcolor
      }
    }
  }
}
</script>

<style>
.box{
  height: var(--box-height);
  width: var(--box-width);
  background: var(--box-bgcolor);
  text-align: center;
  line-height: var(--box-height);
}
</style>