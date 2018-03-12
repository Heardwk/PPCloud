<template>
    <div>  
    	<div class="tea_top"v-if="showst.firstrouter">
    	   <div class="tea_tit">
			    <div class="topBox">
			        <p>任教管理</p>
			    </div>
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
			       <tr 
			       	v-for="(itemgridData,index) in gridData"
			       	:key="index"
			       	v-if="myfilterindex(itemgridData.name)&&myfilter(itemgridData.when)"
			       	@click="go(index)"
			       	>
			        <td 
			        v-for="(item,index) in itemgridData">
			        {{item}}
			        </td>
			      </tr>
			    </tbody>
			  </table>
			 </div>
    	   </div>
    	   <div class="bot">
    	       <span>下载表单</span>
    	   </div>
    	    <div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage4"
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
			</div>
    	</div>
         <router-view :gridData = "gridData[z]"></router-view>
	</div>
</template>

<script>
export default {
  name: 'Teaching',
  data () {
    return {
    	getall: {},
    	values_select: '',
    	values_index: '',
    	z:'0',
		options: [],
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
	      { id:'07',name: '基础会计3', teacher: '张三6',when:'2017-2018年第二学期4', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'08',name: '基础会计3', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'09',name: '基础会计3', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
	      { id:'10',name: '基础会计4', teacher: '张三',when:'2017-2018年第二学期', college: '会计学院',classs:'2015级',tea_class:'1701、1702、1703',degree:'3'},
      ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
     }
	},
	mounted() {
		this.$http.post(`${this.$store.state.location}/services/app/Course/GetAll`,
		{
			"published": true,
			"isActive": true,
			"filter": ""
		},{
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.token
			}
		}).then(response=>{
			this.getall = response.body.result;
			this.init();
		},response=>{
			console.log("error")
		})	
	},
	computed: {
	    showst() {
	    	return this.$store.state
	    }
    },
	methods: {
		init() {
			for(let i in this.getall.items) {
				this.options.push({
					'label': this.getall.items[i].title,
					'value': this.getall.items[i].title 
				})
			}
		},
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
    	this.$router.push({ path:'/Educat/Teaching/taskdetail'});
    	this.z = index
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topBox {
	margin-top: 1px;
	background: white;
}
.topBox p {
	color: #687178;
	font-size: 12px;
	line-height: 23px;
}
.tea_top{
	border: 1px solid #E8E8E8;
	min-height: 705px;
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
.tabod>tr>td{
	text-align: center;
    width: 10%;
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
	height: 500px;
	overflow: hidden;
}
table{ 
    border-collapse:collapse;
    width: 100%;    
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
	text-align: center;
	height: 48px;
	line-height: 48px;
	width: 100%;
}
tr{
	border-bottom:1px solid #EEEEEE;
    height:48px; 
	box-shadow: 0px -1px 0px 0px rgba(232,232,232,1);
	border-radius: 2px 2px 0px 0px ; 
	margin-bottom: 0px;
}
table>tr{
	border-bottom:1px solid #EEEEEE;
    height:48px; 
    background:rgba(248,248,248,1);
	box-shadow: 0px -1px 0px 0px rgba(232,232,232,1);
	border-radius: 2px 2px 0px 0px ; 
	margin-bottom: 0px;
}
.bot{
	display: flex;
	justify-content:flex-end;
	margin-top: 25px;
}
.bot>span{
	margin-bottom: 20px;
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
.tabod>tr>td:nth-child(3){
	padding-left: 1.5%;
}
.tabod>tr>td:nth-child(5){
	padding-left: 1.5%;
}
.tabod>tr>td:nth-child(6){
	padding-left: 1.5%;
}
.tabod>tr>td:nth-child(7){
	padding-left: 2.5%;
}
.block{
	margin: 0px 25px;
	text-align: center;
	margin-bottom: 20px;
}
</style>
