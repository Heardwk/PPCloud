<template>
  <div id="app" style="height: 100%">
    <router-view style="height: 100%" />
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
ul {
  -webkit-padding-start: 0px;
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
  position: relative;
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
/*教务*/
.inlineBox input {
  border-radius: 0;
}
.sxtabBox .el-tabs__nav-wrap::after {
  background-color: white;
}
.ziliaoupfile .el-upload-dragger {
  width: 227px;
}
/*题组*/
.fuzhuziliao .el-carousel__indicators {
  display: none;
}
.fuzhuziliao .el-carousel__container {  
  transition: height linear .5s;
  -webkit-transition: height linear .5s;
}
.teacTiZu .el-radio-button__inner {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  padding: 0;
  text-align: center;
  border: none;
  color: black;
  background-color: #dcdfe6;
}
.teacTiZu .el-radio-button__inner:hover{
  border:1px solid #157cf0;
}
.teacTiZu .el-radio-button__inner:first-child, .teacTiZu .el-radio-button__inner:last-child {
  border-radius: 4px;
}
.teacTiZu .dui .el-radio-button__inner {
  background-color: #78D895;
  border-color: #78D895;
  box-shadow: 0 0 0 white;
}
.teacTiZu .cuo .el-radio-button__inner {
  background-color: #FF7078;
  border-color: #FF7078;
  box-shadow: 0 0 0 white;
}
.teacTiZu .yiping .el-radio-button__inner {
  background-color: #FCC049;
  border-color: #FCC049;
  box-shadow: 0 0 0 white;
}
.teacTiZu .weiping .el-radio-button__inner {
  background-color: #29C0C0;
  border-color: #29C0C0;
  box-shadow: 0 0 0 white;
}
.teacTiZu .el-radio-button:focus:not(.is-focus):not(:active){
  box-shadow: none;
}
/*全真案例*/
.ys>.el-tabs__header {
    border-bottom: 1px solid #fff;
    width: 48%;
    position: relative;
    top: -41px;
}
.ys>.el-tabs__header .el-tabs__nav {
    border: 1px solid transparent;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
}
.ys .el-tabs--border-card>.el-tabs__header {
    background-color: #f5f7fa;
    border: transparent;
    margin: 0;
}
.ys .el-tabs__content {
   position: relative;
    top: -35px;
}
.ys>.el-tabs__header .el-tabs__item{
  border:0;
}
/*我的任务的分页*/
.pagein>.el-pagination{
    text-align: center;
}
/*我的任务表格*/
.table_but .el-table th>.cell {
    position: relative;
    word-wrap: normal;
    text-overflow: ellipsis;
    vertical-align: middle;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
}
.table_but .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    text-align: center;
}
.table_but .el-table th, .el-table tr:only-child{
    background:rgba(250,250,250,1)
}
.table_but .el-table--fit {
    border-right: 0;
    border-bottom: 0;
    margin-top: 25px;
    max-height: 455px;
    overflow-y: auto;
}
/*成绩管理*/
.man_nav .el-tabs--border-card>.el-tabs__header {
    background-color: #fff;
    border-bottom: 1px solid transparent;
    margin: 0;
    position: relative;
    top: -55px;
    width: 960px;
    margin: auto;
}
.man_nav.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #409EFF;
    background-color: #fff;
    border-right-color: #fff; 
    border-left-color: #fff; 
}
.man_nav .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #409EFF;
    background-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
}
.man_nav .el-tabs--border-card{
   width: 960px;
   margin: 0 auto;
}
.man_nav .el-tabs--border-card>.el-tabs__content {
    padding: 15px;
    margin-top: -54px;
    padding-top: 28px;
}
.tables .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-all;
    /*text-align: center;*/
}
.tables  .el-table th.is-leaf{
    background:rgba(248,248,248,1);
}
.tables .el-table tr>th:nth-child(3){
    text-align: left;
}
.tables .el-table thead {
    font-size:14px;
    font-family:PingFangSC-Regular;
    color:rgba(0,0,0,0.6);
    line-height:20px;
}
.el-popper {
    margin-top: 37px;
}

.table_list  thead {
    color: #909399;
    font-weight: 500;
    background: red; 
}
.table_list .el-table th, .el-table tr:only-child {
    background-color: rgba(250,250,250,1);
} 
.cases_cot_left_tit .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 25px;
    line-height: 1;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    margin-left: 8%;
}
#input_s{
   width: 130px;
}
/*任教管理*/
.tea_cot>.el-select>.el-input--suffix .el-input__inner{
  display: inline-block;
    padding-right: 25px;
    padding-left: 28px;
    width: 220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 79px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}
.tea_cot>.el-table-fil>.el-select>.el-input--suffix .el-input__inner{
  display: inline-block;
    padding-right: 25px;
    padding-left: 28px;
    width: 220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 79px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}
</style>
