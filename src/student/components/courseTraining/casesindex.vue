    <template>
	 <div>
	     <div class="casesindex_top">
	         <b>{{msgtochild.name}}</b>
	     </div>
<!-- 	     <div class="correct">
	         <b>{{msgtochild.name}} &gt;</b>
	         <router-link to="/Student/SeeTheCase"v-if='showst.student'>
	         	<div class="news"><i></i><span>新建题组</span></div>
	         </router-link>
			<el-tag
			  v-for="(tag,index) in dynamicTags"
			  :key="index"
			  closable
			  :disable-transitions="false"
			  @close="handleClose(tag)">
			  {{tag.name}}
			</el-tag>
			<el-input
			  class="input-new-tag"
			  v-if="inputVisible"
			  v-model="inputValue"
			  ref="saveTagInput"
			  size="small"
			  @keyup.enter.native="handleInputConfirm"
			  @blur="handleInputConfirm"
			>
			</el-input>
	     </div>
	     <div class="casesindex_top_m">
	     	   <ul v-for="item in productList">
	     	     <b>{{item.title}}</b>
	     	     <div class="casesindex_top_Lis">
	     	   		 <template v-for="(item,index) in dataA">
	     	   		   <li @click="qiehuan(index,$event)" >{{item.name}}</li>
	     	   		 </template>
	     	   	 </div>
	     	   </ul>
	     </div>  
	     <div class="casesindex_top_m "v-if='showst.student'>
	     	   <ul v-for="item in productList">
	     	     <b>题型:</b>
	     	     <div class="casesindex_top_Lis">
	     	   		 <template v-for="(item,index) in tx">
	     	   		   <li>{{item.title}}({{item.num}})</li>
	     	   		 </template>
	     	   	 </div>
	     	   </ul>
	     </div> -->
	     <div class="table_list">
	           <el-table
			    :data="msgtochild.tableData2"
			    style="width: 90%;margin: auto;"
			    :row-class-name="tableRowClassName"
			    >
			    <el-table-column
			      prop="date"
			      label="序号"
			     >
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="案例名称"
			      width="350"
			      >
			    </el-table-column>
			   <el-table-column
                        prop="tag"
                        label="题型"
                        sortable
                        width="140"
                      >
                </el-table-column>
			  </el-table>
	     </div>
	     <div class="block">
		     <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[100, 200, 300, 400,600]"
		      :page-size="100"
		      layout=" prev, pager, next,total, jumper"
		      :total="1000">
		    </el-pagination>
		 </div>
        <div class="at_present">
        	<i class="el-icon-info"></i>
        	<span>当前知识点包含:</span>
        	<span>单选题<b>231</b>道</span>
        	<span>多选题<b>231</b>道</span>
        	<span>问答题<b>231</b>道</span>
        	<span>综合题<b>231</b>道</span>
        </div>
	 </div>
</template>
<script>
  export default {
  	 props:{  
		    msgtochild:{}
		  }, 
    data() {
      return {  
      	thisClass:'active',
        input21:'',
        inputVisible: false,
        inputValue: '',
        dynamicTags:[],
        currentPage4: 1,
        productList: {
	        pc: {
	          title: '知识点',
	          num:0
	        },
	      },
       tx: [
		   {
		      title: '单选题:',
		      num:50
		   },
		   {
		      title: '多选题',
		      num:40
		   },
		   {
		      title: '填表题',
		      num:30
		   },
		   {
		      title: '制表题',
		      num:20
		   },
		   {
		      title: '综合题',
		      num:10
		   },
        ],
        dataA: []
      }
    },
    watch: {
    	msgtochild(){
    		this.dataA = this.msgtochild.child
    	},
    },
     computed: {
	  showst() {
	      return this.$store.state
	  },
	 },
      methods: {
      qiehuan(index,event){
        var el = event.target;
        if(this.dynamicTags.indexOf(this.dataA[index])>0){
		}else{
			this.dynamicTags.push(this.dataA[index]);
		}
		let arr = [];
		this.dynamicTags[this.dynamicTags.length-1].child? arr = this.dynamicTags[this.dynamicTags.length-1].child : arr = [];

		this.dataA = arr;
      }, 
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        this.dynamicTags.length>0? this.dataA = this.dynamicTags[this.dynamicTags.length-1].child : this.dataA = this.msgtochild.child
      },
      handleInputConfirm() {

      },
       tableRowClassName({row, rowIndex}) {
        if (rowIndex %2 !==0 ) {
          return 'warning-row';
        } else if (rowIndex %2 ==0) {
          return 'success-row';
        }
        return '';
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    },
	mounted() {
	  this.dataA = this.msgtochild.child
      this.$store.commit("studentshow",false);
    },
     destroyed() {
     this.$store.commit("studentshow",true)
  },
  }

</script>
<style scoped>
.block{
	width: 83%;
	margin: auto;
	margin-top: 20px;
	position: relative;
	margin-bottom: 20px;
}
.casesindex_top{
	width: 100%;
	height: 20px;
	line-height: 20px;
	padding-left: 42px;
	margin-top: 24px;
	position: relative;
	margin-bottom: 25px
}
.casesindex_top>b{
	display: inline-block;
	height:20px; 
	text-align: left;
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(36,56,71,1);
	line-height:20px;
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}	
.casesindex_top>b::after{
	content:'' ;
	width:8%;
	height:5px; 
	background:rgba(0,176,255,1);
	border-radius: 11px ;  
    position: absolute;
    top:23px;
    left: 43px;
    background-color: #157CF0;
}	
.correct{
	width: 100%;
	margin-top: 28px;
	padding-left: 41px;
	position:relative;
	align-items: center;
	height: 50px;
	line-height: 50px;
}
.correct>b{
	width:73px;
	height:30px; 
	line-height: 30px;
	font-size:16px;
	font-family:PingFangSC-Regular;
	color:rgba(110,118,143,1);
	line-height:20px;
	font-weight: 400;
}
.news{
	position: absolute;
	top: -38px;
    right: 127px;
    display: flex;
    align-items: center;
}
.news>span{
	display: inline-block;
	width:80px;
	height:28px; 
	font-size:11px;
	font-family:PingFangSC-Regular;
	color:rgba(36,56,71,1);
	line-height:28px;
	padding-left: 20px;
	cursor: pointer;
}
.news:hover span{
	color:rgba(0,176,255,1);
}
.news>i{
	display: inline-block;
	width: 28px;
	height: 28px;
	background: url(../../../share/img/img_addbutton.png);
	background-repeat: no-repeat;
	cursor: pointer;
}
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
.casesindex_top_m>ul{
   	display: flex;
    padding-left: 44px;
    align-items: center;
    height: 40px;
    line-height: 40px;
}
.casesindex_top_m>ul>b{
  	font-weight: 400;
  	display: inline-block;
  	width:60px;
	height:16px; 
	font-size:16px;
	font-family:MicrosoftYaHei;
	color:rgba(0,176,255,1);
	line-height:16px;
}
.casesindex_top_m>ul li{
  	display: inline-block;
  	font-size:12px;
	font-family:MicrosoftYaHei;
	color:rgba(66,66,78,1);
	line-height:16px;
	padding: 5px 15px;
	cursor: pointer;
	border: 1px solid transparent;
	border-radius: 4px;
	
}
.casesindex_top_m>ul li:hover{
  	border: 1px solid white;
  	color: white;
  	background-color: rgb(202,228,255);
}
ul{
 	-webkit-padding-start: 0px;
}
.casesindex_top_Lis{
 	width: 85%;
}
.el-table .warning-row {
    background: oldlace;
}
.el-table .success-row {
    background: #f0f9eb;
}
.at_present{
	width: 90%;
	margin: auto;
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(0,0,0,0.65);
	text-align: center;
	border-top: 1px solid #eee;
	margin: auto;
    padding: 20px;
}
.at_present>span>b{
	color: #00B0FF;
	font-weight: 400;
}
.at_present>i{
	display: inline-block;
	width:14px;
	height:14px; 
	color: #00B0FF;
	margin-right: 5px;
}
</style>