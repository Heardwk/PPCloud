<template>
   <div style="background-color: #FFF8F8F8;">
	   <div class="Basic">
	       <div class="Basic_index_top">
		       	<a href="">
		       		<img :src="listImg"/>
		       	</a>
		      <!-- 	<span>{{listName}}</span>-->
		       	<div class="Basic_index_top_rig">
		       	       <p>{{listName}}</p>
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
			listImg:'',
			listId:'',
			listName:'',
		}
	},
	mounted () {
    this.listId = this.$route.params.id;
    this.listName = this.$route.params.name;
    this.listImg = this.$route.params.imgs;

        },
    watch: {
        '$route': function () {
            //2. $route发生变化时再次赋值listId
            this.listId = this.$route.params.id;
            this.listName = this.$route.params.name;
            this.listImg = this.$route.params.imgs;
        }
     },
    components: {
	  detailscon,
  },
}
</script>

<style scoped>
.Basic{
	width: 1000px;
	min-height: 700px;
	margin: auto;
	padding-top: 50px;
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
	width:64px;
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
	background: url('../../share/img/icon_setclass_normal@2x.png');
	margin-right:11px ;
}
.Basic_index_top_rig>b>i:hover{
	background: url('../../share/img/icon_setclass_normal_copy@2x.png');
	 
}
.Basic_index_bot{
	margin-top: 20px;
}
</style>