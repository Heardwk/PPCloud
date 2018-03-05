<template>
  <div class="">
    <p class="path">
      <router-link to="/Teacher/Shixun">实训中心</router-link> &gt;
      <router-link to="/Teacher/Shixun/Course">{{bookName}}</router-link> &gt;
      快速创建题组
    </p>
    <div class="headBox">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="选择知识点"></el-step>
        <el-step title="调整题型"></el-step>
        <el-step title="案例甄选"></el-step>
        <el-step title="题组参数"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <p v-if="showBox[0]"><span class="el-icon-info"></span>请在左边的树形列表中勾选题组所涉及的知识点。</p>
      <p v-if="showBox[1]"><span class="el-icon-info"></span>可在下表中调整题组所涉题型的数量及每个题型的单题分值。</p>
      <p v-if="showBox[2]"><span class="el-icon-info"></span>勾选您需要收纳在题组内的案例。</p>
      <p v-if="showBox[3]"><span class="el-icon-info"></span>可在下表中调整题组所涉题型的数量及每个题型的单题分值。</p>
      <p v-if="showBox[4]"><span class="el-icon-info"></span>收获创建成功的喜悦！</p>
    </div>
    <div v-if="showBox[0]" class="pointBox">
      <div class="leftContent">
        <p>
          <span class="hasLine">知识点</span>
          <el-input
            class="serch"
            placeholder="关键字搜索"
            v-model="filterText">
          </el-input>
        </p>
        <el-tree
          class="tree"
          :props="defaultProps"
          :data="dataList"
          node-key="id"
          show-checkbox
          :default-checked-keys = "isChecArr"
          ref="tree"
          :filter-node-method="filterNode"
          :accordion = "isAccordion"
          @check-change="handleCheckChange">
        </el-tree>
      </div>
      <div class="rightContent">
        <p><span class="hasLine">已选知识点</span></p>
        <div style="border-bottom: 1px solid #EEEEEE;min-height:350px;margin-top: 20px;">
          <span v-for="(item,index) in ckeckList" :key="index">{{item}}</span>
          <div v-if="checkTree.length>0">
            <el-tag
              v-for="item in checkTree"
              :key="item.id"
              @close="handleClose(item)"
              closable>
              {{item.label}}
            </el-tag>
          </div>
        </div>
        <p class="all">
          <span class="el-icon-info"></span>
          已选择<span class="light">{{title.point}}</span>个知识点，
          共计<span class="light">{{title.count}}</span>个案例，您可以在下一个步骤调整具体的题型及数量
        </p>
        <div class="btnBox">
          <router-link to="/Teacher/Shixun/Course">返回课程</router-link>
          <el-button @click="next" type="primary">下一步</el-button>
        </div>
      </div>
    </div>
    <div v-if="showBox[1]" class="contentBox">
      <p><span class="hasLine">已选题型及数量</span></p>
      <div style="border-bottom: 1px solid #EEEEEE;min-height:350px;margin-top: 20px;">
        <ul class="titleUl">
          <li class="titleHead">
            <span class="titleOne">题型</span>
            <span class="titleTwo">数量</span>
            <span class="titleThr">分值</span>
          </li>
          <li v-for="(item,index) in tixing" :key="index" class="titleList">
            <span class="titleOne">{{item.type}}</span>
            <span class="titleTwo">
              <el-input-number v-model="item.count" @change="handleChangeCount" :min="0"></el-input-number>
            </span>
            <span class="titleThr">
              <el-input-number v-model="item.point" @change="handleChangePoint" :min="0"></el-input-number>
            </span>
          </li>
        </ul>
      </div>
      <p class="all">
        <span class="el-icon-info"></span>
        已选择<span class="light">{{title.point}}</span>个知识点，
        共计<span class="light">{{title.count}}</span>个案例，
        累计总分<span class="light">{{allPoint}}</span>分，创建完成后，您可以随时调整这些参数。
      </p>
      <div class="btnBox">
        <el-button @click="active--">上一步</el-button>
        <el-button @click="next" type="primary">下一步</el-button>
      </div>
    </div>
    <div v-if="showBox[2]" class="pointBox">
      <div class="leftContent">
        <p>
          <span class="hasLine">知识点</span>
          <el-input
            class="serch"
            placeholder="关键字搜索"
            clearable
            v-model="choooseText">
          </el-input>
        </p>
        <div class="chooseBox">
          <div v-for="(item,index) in choooseTree" :key="index" class="chooseList" @click="hasact(index)" :class="{'act': isact === index}">
            <span class="el-icon-tickets"></span>
            {{item.label}}
          </div>
        </div>
      </div>
      <div class="rightContent">
        <p><span class="hasLine">设置题组基本信息</span></p>
        <div class="choooseContent">
          <ul class="titleUlBox">
            <li>
              <span class="num">序号</span>
              <span class="name">案例名称</span>
              <span class="point">课程名称</span>
              <span class="type">题型</span>
              <span class="count">练习次数</span>
              <span class="oper">操作</span>
            </li>
            <li v-for="(item,index) in topicData" class="titltLi">
              <span class="num">{{index+1}}</span>
              <span class="name">{{item.name}}</span>
              <span class="point">{{item.point}}</span>
              <span class="type">{{item.type}}</span>
              <span class="count">{{item.count}}</span>
              <span class="oper"><el-checkbox v-model="item.chec"></el-checkbox></span>
            </li>
          </ul>
          <div style="text-align: right; margin-bottom:20px;">
            <el-pagination
              background
              layout="prev, pager, next"
              @current-change="changePage"
              :total="50">
            </el-pagination>
          </div>
        </div>
        <p class="all"><span class="el-icon-info"></span>
          已选择<span class="light">{{title.point}}</span>个知识点，
          共计<span class="light">{{title.count}}</span>个案例，
        </p>
        <div class="btnBox">
          <el-button @click="active--">上一步</el-button>
          <el-button @click="next" type="primary">下一步</el-button>
        </div>
      </div>
    </div>
    <div v-if="showBox[3]" class="contentBox">
      <p><span class="hasLine">设置题组基本信息</span></p>
      <div style="border-bottom: 1px solid #EEEEEE;min-height:350px;margin-top: 20px;">
        <div class="titleMsgBox">
          <p>
            <span class="leftSpan">题组名称</span>
            <el-input v-model="tizuName" placeholder="请输入内容" clearable></el-input>
          </p>
          <div style="margin-top: 20px;">
            <span class="leftSpan">备&nbsp;&nbsp;注</span>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              resize="none"
              :autosize="{ minRows: 6, maxRows: 8}"
              v-model="textarea">
            </el-input>
          </div>
        </div>
      </div>
      <p class="all"><span class="el-icon-info"></span>设置个性的名称和备注，以便更快速的找到目标题组。</p>
      <div class="btnBox">
        <el-button @click="active--">上一步</el-button>
        <el-button @click="next" type="primary">下一步</el-button>
      </div>
    </div>
    <div v-if="showBox[4]" class="contentBox">
      <div style="border-bottom: 1px solid #EEEEEE;min-height:369px;margin-top: 20px;">
        <div class="succBox">
          <h3>创建成功</h3>
          <p ref="times">5秒后跳转至课程页面</p>
          <div><router-link to="/Teacher/Shixun/Course">返回课程</router-link></div>
        </div>
      </div>
      <p class="all"><span class="el-icon-info"></span>完成后可以将立即将题组中的题目作为任务推送给学习进行练习。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addProblem',
  data () {
    return {
      isChecArr: [],
      bookName: '',
      time: 5,
      active: 0,
      isAccordion: true,
      defaultProps: {
        label: 'label',
        children: 'children'
      },
      checkTree: [],
      choooseTree: [],
      filterText: '',
      choooseText: '',
      dataList: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1三级'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
          }, {
            id: 6,
            label: '二级 2-2',
            children: [{
              id: 11,
              label: '三级 2-2-1'
            }]
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1',
            children: [{
              id: 12,
              label: '三级 3-1-1'
            }]
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
              id: 13,
              label: '三级 3-2-1'
            }]
          }]
        }
      ],
      ckeckList: [],
      title: {
        point: 5,
        count: 150
      },
      topicData: [
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
          chec: false
        },
      ],
      tixing: [
        {
          type: '选择题',
          count: 0,
          point: 0,
        },{
          type: "多选题",
          count: 0,
          point: 0,
        },{
          type: "判断题",
          count: 0,
          point: 0,
        },{
          type: "综合题",
          count: 0,
          point: 0,
        },
      ],
      tizuName: '',
      textarea: '',
      isact: 0
    }
  },
  mounted() {
    this.$store.commit("secondrouterCtrl",false);
    this.bookName = localStorage.getItem("bookName");
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    checkTree() {
      this.choooseTree = this.checkTree
    },
    choooseText(val) {
      if(val==""){
        this.choooseTree = this.checkTree
        return
      }
      let arr = [];
      for(let i=0; i<this.checkTree.length; i++){
        if(this.checkTree[i].label.match(val)) {
          arr.push(this.checkTree[i])
        }
      }
      if(arr.length==0) {
        this.choooseTree = this.checkTree
      }else {
        this.choooseTree = arr;
      }
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      // if(checked) {
      //   this.ckeckList.push(data.label);
      // }
      // 所有被选中的
      this.checkTree = this.$refs.tree.getCheckedNodes();
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleClose(item) {
      console.log(item.$treeNodeId)
      this.checkTree.splice(this.checkTree.indexOf(item), 1);
      this.$refs.tree.setCheckedNodes(this.checkTree);
    },
    handleChangeCount(val) {
      // 数量
    },
    handleChangePoint(val){
      // 分值
    },
    next() {
      if(this.active==0){
        if(this.checkTree.length==0){
          this.$message.error('请选择知识点');
          return
        }
      }else if(this.active==1) {
        if(this.allCount==0){
          this.$message.error('请添加题数');
          return
        }else if(this.allPoint==0){
          this.$message.error('请选择分数');
          return
        }
      }else if(this.active==3) {
        if(this.tizuName==""){
          this.$message.error('请填写题组名字');
          return
        }
      }
      this.active++
    },
    changePage() {

    },
    hasact(val) {
      this.isact = val;
    }
  },
  computed: {
    showBox() {
      let arr = [false,false,false,false,false];
      arr[this.active] = true;
      return arr;
    },
    allPoint() {
      let point = 0;
      for(let i=0; i<this.tixing.length; i++){
        point+=(this.tixing[i].point*this.tixing[i].count)
      }
      return point
    },
    allCount() {
      let count = 0;
      for(let i=0; i<this.tixing.length; i++){
        count+=this.tixing[i].count;
      }
      return count
    },
  },
  updated() {
    if(this.active==0){
      if(this.checkTree.length>0){
        this.$refs.tree.setCheckedNodes(this.checkTree);
      }
    }
    if(this.active==4){
      let that = this;
      let $times = this.$refs.times;
      let interval = window.setInterval(function() {
        if ((that.time--) <= 1) {
          $times.innerText = "正在跳转至课程页面...";
          window.clearInterval(interval);
          window.location.href = "#/Teacher/Shixun/Course";
        }else {
          $times.innerText = that.time + "秒后跳转至课程页面"
        }
      }, 1000);
    }
  },
  destroyed() {
    this.$store.commit("secondrouterCtrl",true) 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .path {
    color: #687178;
    font-size: 16px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .headBox {
    padding: 20px 0;
    background-color: white;
    border-radius: 4px;
  }
  .headBox p {
    color: #687178;
    font-size: 12px;
    padding: 20px 50px 0 50px;
  }
  .headBox p span {
    color: #1890FF;
    margin-right: 5px;
  }
  .pointBox {
    margin-top: 20px;
    position: relative;
    min-height: 600px;
  }
  .hasLine {
    color: #243847;
    position: relative;
    padding: 0 0 10px 0;
  }
  .hasLine::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #00B0FF;
    border-radius: 11px;
  }
  .leftContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 255px;
    height: 600px;
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    font-size: 14px;
  }
  .leftContent .el-input {
    display: inline-block;
    width: 135px;
    font-size: 12px;
    margin-left: 30px;
  }
  .tree {
    margin-top: 10px;
    height: 530px;
    overflow-y: auto;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
  .rightContent {
    margin-left: 275px;
    padding: 20px;
    font-size: 14px;
    background-color: white;
    border-radius: 4px;  
  }
  .el-tag {
    margin: 0 20px 20px 0;
  }
  .all {
    color: #687178;
    margin-top: 5px
  }
  .all .el-icon-info {
    color: #1890FF;
    margin: 0 5px 0 20px;
  }
  .all .light {
    color: #00B0FF;
  }
  .btnBox {
    padding: 30px 70px 10px 0px;
    text-align: right;  
  }
  .btnBox button,.btnBox a {
    margin-left: 20px;
    height: 35px;
    line-height: 35px;
    width: 95px;
    padding: 0;
    display: inline-block;
  }
  .btnBox a {
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    border-radius: 4px;
    line-height: 34px;
  }
  .btnBox a:hover {
    color: #409EFF;
    background-color: #ECF5FF;
    border-color: #C6E2FF;
  }
  .contentBox {
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    font-size: 14px;
  }
  .titleUl {
    padding: 0;
  }
  .titleHead {
    line-height: 54px;
    color: #000000;
    border-radius: 4px 4px 0px 0px;
    background-color: #FAFAFA;
  }
  .titleList {
    line-height: 54px;
    border-top: 1px solid #E8E8E8;
  }
  .titleUl .titleOne{
    width: 110px;
    text-align: center;
    margin-left: 85px;
    display: inline-block;
  }
  .titleUl .titleTwo{
    width: 155px;
    text-align: center;
    margin-left: 120px;
    display: inline-block;
  }
  .titleUl .titleThr{
    width: 155px;
    text-align: center;
    margin-left: 150px;
    display: inline-block;
  }
  .titleList .el-input-number {
    width: 155px;
  }
  .titleMsgBox {
    padding-top: 50px;
  }
  .titleMsgBox .leftSpan {
    font-size: 14px;
    display: inline-block;
    width: 85px;
    text-align: right;
    margin-right: 35px;
    color: #243847;
  }
  .titleMsgBox .el-input {
    display: inline-block;
    width: 240px;
    line-height: 40px;
    color: #243847;
  }
  .titleMsgBox .el-textarea {
    display: inline-block;
    width: 428px;
    vertical-align: top;
  }
  .succBox {
    text-align: center;
    padding-top: 125px;
    background-image: url('../../share/img/icon_diago.png');
    background-repeat: no-repeat;
    background-position: center 20px;
  }
  .succBox h3 {
    font-size: 24px;
    color: rgba(0,0,0,0.85);
  }
  .succBox p {
    margin-top: 8px;
    font-size: 14px;
    color: rgba(0,0,0,0.43);
  }
  .succBox div {
    margin-top: 25px;
  }
  .succBox div a {
    width: 135px;
    height: 35px; 
    border-radius: 3px; 
    border: 1px solid #52C41A;
    display: inline-block;
    line-height: 34px;
    padding: 0;
    margin: 0 10px;
    color: #52C41A;
  }
  .succBox div a:hover {
    color: white;
    border: 1px solid #52C41A;
    background-color: #52C41A;
  }
  .choooseContent {
    position: relative;
    border-bottom: 1px solid #EEEEEE;
    min-height:350px;
    margin-top: 20px;
  }
  .chooseBox {
    height: 530px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .titleUlBox {
    font-size: 12px;
    color: #42424E;
    padding: 0;
  }
  .titleUlBox li:first-child {
    background-color: #EFEFF4;
    margin-bottom: 5px;
  }
  .titltLi {
    background-color: #FBFBFB;
  }
  .titltLi:nth-child(2n) {
    background-color: #EFEFF4;
  }
  .titltLi:hover {
    background-color: #FEF1F1;
  }
  .titleUlBox li span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 40px;
    line-height: 40px;
  }
  .titleUlBox .num {
    display: inline-block;
    width: 55px;
    text-align: center;
  }
  .titleUlBox .name {
    display: inline-block;
    width: 280px;
    text-align: center;
  }
  .titltLi .name {
    text-align: left;
  }
  .titleUlBox .point {
    display: inline-block;
    width: 90px;
    text-align: center;
  }
  .titleUlBox .type {
    display: inline-block;
    width: 75px;
    text-align: center;
  }
  .titleUlBox .count {
    display: inline-block;
    width: 65px;
    text-align: center;
  }
  .titleUlBox .oper {
    display: inline-block;
    width: 55px;
    text-align: center;
    position: relative;
  }
  .titltLi .oper {
    cursor: pointer;
  }
  .titleUl {
    padding: 0;
  }
  .titleHead {
    line-height: 54px;
    color: #000000;
    border-radius: 4px 4px 0px 0px;
    background-color: #FAFAFA;
  }
  .titleList {
    line-height: 54px;
    border-top: 1px solid #E8E8E8;
  }
  .titleUl .titleOne{
    width: 110px;
    text-align: center;
    margin-left: 85px;
    display: inline-block;
  }
  .titleUl .titleTwo{
    width: 155px;
    text-align: center;
    margin-left: 120px;
    display: inline-block;
  }
  .titleUl .titleThr{
    width: 155px;
    text-align: center;
    margin-left: 150px;
    display: inline-block;
  }
  .titleList .el-input-number {
    width: 155px;
  }
  .chooseList {
    padding: 15px;
    font-size: 12px;
    color: #243847;
    border: 1px solid #E9EFF4;
    border-radius: 5px;
    margin-top: 5px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .chooseList:hover, .chooseList.act {
    background-color: #00B0FF;
    color: white;
  }
  .chooseList:hover span, .chooseList.act span {
    color: white;
  }
  .chooseList span {
    font-size: 18px;
    color: #4DA1FF;
    margin-right: 10px;
  }
</style>
