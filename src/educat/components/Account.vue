<template>
  <div class="">
    <div class="Account_top">
    	    <el-tabs :tab-position="tabPosition">
				    <el-tab-pane label="教师账号">
				    	 <p class="title_t">教师账号 <span>30</span>个，30使用中</p>
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
							       	:key="index">
							        <td  v-for="(item,index) in itemgridData">
							        	<i v-if="index == 'degree'" class="el-icon"></i>
							        	{{item}}
							        </td>
							      </tr>
							    </tbody>
							  </table>
							 </div>
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="学生账号">
				    	 	 <p class="title_t">教师账号 <span>30</span>个，<span>300</span>使用中，<span>100</span>个到期</p>
				    		<div class="tea_table">
				    	   	 <div class="tea_table_top">
				    	   	       <el-table
											    :data="gridData_student"
											    style="width: 100%">
											    <el-table-column
											      prop="id"
											      label="序号"
											      >
											    </el-table-column>
											    <el-table-column
											      prop="college"
											      label="全部院系"
											      sortable
											       width="180"
											      :filters="college"
											      :filter-method="filterHandler"
											    >
											    </el-table-column>
											    <el-table-column
											      prop="classs"
											      label="全部年级"
											      sortable
											      width="180"
											      :filters="classs"
											      :filter-method="filterHandler"
											    >
											    </el-table-column>
											    <el-table-column
											      prop="tea_class"
											      label="班级"
											      >
											    </el-table-column>
											     <el-table-column
											      prop="name"
											      label="姓名"
											      
											      >
											    </el-table-column>
											    <el-table-column
											      prop="when"
											      label="学号"
											      width="100">
											    </el-table-column>
											    <el-table-column
											      prop="kaitime"
											      label="开始时间"
											       width="180" >
											    </el-table-column>
											    <el-table-column
											      prop="endtime"
											      label="结束时间"
											      width="180">
											    </el-table-column>
											    <el-table-column
											      prop="degree"
											      label="状态"
											      width="120"
											      :filters="[{ text: '使用中', value: '使用中' }, { text: '已到期', value: '已到期' }]"
											      :filter-method="filterTag"
											      filter-placement="bottom-end">
											      <template slot-scope="scope">
											        <el-tag
											          :type="scope.row.degree === '使用中' ? 'primary' : 'success'"
											          close-transition>{{scope.row.degree}}</el-tag>
											      </template>
											    </el-table-column>
											  </el-table>
				    	   	 </div>
				    	</div>
				    </el-tab-pane>
				  </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
      return {
        college:[{text: '会计系', value: '会计系'}, {text: '金融系', value: '金融系'}, {text: '纳税', value: '纳税'}],
        classs:[{text: '2015级', value: '2015级'}, {text: '2016级', value: '2016级'}, {text: '2017级', value: '2017级'}, {text: '2018级', value: '2018级'}],
        tabPosition: 'top',
        data:["序号","用户名","姓名","任教时间","院系","手机号","有效期","状态"],
        gridData: [
	      { id:'01',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期1', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'02',name: '18524550255', teacher: '李四1',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'03',name: '18524550255', teacher: '李四2',when:'2017-2018年第二学期2', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'04',name: '18524550255', teacher: '李四3',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'05',name: '18524550255', teacher: '李四4',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期3', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期4', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
	      { id:'06',name: '18524550255', teacher: '李四',when:'2017-2018年第二学期', college: '会计系',classs:'10101010',tea_class:'永久有效',degree:'使用中'},
      ],
			gridData_student: [
		      { id:'01',college: '会计系',classs:'2015级',tea_class:'1701', name:'王五',when:'20142014',kaitime:'2015-01-02 00:00:00',endtime:'2015-01-02 00:00:00',degree:'使用中'},
		      { id:'02',college: '金融系',classs:'2016级',tea_class:'1702', name:'王五',when:'20142014',kaitime:'2015-01-02 00:00:00',endtime:'2015-01-02 00:00:00',degree:'使用中'},
		      { id:'03',college: '纳税',classs:'2017级',tea_class:'1703', name:'王五',when:'20142014',kaitime:'2015-01-02 00:00:00',endtime:'2015-01-02 00:00:00',degree:'已到期'},
	      ],
        value: ''
      }
   },
   methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.degree === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Account_top{
	min-height: 500px;
	background-color: white;
	padding-left: 25px;
	margin-top: 5px;
}
.title_t{
	height:20px; 
	font-size:12px;
	font-family:PingFangSC-Regular;
	color:rgba(104,113,120,1);
	line-height:20px;
}
.title_t>span{
  display: inline-block;
	color:#1890FF;
	padding: 0px 5px;
}
.tea_table{
   margin-top: 16px;
   font-size:12px;
   font-family:PingFangSC-Regular;
   color:rgba(104,113,120,1);
   margin-right: 25px;
}
.tea_table thead{
    height: 48px;
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
.tea_tables{
	height: 500px;
	overflow-y: scroll;
}
.tabod>tr>td:nth-child(4){
	width: 17%;
}
.tea_table_top ul>li:nth-child(4){
	width: 153%;
}
.tea_table_top ul>li:nth-child(5){
	width: 100%;
}
.tabod>tr>td{
	text-align: left;
  width: 11.3%;
  position: relative;
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

.el-icon{
	width: 5px;
	height:5px;
	border-radius: 50%;
	background-color: #00B0FF;
	position: absolute; 
  left: -10%;
  margin-top: 19px;
}
.el-icon_in{
	width: 5px;
	height:5px;
	border-radius: 50%;
	background:rgba(245,166,35,1);
	position: absolute; 
  left: -10%;
  margin-top: 19px;
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
	text-align: left;
	height: 48px;
	line-height: 48px;
	width: 100%;
}
</style>
