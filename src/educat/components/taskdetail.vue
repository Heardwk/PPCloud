<template>
    <div>  
        <div class="task">
          <div class="tea_tits">
    	        <el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/Educat/Teaching' }">任教管理</el-breadcrumb-item>
				  <el-breadcrumb-item>任教详情</el-breadcrumb-item>
			    </el-breadcrumb>
    	   </div>
    	   <div class="task_top">
    	       <p>任教详情</p>
    	      <div calss="t_task">
    	       	  <ul class="t_task_t">
    	       	  	<li><b>教师名称</b><span>{{gridData.teacher}}</span></li>
    	       	  	<li><b>任教课程</b><span>{{gridData.name}}</span></li>
    	       	  	<li><b>任教期间</b><span>{{gridData.when}}</span></li>
    	       	  </ul>
    	       	  <ul class="t_task_t">
    	       	  	<li><b>任教学院</b><span>{{gridData.college}}</span></li>
    	       	  	<li><b>任教年级</b><span>{{gridData.classs}}</span></li>
    	       	  	<li><b>任叫班级</b><span>{{gridData.tea_class}}</span></li>
    	       	  </ul>
    	      </div>
    	   </div>
    	   <div class="">
    	        <div class="task_tit">
    	           <b>实训详情</b>
    	           <span>共实训三次</span>
    	        </div>
    	        <div class="t_task_con">
    	            
    	        </div>
    	   </div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'taskdetail',
  props:{
  	gridData:{}
  },
  data () {
    return {
    indexon:2,
	Eattr:{
			listName:'获取数据失败',
		}
    }
  },
  mounted () {
    this.$store.commit("studentshow",false);
     if(this.$route.query.name){
	    this.Eattr.listName = this.$route.query.name
	 }
     console.log(this.gridData)
  },
  destroyed() {
    this.$store.commit("studentshow",true)
  },
 }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
	-webkit-padding-start: 0px;
}
.task{
    width: 1240px;
	border: 1px solid #E8E8E8;
	min-height: 705px;
	margin: auto;
	background-color: rgb(255,255,255);
}
.tea_tits{
    margin-top: 16px;
	margin-left: 25px;
}
.task_top{
	padding-left: 25px;
	margin-top: 25px;
	margin-bottom: 10px;
	border-bottom: 10px solid #f0f2f5;
}
.task_top>p{
	font-weight: 600;
}
.t_task_t{
	margin-bottom: 25px;
	display: flex;
}
.t_task_t>li{
	width:30%;
}
.t_task_t>li>b{
	display: inline-block;
	font-weight: 400;
	width:70px;
	height:22px; 
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(0,0,0,0.85);
	line-height:22px
}
.t_task_t>li>span{
	display: inline-block;
	width:200px;
	height:22px; 
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(0,0,0,0.65);
	line-height:22px;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.task_tit{
	height: 60px;
	line-height: 60px;
	margin-left: 25px;
	display: flex;
	position: relative;
	align-items: center;
	border-bottom:2px solid #f0f2f5;
    margin-right: 25px;
}
.task_tit>span{
	position: absolute;
	right: 0px;
	top: 0px;
	width:74px;
	height:24px; 
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(0,0,0,0.65);
}
.task_tit>b{
	display: inline-block;
	width:64px;
	height:24px; 
	font-size:16px;
	font-family:PingFangSC-Medium;
	color:rgba(0,0,0,0.85);
	line-height:24px;
}
.t_task_con{
	border-left: 1px solid #F0F2F5;
	min-height: 200px;
	margin-left: 25px;
}

</style>
