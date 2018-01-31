<template>
  <div class="content">
 	  <template v-for="productitem in course"> 
          <h3>{{ productitem.title}}</h3>
          <ul class="index-left-block">
            <li v-for="item in productitem.list" :style="item.node">
            	<div></div>
              <a class="descend" :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div class="hr"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       course:{
       	   training: {
       	   	 title:'课程实训',
       	   	 list: [
        	   	   { 
       	   	    name:'基础会计',
       	   	    description:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程',
                node:{
                	 
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   },{ 
       	   	    name:'财务管理',
       	   	    description:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程',
       	   	    node:{
               
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   },{ 
       	   	    name:'纳税实务',
       	   	    description:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程',
       	   	    node:{
                
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   },
       	   	 ]
       	   },
       	   synthesize: {
       	   	 title:'综合实训',
       	   	  list: [
       	   	   { 
       	   	    name:'会计岗位',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	     node:{
                	
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   },{ 
       	   	    name:'出纳岗位',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	     node:{
                	 
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   },{ 
       	   	    name:'纳税申报',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	     node:{
                
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   },{ 
       	   	    name:'防伪开票',
       	   	    description:'描述描述描述描述描述描述描述描述描述描述描述',
       	   	     node:{
                	
                	  backgroundRepeat:'no-repeat'
                },
       	   	    url: 'http://www.baidu.com',
       	   	   } 
       	   	 ]
       	   }
       },
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-left-block{
   display:flex;
	}
.index-left-block>li{
	width: 160px;
	height: 160px;
	border:1px solid #157CF0;
	margin-left: 30px;
}
.descend{
	margin-top: 120px;
	display: inline-block;
	width: 160px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color:rgba(242, 242, 242, 0.6);
	color: #333;
	text-decoration: none;
}
</style>
