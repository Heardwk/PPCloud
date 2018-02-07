 <template>
	 <div>
	     <div class="casesindex_top">
	         <b>{{msgtochild.texts}}</b>
	     </div>
	     <div class="correct">
	         <b>错误更正 &gt;</b>
	         <div class="news"v-if='showst.student'><i></i><span>新建题组</span></div>
	         <el-tag
	          size="medium"
			  :key="tag"
			  v-for="tag in msgtochild.dynamicTags"
			  closable
			  :disable-transitions="false"
			  @close="handleClose(tag)">
			  {{tag}}
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
	     	   		 <li>{{msgtochild.name}}</li>
	     	   	 </div>
	     	   </ul>
	     </div>
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
				      width="100"
				      :filters="[{ text: '单选题', value: '单选题' }, { text: '多选题', value: '多选题' }]"
				      :filter-method="filterTag"
				      filter-placement="bottom-end">
				      <template slot-scope="scope">
				        <el-tag
				          :type="scope.row.tag === '单选题' ? 'primary' : 'success'"
				          close-transition>{{scope.row.tag}}</el-tag>
				      </template>
				    </el-table-column>
			     <el-table-column
			      prop="degree"
			      label="练习次数"
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
	 </div>
</template>
<script>
  export default {
  	 props:{  
		    msgtochild:{}
		  }, 
    data() {
      return {  
        input21:'',
        inputVisible: false,
        inputValue: '',
        currentPage4: 1,
        productList: {
	        pc: {
	          title: '知识点:',
	        },
	      },
      }
    },
      methods: {
      handleClose(tag) {
        this.msgtochild.dynamicTags.splice(this.msgtochild.dynamicTags.indexOf(tag), 1);
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.msgtochild.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
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
    computed: {
	  showst() {
	      return this.$store.state
	  },
	},
	mounted() {
      this.$store.commit("studentshow",false);
    },
     destroyed() {
     this.$store.commit("studentshow",true)
  },
  }

</script>
<style>
 .el-table .warning-row {
    background: rgba(239,239,244,1);
  }
  .el-table .success-row {
    background:rgba(251,251,251,1);
  }
  .el-table th, .el-table tr{
  	background: rgba(239,239,244,1);
  }
  .el-table-filter{
	top:610px!important;
	}
</style>
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
	margin-left: 30px;
	margin-top: 24px;
	position: relative;
}
.casesindex_top>b{
	display: inline-block;
	width:148px;
	height:20px; 
	text-align: center;
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
	width:148px;
	height:5px; 
	background:rgba(0,176,255,1);
	border-radius: 11px ;  
    position: absolute;
    top:23px;
    left: 0px;
    background-color: #157CF0;
}	
.correct{
	width: 100%;
	height: 28px;
	line-height: 28px;
	margin-top: 28px;
	padding-left: 41px;
	position:relative;
}
.correct>b{
	width:73px;
	height:28px; 
	font-size:18px;
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
}
.casesindex_top_m>ul>b{
  	font-weight: 400;
  	display: inline-block;
  	width:60px;
	height:16px; 
	font-size:12px;
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
	margin: 0px 15px;
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
</style>