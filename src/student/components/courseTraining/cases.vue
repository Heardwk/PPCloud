 <template>
	 <div>
	     <div class="cases_cot">
	         <div class="cases_cot_left">
	              <div class="cases_cot_left_t">
	                    <div class="cases_cot_left_tit">
	                        <span>知识点</span>
							  <div id="input_s">   
                                 <el-input
									  placeholder="请输入"
									  v-model="filterText">
								  </el-input>
							  </div>
	                    </div>
						<div class="cases_cot_left_content">
						    <el-tree
							  class="filter-tree"
							  :data="data"
							  :props="defaultProps"
							  default-expand-all
							  :filter-node-method="filterNode"
							  ref="tree2"
							  @check-change="aa"
							  @node-click="aa">
							</el-tree>
						</div> 
	              </div>
	         </div>
	         <div class="cases_cot_rig">
	             <casesindex></casesindex>
	         </div>
	     </div>
	 </div>
</template>
<script>
import casesindex  from '@/student/components/courseTraining/casesindex'
  export default {
    data() {
      return {
        input21:'',
        parentMsg:'1',
        restaurants: [],
        bb:'0',
        ind:0,
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      this.knowledge_by();
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      
    knowledge_by(){
    this.$http.post(`${this.$store.state.location}services/app/Question/GetQuestionsByKnowledge`,{
			  "knowledgeId": 17,
			  "maxResultCount": 10,
			  "skipCount": 0,
        },{
            headers: {
               "Content-Type": "application/json",
        }
        }).then(response=>{
          this.detailsData = response.body.result.items;
          console.log( this.detailsData)
        },response=>{
          console.log(  'error')
       })
    },
    knowledge_list(){

    },
	createFilter(queryString) {
		return (restaurant) => {
		  return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
		};
	},
	handleNodeClick(data) {
		console.log(data);
	},
	aa(){
		console.log("节点被点击")
	},
	loadAll() {
		return this.sidess
	},
	list_s(id,name,imgs){
		this.$router.push({ name:'casesindex',query: {id:id,name:name,imgs:imgs}});

	},
	aa(index,event) {
		 this.bb = index
		 this.ind = index
	},
	filterNode(value, data) {
		if (!value) return true;
		return data.label.indexOf(value) !== -1;
		}
    },
    components:{
    	casesindex,
    },
  };
</script>
<style scoped>
.cases_cot{
	width: 960px;
	margin: 0 auto;
	min-height: 600px;
	display: flex;
}
.cases_cot_left{
	width:240px;
	background:rgba(255,255,255,1);
	border-radius: 6px ; 
	background-color: #FFFFFF;
	border: 1px solid #ddd;
	border-radius: 6px ; 
	box-shadow: 0px 2px 9px 0px rgb(0,0,0,0.03);
}
.el-tabs--border-card>.el-tabs__content {
    padding: 15px;
    background-color: #FFF8F8F8;
}
.cases_cot_rig{
	width:700px;
	background:rgba(255,255,255,1);
	border-radius: 6px ; 
	margin-left: 20px;
	border: 1px solid #ddd;
	box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.03);
}
.cases_cot_left_t{
	width: 80%;
	margin: auto;
    margin-top: 28px;
}
.cases_cot_left_t>input{
	width: 123px;
	height: 24px;
	line-height: 24px;
}
.cases_cot_left_content{
	margin-top: 15px;
}
.cases_cot_left_tit>span{
	display: inline-block;
	width:42px;
	height:14px; 
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(36,56,71,1);
	line-height:14px;
}
.cases_cot_left_tit{
	position: relative;
	display: flex;
}
.cases_cot_left_tit::after{
	content: '';
	width:42px;    
	height: 6px;
	background-color: #157CF0;
	position: absolute;
	top:25px;
	left:0px;
	border-radius: 6px;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 24px;
    line-height: 1;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 123px;
    top: 4px;
    left: 13px;
    height: 24px;
}
ul{
 	-webkit-padding-start: 0px;
}
.cases_cot_left_content>ul>li>i{
	margin-left: 15px;
	display: inline-block;
	height: 26px;
	width: 26px;
	background:url(../../../share/img/icon_list_folder_normal@2x.png)no-repeat;
}
.cases_cot_left_content>ul>li:hover{
	background-color: #157CF0;
}
.classactive{
	background-color: #157CF0;
}
.cases_cot_left_content>ul .classactive i{
	display: inline-block!important;
	height: 26px!important;
	width: 26px!important;
	background: url(../../../share/img/icon_list_folder_hover@2x.png)no-repeat!important;
	}
.cases_cot_left_content>ul>.classactive>b{
		display: inline-block;
    width: 4px;
    height: 18px;
    background-image: url(../../../share/img/img_class_list_point_hover.png)!important;
    background-repeat: no-repeat;
    margin-left: 23.5px;
}
.cases_cot_left_content>ul>li:hover i{
	display: inline-block;
	height: 26px;
	width: 26px;
	background: url(../../../share/img/icon_list_folder_hover@2x.png)no-repeat;
}
.cases_cot_left_content>ul>li{
	width: 200px;
	height: 53px;
	line-height: 53px;
	display: flex;
	align-items: center;
	width:200px;
	border: 1px solid #E9EFF4;
	height:53px; 
	border-radius: 5px ; 
	cursor: pointer;
}
.cases_cot_left_content>ul>li>span{
	display: inline-block;
	width:101px;
	height:28px; 
	font-size:12px;
	font-family:PingFangSC-Regular;
	color:rgba(36,56,71,1);
	line-height:14px;
	margin-left: 16px;
}
.cases_cot_left_content>ul>li>b{
	display: inline-block;
    width: 4px;
    height: 18px;
    background-image: url(../../../share/img/img_class_list_point_normal@2x.png);
    background-repeat: no-repeat;
    margin-left: 23.5px;
}
.cases_cot_left_content>ul>li:hover b{
	display: inline-block;
    width: 4px;
    height: 18px;
    background-image: url(../../../share/img/img_class_list_point_hover.png);
    background-repeat: no-repeat;
    margin-left: 23.5px;
}
</style>