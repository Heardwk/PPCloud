 <template>
	 <div>
	     <div class="casesindex_top">
	         <b>《基础会计》全真案例</b>
	     </div>
	     <div class="correct">
	         <b>错误更正 &gt;</b>
	         <el-tag
	          size="medium"
			  :key="tag"
			  v-for="tag in dynamicTags"
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
			<!--<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
	     </div>
	     <div class="casesindex_top_m">
	     	   <ul v-for="item in productList">
	     	     <b>{{item.title}}</b>
	     	     <div class="casesindex_top_Lis">
	     	     <template v-for="items in item.list" >
	     	   		 <li>{{items.name}}</li>
	     	   	 </template>
	     	   	 </div>
	     	   </ul>
	     </div>
	     <div class="table_list">
	           <el-table
			    :data="tableData2"
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
			    <!--<el-table-column
			      prop="Tests"
			      label="题型">
			    </el-table-column>-->
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
    data() {
      return {
        input21:'',
        dynamicTags: ['划线更正法概念适···', '222···', '33···'],
        inputVisible: false,
        inputValue: '',
        currentPage4: 1,
        productList: {
	        pc: {
	          title: '知识点:',
	          list: [
	            {
	              name: '划线更正法概念、适用范围和操作要求',
	            },
	            {
	              name: '数红字更正法概念、适用范围和操作要求据预测',
	            },
	            {
	              name: '补充登记法概念、适用范围和操作要求',
	            },
	            {
	              name: '红字更正法概念、适用范围和操作要求 ',
	            }
	          ]
	        },
//	        app: {
//	          title: '题       型:',
//	          list: [
//	            {
//	              name: '单选题(132)',
//	            },
//	            {
//	              name: '多选题(132)',
//	            },
//	            {
//	              name: '判断题(46)',
//	            },
//	            {
//	              name: '不限定题(13)',
//	            },
//	            {
//	              name: '填表题(10)',
//	            },
//	            {
//	              name: '制表题(32)',
//	            },
//	            {
//	              name: '综合题(134)',
//	            }
//	          ]
//	        }
	      },
	      tableData2: [{
          date: '1',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
        }, {
          date: '2',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '多选题',
          degree:'102'
        }, {
          date: '3',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
        }, {
          date: '4',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
        }, {
          date: '5',
           name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
        }, {
          date: '6',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '多选题',
          degree:'102'
        }, {
          date: '7',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
      }, {
          date: '8',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
      },{
          date: '9',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
      },{
          date: '10',
          name: '提供的原始单据、记账凭证、账薄资料等,要',
          tag: '单选题',
          degree:'102'
      }]
      }
    },
       methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
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
    }
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
    top:640px!important;
  }
</style>
<style scoped>
	/*{
		    position: absolute;
    top: 683px;
    left: 1175px;
    transform-origin: center top 0px;
    z-index: 2003;
}
	}*/
.block{
	width: 83%;
	margin: auto;
	margin-top: 20px;
	position: relative;
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
	width:140px;
	height:20px; 
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(36,56,71,1);
	line-height:20px;
	font-weight: 400;
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