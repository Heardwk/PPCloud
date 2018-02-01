<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-family: "Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #F8F8F8;
}
div {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
body,dl,dd,h1,h2,h3,h4,h5,h6,p,form {
  margin: 0;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  color: #888888;
  cursor: pointer;
  text-decoration: none;
}
button {
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
/* 院校首页 */
.tabNav .el-tabs__item {
  font-size: 18px;
  line-height: 60px;
  height: 60px;
}
.tabNav .el-tabs__item:hover {
  color: rgba(0, 176, 255, 1);
}
.tabNav .el-tabs__item.is-active {
  color: rgba(0, 176, 255, 1);
}
.el-main {
  padding: 0;
}
header {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 70px;
  line-height: 80px;
}
.topMenu {
  height: 80px;
  background: white;
}
.head .white {
  color: white;
}
.foot {
  width: 960px;
  margin: 0 auto;
  height: 70px;
  line-height: 90px;
  overflow: hidden;
  color: #A5B7C5;
  position: relative;
}
.foot span {
  margin-right: 25px;
}
.foot a {
  color: #A5B7C5;
  position: absolute;
  right: 0;
}
</style>
