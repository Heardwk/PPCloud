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
        </div>
	</div>
</template>

<script>
export default {
  name: 'taskdetail',
  props:{
  	gridData:{
  		type:Object,
  		default:''
  	}
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
}
.t_task_t{
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
</style>
