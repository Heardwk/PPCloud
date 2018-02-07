<template>
   <div style="background-color: rgba(255, 248, 248, 0.2 );">
	   <div class="Basic">
	   	   	 <p>实训中心><b>{{Eattr.listName}}</b></p>
	       <div class="Basic_index_top">
		       	<a href="">
		       		<img :src="Eattr.listImg"/>
		       	</a>
		      <!-- 	<span>{{listName}}</span>-->
		       	<div class="Basic_index_top_rig">
		       	       <p>{{Eattr.listName}}</p>
		       	       <span>
		       	       	这里是本课程描述信息包括内容简绍实训目标等信息这里是本课程描述信息包括内容简绍实训目标等信息这里是本课程描述信息包括内容简绍实训目标等信息这里是本课程描述信息包括内容简绍实训目标等信息这里是本课程
		       	       	描述信息包括内容简绍实训目标等信息这里是本课程描述信息包括内容简绍实训目标等信息这里是本课程描述信息包括内容简绍实
		       	       </span>
		       	       <b><i></i>任教老师：待分配......</b>
		       	</div>
	       </div>
	       <div class="Basic_index_bot">
	       		<detailscon></detailscon>
	       </div>
	   <keep-alive> 
	      <router-view />
	   </keep-alive>
	   </div>
   </div>
</template>

<script>
import detailscon  from '@/student/components/courseTraining/detailscon'
export default{
  name:'Basic_Accounting',
	data(){
		return {
			Eattr:{
				listImg:'获取数据失败',
				listId:'获取数据失败',
				listName:'获取数据失败',
			}
		}
	},
 mounted () {
       this.$store.commit("studentshow",false);
	   if(this.$route.query.id&&this.$route.query.name&&this.$route.query.imgs){
	    this.Eattr.listId = this.$route.query.id,
	    this.Eattr.listName = this.$route.query.name,
	    this.Eattr.listImg = this.$route.query.imgs
	 }
 },
  watch: {
        '$route': function () {
	        this.Eattr.listId = this.$route.query.id,
		    this.Eattr.listName = this.$route.query.name,
		    this.Eattr.listImg = this.$route.query.imgs
        }
   },
  components: {
	  detailscon,
  },

  destroyed() {
    this.$store.commit("studentshow",true)
  },
}
</script>

<style scoped>
.Basic>p{	
	font-size: 16px;
	margin-bottom: 20px;
}
.Basic>p>b{
	color: #666;	
	font-size: 16px;
	font-weight: 400;
	padding: 0 10px;
}
.Basic{
	width: 1000px;
	min-height: 700px;
	margin: auto;
	padding-top: 80px;
	margin-bottom: 50px;
}
.Basic_index_top{
	width: 1000px;
    height: 205px;
    border: 1px solid #eee;
    display: flex;
    position: relative;
    background:rgba(255,255,255,1);
    border-radius: 6px ; 
    box-shadow: 0px 2px 9px rgba(0,0,0,0.03);
}
.Basic_index_top>a{
	display: inline-block;
	width: 120px;
    height: 160px;
    line-height: 160px;
    margin-left: 30px;
    overflow: hidden;
    margin-top: 20px;
}
.Basic_index_top_rig{
	width: 766px;
	height: 160px;
	margin-left: 20px;
    margin-top: 20px;
}
.Basic_index_top>span{
    position: absolute;
    left: 30px;
    top: 140px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: inherit;
    background-color: rgba(242, 242, 242, 0.6);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-align: center;
}
.Basic_index_top_rig>p{
	width:50%;
	height:20px; 
	font-size:16px;
	font-family:PingFangSC-Medium;
	color:rgba(66,66,78,1);
	line-height:20px;
	margin-bottom: 20px;
}
.Basic_index_top_rig>span{
	display: inline-block;
	width: 750px;
	height: 100px;
	text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 14px;
    color: #797979;
    line-height: 22px;
	font-size:12px;
	font-family:PingFangSC-Regular;
	color:rgba(104,113,120,1);
	line-height:20px;
}
.Basic_index_top_rig>b{
	display: inline-block;
	font-weight: 400;
	display: flex;
    align-items: center;
}
.Basic_index_top_rig>b>i{
	display: inline-block;
	width: 18px;
	height: 18px;
	background: url(../../share/img/icon_setclass_normal@2x.png);
	margin-right:11px ;
}
.Basic_index_top_rig>b>i:hover{
	background: url(../../share/img/icon_setclass_normal_copy@2x.png);
	 
}
.Basic_index_bot{
	margin-top: 20px;
}
</style>