<template>
  <div class="content">
 	  <template v-for="productitem in course"> 
          <h3>{{ productitem.title}}</h3>
          <ul class="index-left-block">
            <li v-for="item in productitem.list" class="data-course" :style="item.node">
	            		<div class="productimg"><a :href="item.url" @click="goDetail(item.id,item.name,item.imgs)"><img :src="item.imgs"/></a></div>
            	<div class="intro">
            	    <span>{{ item.name }}</span>
            	    <p>{{ item.description }}</p>
            	</div>
              <a class="descend"  @click="goDetail(item.id,item.name,item.imgs)" :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div class="hr"></div>
    </template>
    <template v-for="item in sides"> 
          <h3>{{ item.title}}</h3>
          <ul class="index-block">
            <li v-for="item in item.list" :style="item.node" class="data-course">
            	<a :href="item.url">
	            	<div class="productimgs"><img :src="item.imgs"/></div>
	            	<div class="intros">
	            	    <span>{{ item.name }}</span>    	   
	            	</div>
            	</a>
            </li>
          </ul>
          <div class="hr"></div>
    </template> 
  </div>
</template>

<script>
export default {
  name: 'trainingCenter',
  data () {
    return {
       course:{
       	   training: {
       	   	 title:'课程实训',
       	   	 list: [
        	   	   { 
        	   	  id:'basics',
       	   	    name:'基础会计',
       	   	    description:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程',
                node:{
                	  background:'linear-gradient(rgba(150,214,255,1),rgba(200,234,252,1))',
                },
                imgs:require('../../share/img/image_class_cover.png')
       	   	   },{ 
       	   	   	id:'finance',
       	   	    name:'财务管理',
       	   	    description:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程',
       	   	    node:{
                	  background:'linear-gradient(rgba(216,209,255,1),rgba(186,173,255,1))',
                },
                imgs:require('../../share/img/image_class_cover.png')
       	   	   },{ 
       	   	   	id:'nashui',
       	   	    name:'纳税实务',
       	   	    description:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程',
       	   	    node:{
                	  background:'linear-gradient(rgba(255,208,212,1),rgba(250,161,173,1))',
                },
                imgs:require('../../share/img/image_class_cover.png')

       	   	   },
       	   	 ]
       	   },
       },
      sides:{
      	synthesize: {
       	   	 title:'综合实训',
       	   	  list: [
       	   	   { 
       	   	    name:'会计岗位',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   },{ 
       	   	    name:'出纳岗位',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   },{ 
       	   	    name:'纳税申报',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   },{ 
       	   	    name:'防伪开票',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   },{ 
       	   	    name:'防伪开票',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   } 
       	   	   ,{ 
       	   	    name:'防伪开票',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   } 
       	   	   ,{ 
       	   	    name:'防伪开票',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	    url: 'http://www.baidu.com',
       	   	    imgs:require('../../share/img/image_class_cover.png')
       	   	   } 
       	   	 ]
       	   }
      	}
      } 
    },
    methods:{
      goDetail(id,name,imgs){
        this.$router.push({ name:'Basic_Accounting',params: {id:id,name:name,imgs:imgs}});
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-course{
	background-repeat: no-repeat;
	position: relative;
}
.index-left-block>li{
	width: 300px;
	height: 220px;
	margin-right: 30px;
	border-radius: 8px ; 
}
.descend{
	margin-top: 180px;
	display: inline-block;
	width: 300px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color: rgba(242, 242, 242, 0.6);
	color: #333;
	text-decoration: none;
	position: absolute;
	top:0px;
	left: 0px;
}
.content{
	width: 960px;
	min-height: 700px;
	margin: 0 auto;
}
.content>h3{
	display: inline-block;
	width:72px;
	height:24px; 
	font-size:18px;
	font-family:MicrosoftYaHei;
	color:rgba(36,56,71,1);
	line-height:24px;
	margin-top: 50px;
	margin-bottom: 22px;
	font-weight: normal;
}
.productimg>a{
	display: inline-block;
	cursor: pointer;
	margin: 20px 160px 20px 20px;
}
.productimg>img{
	width: 120px;
	height: 180px;
}
.intro{
	position: absolute;
	top: 30px;
	left: 160px;
	width: 120px;
	height: 118px;
	text-align: center;
}
.intro>span{
	display: inline-block;
	width:64px;
	height:22px; 
	font-size:16px;
	font-family:PingFangSC-Medium;
	color:rgba(255,255,255,1);
	line-height:22px;
	margin-top: 5px;
}
.intro>p{
	display: inline-block;
	width:117px;
	height:85px; 
	font-size:14px;
	font-family:PingFangSC-Medium;
	color:rgba(255,255,255,1);
	line-height:22px;
	margin-top: 5px;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.index-left-block{
   display:flex;
   -webkit-padding-start:0px;
}
.index-block{
   display:flex;
   flex-wrap:wrap;
   -webkit-padding-start:0px;
}
.index-block>li>a{
	display: inline-block;
	width: 140px;
	height: 200px;
	margin: 0px 26px;
	text-align: center;
	background-color: #FFFFFF;
	border: 10px solid #fff;
	cursor: pointer;
	margin-bottom: 50px;
	box-sizing: border-box;
	box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.14);
}
.index-block>li>a:hover{
	box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.4);
	border: 10px solid #fff;
}
.productimgs{
	width: 120px;
	height: 180px;
}
.intros{
	width:140px;
	height:22px; 
	margin-top: 22px;
	text-align: center;
}
.intros>span{
	width:64px;
	height:22px; 
	font-size:16px;
	font-family:PingFangSC-Medium;
	color:rgba(104,113,120,1);
	line-height:22px;
	margin-top: 22px;
	text-align: center;
}
</style>
