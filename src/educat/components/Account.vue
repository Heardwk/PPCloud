<template>
  <div class="">
    <div class="Account_top">
    	    <p style="color: #687178;font-size: 12px;padding-top:20px;padding-bottom:10px;">   </p>
    	    <el-tabs :tab-position="tabPosition" @tab-click="">
				    <el-tab-pane label="教师账号">
				    	 <p class="title_t">教师账号 <span>{{this.allData1}}</span>个，<span>{{this.allData1}}</span>使用中</p>
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
							       	<td>{{ currentPage<2? `0${index+1}`: index+1+(10*(currentPage-1))}}</td>
							        <td  v-for="(item,index) in itemgridData">
							        	<i v-if="index == 'degree'" class="el-icon"></i>
							        	{{item}}
							        </td>
							      </tr>
							    </tbody>
							  </table>
							 </div>
				    	</div>
				    <div class="block">
					    <el-pagination
					      @current-change="handleCurrentChange"
					      :page-size="page"
					      layout="total, prev, pager, next, jumper"
					      :total="allData1">
					    </el-pagination>
					</div>
				    </el-tab-pane>
				    <el-tab-pane label="学生账号">
			    	 	 <p class="title_t">教师账号 <span>{{this.allData}}</span>个，<span>{{this.allData}}</span>使用中</p>
			    		<div class="tea_table">
			    	   	 <div class="tea_table_top">
			    	   	  <el-table
						    :data="gridData_student"
						    style="width: 100%"
						    @filter-change="changeFun">
						    <el-table-column
						    type="index"
				            :index="typeIndex"
				            label="序号"
				            width="150"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="college"
						      label="全部院系"
						      :filters="colleges_list"  
						    >
						    </el-table-column>
						    <el-table-column
						      prop="classs"
						      label="全部年级"
						      :filters="class_list"
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
						      label="学号">
						    </el-table-column>
						    <el-table-column
						      prop="kaitime"
						      label="开启时间"
						      width="250">
						    </el-table-column>
						  </el-table>
			    	   	 </div>
			    	</div>
			    	<div class="block"style="margin-top:20px;">
					    <el-pagination
					      @current-change="handleCurrentChange1"
					      :page-size="page1"
					      layout="total, prev, pager, next, jumper"
					      :total="allData">
					    </el-pagination>
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
        colleges_list:[],
        class_list:[],
        tabPosition: 'top',
        data:["序号","姓名","院系","手机号","有效期"],
        gridData: [],
		gridData_student: [],
        value: '',
        currentPage1: 1,
        allData1: 1,
        allData: 1,
        currentPage: 1,
        pageSize2: 2,
        allData2: 3,
        page:2,
        page1:1,
        teacherData: [],
        studentData: [],
        id:'',
        academy:0,
        class:0,
      }
   },
    mounted() {
        this.acc();
        this.student();
    },
    methods: {
        acc(){
        	this.$http.post(`${this.$store.state.location}/services/app/Teacher/GetTeacherList`,
		        {
					"maxResultCount": this.page,
		  		    "skipCount": (this.currentPage-1)*this.page
		        },{
		            headers: {
		                "Content-Type": "application/json",
		        }
		        }).then(response=>{
			        this.teacherData = response.body.result.items;
			        this.allData1 =  response.body.result.totalCount;
			        this.acc_list();
		        },response=>{
		       		console.log('error')
		       })
        },
        changeFun(payload) {
        	let obj = [];
			 for(let i in payload){
				 obj.push({
                     "academy":payload[i][0]
				 }); 
				 for(let i in obj ){
				 	 if(obj[i].academy == undefined) {
						this.class = 0;
						this.academy= 0;
			
					}else{
						if(obj[i].academy == this.class_list[i].value) {
							this.class = this.class_list[i].value;
						}else if(this.academy = this.colleges_list[i].value) {
                            this.academy = this.colleges_list[i].value;
						 }   
					};
				 }
			 }
			console.log(obj)
			console.log(this.academy)
			console.log(this.class)
		    this.student();
		},
        // 学生账号
        student(){
        	this.$http.post(`${this.$store.state.location}/services/app/Student/GetStudentList`,
		        {

					"departmentId":this.academy,
				  	"enrollmentYear": this.class,
					"maxResultCount": this.page1,
		  		    "skipCount": (this.currentPage1-1)*this.page1
		        },{
		            headers: {
		                "Content-Type": "application/json",
		        }
		        }).then(response=>{
			        this.studentData = response.body.result.items;
			        this.allData =  response.body.result.totalCount;
			        this.acc_list_student();
			        this.screen();
			        this.collegelist();
		        },response=>{
		       		console.log('error')
		       })
        },
        acc_list(){
        	this.gridData = [];
            for (let i in this.teacherData) {
            	this.gridData.push({
            		"name":this.teacherData[i].name,
            		// "teacher":this.teacherData[i].name,
            		"college":this.teacherData[i].department.name,
            		"classs":this.teacherData[i].mobile,
            		"tea_class":'永久有效',
            	})
            }
        },
        screen(){
           this.class_list = [];
			for(let i in this.studentData) {
				this.class_list.push({
				'text': this.studentData[i].enrollmentYear,
				'value': this.studentData[i].enrollmentYear 
				})
			}
		 this.unique(this.class_list);
        },
        collegelist(){
            this.colleges_list = [];
			for(let i in this.studentData) {
				this.colleges_list.push({
					'text': this.studentData[i].department.name,
					'value': this.studentData[i].departmentId,
				})
			}
			this.unique(this.colleges_list);
			// console.log(this.colleges_list)
        },
        unique(arr) { 
			   for (var i = 0; i < arr.length - 1; i++) {
			    for (var j = 1; j < arr.length; j++) {
			        if (i != j) {
			            if (arr[i].x == arr[j].x && arr[i].y == arr[j].y) {
			                arr.splice(j, 1)
			            }
			        }

			    }
			}
		},
        acc_list_student(){
        	this.gridData_student = [];
            for (let i in this.studentData) {
            	this.gridData_student.push({
            		"id":'',
            		"college":this.studentData[i].department.name,
            		"classs":this.studentData[i].enrollmentYear +' '+'级',
            		"tea_class":this.studentData[i].classes.serialNumber,
            		"name":this.studentData[i].name,
            		"when":this.studentData[i].stuNo,
            		"kaitime":this.time(this.studentData[i].creationTime),
            	})
            }
        },
        filterTag(value, row) {
            return row.degree === value;
        },
        typeIndex(index) {
       		return  this.currentPage1<2? `0${index+1}`: index+1+(10*(this.currentPage1-1))
        },
         //时间判断
	  	time(time){
	  		for(let i in this.studentData){
	  			if(time){
			        this.num = time.slice(0,10);
			        this.point = time.slice(11,-7);
			        this.str = this.num.concat(' '+this.point)
	                return  this.str
                }
	  		}
	  	},
        filterchange(filters){
	         // this.student();
	         console.log(filters)
        },
	    handleCurrentChange(val) {
			this.currentPage = val;
			this.acc();
	    },
	    handleCurrentChange1(val) {
			this.currentPage1 = val;
			this.student();
	    },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
	margin: 0px 25px;
	text-align: center;
	margin-bottom: 20px;
}
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
	min-height: 500px;
	overflow: hidden;
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
