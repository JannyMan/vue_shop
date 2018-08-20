<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.weui-tabbar{
  position: fixed !important;
}
</style>
<style lang="less">
@import '~vux/src/styles/reset.less';
@font-face {
  font-family: 'iconfont';
  src: url('fonts/iconfont.eot');
  src: url('fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('fonts/iconfont.woff') format('woff'),
  url('fonts/iconfont.ttf') format('truetype'),
  url('fonts/iconfont.svg#iconfont') format('svg');
}
</style>
