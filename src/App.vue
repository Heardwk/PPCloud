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
/*::-webkit-scrollbar{
  width: 8px;
  opacity: 0;
  -webkit-overflow-scrolling: touch;
}
::-moz-scrollbar{
  width: 8px;
  opacity: 0;
  -moz-overflow-scrolling: touch;
}*/
@-moz-document url-prefix(chrome://), url-prefix(about:), 
url-prefix(file:///), url-prefix(http://), url-prefix(https://){
  scrollbar{
    -moz-appearance: none !important;
    background-color: transparent !important;/* 滚动条背景透明 */
    background-image: none !important; /* 滚动条背景图案不显示 */
    position: relative !important; /* 更改滚动条的定位方式为相对 */
    overflow: hidden !important;
    z-index: 999999999 !important; /* 把滚动条提到Z轴最上层 */
  }
  scrollbar[orient="vertical"] {   
    width: 0 !important;   
  } 
}
html,
body {
  height: 100%;
  width: 100%;
  font-family: PingFang SC,Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,\\5FAE\8F6F\96C5\9ED1,STHeiti,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
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
  color: #687178;
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
  overflow-x: hidden;
  overflow-y: auto;
}
header {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  line-height: 79px;
}
.topMenu {
  height: 80px;
  background: white;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
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
.teac .componentBox {
  width: 960px;
  margin: 0 auto;
  overflow: hidden
}
/*课程*/
.kechengTab .el-tabs__header {
  border-bottom: 0;
  border-bottom: none;
  margin: 0;
}
.kechengTab .el-tabs__header .el-tabs__nav {
  border: 0;
  border: none;
}
.kechengTab .el-tabs__header .el-tabs__nav .el-tabs__item {
  border: 0;
  border: none;
  padding: 0;
  margin: 20px 25px 20px 0;
}
.el-dialog__close {
  display: none;
}
.serch input {
  height: 28px;
  line-height: 28px;
}
</style>
