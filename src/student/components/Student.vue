<template>
  <div class="">
         <ul class="navigation">
     	<div class="logo-left">
     		   <a :href="shref" class="logo-left_img"></a>
     		   <span >云上实训</span>
     	</div>
			 <div class="heads">
        <el-header class="mainMenu" height="65px">
        	<router-link class="link" data-content="实训中心" to="trainingCenter">实训中心</router-link>
          <router-link class="link" data-content="我的任务" to="myTask">我的任务</router-link>
          <router-link class="link" data-content="成绩管理" to="management">成绩管理</router-link>
          <router-link class="link" data-content="能力档案" to="abilityfile">能力档案</router-link>
          <router-link class="link" data-content="资料共享" to="datasharing">资料共享</router-link>
          <el-dropdown>
          <img class="logo-img" src="" alt="" />
					  <span class="el-dropdown-link">学生</span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>个人中心</el-dropdown-item>
					    <el-dropdown-item>退出</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
        </el-header>
     </div>
			</ul>
			 <transition name="page">
         <keep-alive> 
            <router-view />
          </keep-alive>
       </transition>
       <el-footer>
       	<div class="footer">
       	     <ul>
       	     	<li><a href="#">帮助</a></li>
       	     	<li><a href="#">隐私</a></li>
       	     	<li><a href="#">条款</a></li>
       	     </ul>
       	</div>
       	  <p>copyright&nbsp;&nbsp;©&nbsp;2018&nbsp; 中德安普大数据网络科技有限公司</p>
       </el-footer>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      shref: 'www.baidu.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
ul{
		list-style: none;
	}
	body,html{
		margin: 0;
		padding: 0;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 页面路由过渡 */ 
.page-leave-to {
  opacity: 0; 
}
.page-leave-active {
  -webkit-transition: all 200ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
     -moz-transition: all 200ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
          transition: all 200ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
}
.page-enter {
  opacity: 0;
}
.page-enter-active {
  -webkit-transition: all 200ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
     -moz-transition: all 200ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
          transition: all 200ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
}
/* 顶部菜单 */
.heads {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  margin-right: 3vw;
}
.head a{
	 color: #FFFFFF;
}
.mainMenu {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  align-self: center;
}
.link {
  margin: 0 2vw;
  padding: 0;
  -webkit-transition: all .3s linear;
          transition: all .3s linear;
  position: relative;
  text-decoration: none;
}
.link::after {
  content: attr(data-content);
  position: absolute;
  display: block;
  color: #157cf0;
  top: 0;
  left: 0;
  -webkit-transition: all .3s linear;
     -moz-transition: all .3s linear;
          transition: all .3s linear;
  -webkit-clip-path: inset(0% 100% 0% 0%);
          clip-path: inset(0% 100% 0% 0%);
}
.link::before {
  position: absolute;
  content: '';
  left: 0;
  right: 100%;
  bottom: 9px;
  height: 2px;
  background-color: #157cf0;
  -webkit-transition: all .3s linear;
     -moz-transition: all .3s linear;
          transition: all .3s linear;
          
}
.link:hover::after, .router-link-active::after {
  -webkit-clip-path: inset(0% 0% 0% 0%);
          clip-path: inset(0% 0% 0% 0%);
}
.router-link-active::before {
  right: 0;
}
.fixed {
  position: fixed;
  top: -61px;
  z-index: 999;
  right: 0;
  width: 100%;
  background-color: white;
  transform: translateY(100%);
  -webkit-transition: all .3s linear;
     -moz-transition: all .3s linear;
          transition: all .3s linear;
}
.el-main {
  padding-bottom: 1.3rem
}
.el-dropdown-link{
	  height: 65px;
    line-height: 65px;
    padding: 0;
    font-size: 16px;
    color: #fff;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    position: relative;
    text-decoration: none;
        margin: 0 1vw;
}
.navigation{
	  background-color: rgba(0, 24, 46, 1);
	  margin: 0;  
}
.heads a{
	   height:65px;
	  line-height: 65px;
	  color: #fff;
}
.logo-img{
	  display: inline-block;
    width: 32px;
    height: 32px;
    background: inherit;
    background-color: rgba(255, 255, 255, 0.458823529411765);
    border: none;
    border-radius: 15px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 18px;
    color: #FFFFFF;
    vertical-align:middle; 
}
.el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    margin-left: 2vw;
}
.logo-left{
	float: left;
	margin-left: 1vw;
	height:65px;
	width: 300px;
	justify-content: center;
	vertical-align: center;
}
.logo-left_img{
  float: left;
	width: 69px;
  height: 64px;
  background-image: url(../assets/u28.png);
  background-repeat: no-repeat;
  cursor: pointer;
}
.logo-left>span{
  float: left;
	width: 110px;
  height: 65px;
  line-height: 65px;
  color: #FFFFFF;
  font-size: 20px;
}
.footer>ul{
	 width: 100%;
	 display: flex;
	 justify-content: center;
}
.footer>ul>li>a{
  display:inline-block;
	width: 70px;
	height: 20px;
	color: #333333;
	text-align:center;
	text-decoration: none;
	line-height: 20px;
	margin-bottom: 1vw;
}
</style>
