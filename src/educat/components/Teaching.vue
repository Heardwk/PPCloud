<template>
    <div>  
    	<div class="tea_top"v-if="showst.student">
    	   <div class="tea_tit">
    	        <el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/Educat/Teaching' }">任教管理</el-breadcrumb-item>
				  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
			    </el-breadcrumb>
    	   </div>
    	   <div class="tea_cot">
    	   	<b>任课课程</b>
    	       <template>
				  <el-select v-model="values_select" clearable  placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.label"
				      size="mini">
				    </el-option>
				  </el-select>
			  </template>
			 <div class="el-table-fil">
				  <b>任教时间</b>
				  <template>
					  <el-select v-model="values_index" clearable placeholder="请选择">
					    <el-option
					      v-for="item in options_index"
					      :key="item.value"
					      :label="item.label"
					      :value="item.label"
					      size="mini">
					    </el-option>
					  </el-select>
				  </template>
			 </div>
    	   </div>
    	   <div class="tea_table">
    	   	 <div class="tea_table_top">
    	   	     <ul>
    	   	     	<li
    	   	     	v-for="(itemdata,index) in data" 
    	   	     	:key="index">
			          {{itemdata}}</li>
    	   	     </ul>
    	   	 </div>
    	   	 <div class="tea_tables">
    	       <table>
			   <tbody class="tabod">
			       <!--<tr 
			       	v-for="(itemgridData,index) in gridData"
			       	:key="index"
			       	v-if="myfilterindex(itemgridData.name)&&myfilter(itemgridData.when)"
			       	@click="go(index)"
			       	>
			        <td 
			        v-for="(item,index) in itemgridData">
			        {{item}}
			        </td>
			      </tr>-->
			      <router-link tag="tr" to="/Educat/Teaching/taskdetail"
			       	v-for="(itemgridData,index) in gridData"
			       	:key="index"
			       	v-if="myfilterindex(itemgridData.name)&&myfilter(itemgridData.when)"
			       	@click="go(index)">
				       	 <td 
				        v-for="(item,index) in itemgridData">
				        {{item}}
				        </td>
			      </router-link>
			    </tbody>
			  </table>
			 </div>
    	   </div>
    	   <div class="bot">
    	       <span>下载表单</span>
    	   </div>
    	</div>
         <router-view :gridData = gridData[zindex]></router-view>
	</div>
</template>

<script>
export default {
  name: 'Teaching',
  data () {
    return {
    	values_select: '',
    	values_index: '',
    	zindex:0,
		options: [{
	      value: '选项1',
          label: '基础会计2'
        }, {
          value: '选项2',
          label: '基础会计'
        }],
        options_index: [{
		    value: '2017-2018年第二学期1',
		    label: '2017-2018年第二学期1'
        }, {
            value: '2017-2018年第二学期2',
            label: '2017-2018年第二学期2'
        }, {
            value: '2017',
            label: '2017-2018年第二学期3'
        }
        ],
        data:["序号","任教课程","任教教师","任教时间","任教院校","任教年级","任教班级","实训次数"],
        gridData: [
	      { id:'01',name: '基础会计', teacher: '张三',when:'2017-2018年第二学期1', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'02',name: '基础会计', teacher: '张三1',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'03',name: '基础会计', teacher: '张三2',when:'2017-2018年第二学期2', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'04',name: '基础会计2', teacher: '张三3',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'05',name: '基础会计2', teacher: '张三4',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计2', teacher: '张三5',when:'2017-2018年第二学期3', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计3', teacher: '张三6',when:'2017-2018年第二学期4', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计3', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计3', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计4', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计4', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计4', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计4', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'06',name: '基础会计5', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
      ]
     }
	},
	computed: {
    showst() {
      return this.$store.state
     }
    },
	methods: {
	myfilter(arr){
        if(arr.indexOf(this.values_index)>-1){
            return arr
        }else{
        }
    },
	myfilterindex(arr){
        if(arr.indexOf(this.values_select)>-1){
            return arr
        }else{
        }
    },
    go(index){
    	//this.$router.push({ path:'/Educat/Teaching/taskdetail'});
    	this.zindex = index
    },
    mounted(){
    	
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
<style scoped>
.tea_top{
	width: 1240px;
	border: 1px solid #E8E8E8;
	min-height: 705px;
	margin: auto;
	background-color: rgb(255,255,255);
}
.tea_tit{
	margin-top: 16px;
	margin-left: 25px;
}
.tea_cot{
	height: 40px;
	margin-left: 25px;
	margin-top: 16px;
	display: flex;
}
.tea_cot b{
	display: inline-block;
	font-weight: 400;
	width:79px;
	height:40px; 
	background:rgba(242,242,242,1);
	border-radius: 4px 0px 0px 4px ; 
	line-height: 40px;
	text-align: center;
	position: absolute;
	z-index: 10;
}
.tea_cot .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 76%;
}
.el-table-fil{
	margin-left: 50px;
}
.tea_table{
   margin-top: 16px;
   font-size:12px;
   font-family:PingFangSC-Regular;
   color:rgba(104,113,120,1);
   margin-left: 25px;
   margin-right: 25px;
}
.tea_table thead{
    height: 48px;
}
.tea_table thead tr>th{
    width: 100px;
}
.tabod>tr>td{
	text-align: center;
	width: 150px;
}
.tabod>tr{
	height: 48px;
	line-height: 48px;
	cursor: pointer;
}
.tabod>tr:hover{
	cursor: pointer;
	background-color: rgba(21,124,240,0.4);
	color: white;
}
.tea_tables{
	height: 450px;
	overflow: auto;
}
.tea_table_top ul{
	display: flex;
	height:48px; 
	background:rgba(248,248,248,1);
	box-shadow: 0px -1px 0px 0px rgba(232,232,232,1);
	border-radius: 2px 2px 0px 0px ; 
	margin-bottom: 0px;
}
ul{
	-webkit-padding-start: 0px;
}
.tea_table_top ul>li{
	width: 150px;
	text-align: center;
	height: 48px;
	line-height: 48px;
}
table{ 
	border-collapse:collapse;
}
tr{
	border-bottom:1px solid #EEEEEE;
}
.bot{
	display: flex;
	justify-content:flex-end;
	margin-top: 25px;
}
.bot>span{
	display: inline-block;
	width:120px;
	height:40px; 
	border-radius: 4px ; 
	font-size:16px;
	font-family:PingFangSC-Regular;
	color:#157cf0;
	line-height:24px;
	text-align: center;
	line-height: 40px;
	margin-right: 30px;
	cursor: pointer;
	border: 1px solid #157CF0;
}
.bot>span:hover{
	background:rgba(24,144,255,1);
	border-radius: 4px ; 
	font-size:16px;
	font-family:PingFangSC-Regular;
	color:rgba(255,255,255,1);
	line-height:24px;
	text-align: center;
	line-height: 40px;
	margin-right: 30px;
	cursor: pointer;
}
</style>
