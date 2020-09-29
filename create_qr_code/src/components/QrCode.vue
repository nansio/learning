<template>
<div class="qrcode-container">
  <div id="qrcode" ref="qrcode"></div>
  <div class="input">
    <input type="text" name="address" id="address" :value="codeText" @keyup.enter="makeQR">
  </div>
</div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  data() {
    return {
      codeText: 'http://blueblue.icu',
      qr: null
    }
  },
  mounted() {
    this.initQrCode();
    this.qr.makeCode(this.codeText)
  },
  methods: {
    initQrCode() {
      this.qr = new QRCode(document.getElementById("qrcode"), {
        width: 100,
        height: 100,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
    makeQR() {
      // this.qr.clear()
      this.qr.makeCode(this.codeText)
    }
  }
};
</script>

<!-- 添加 "scoped" attribute 限制 CSS 只对此组件生效 -->

<style scoped>
</style>
