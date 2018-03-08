<template>
  <div class="">
    <p class="path">
      <router-link to="/Teacher/Shixun">实训中心</router-link> &gt;
      <router-link to="/Teacher/Shixun/Course">{{bookName}}</router-link> &gt;
      修改题组
    </p>
    <div class="topContentBox">
      <div>
        <h3>{{topicList.title}}<span>{{topicList.time}}</span></h3>
        <p>基本信息： 已选择<span>{{topicList.point}}</span>个知识点，共<span>{{topicList.case}}</span>个案例，总分值<span>{{topicList.count}}</span>分</p>
        <div class="list">
          <span class="line"></span>
          <span class="line"></span>
          <div v-for="(i,index) in topicList.classification" :key="index">
            <div class="abso" v-if="index==0"><span>题型</span><span>数量</span><span>计分</span></div>
            <div class="abso" v-else-if="index==4"><span>题型</span><span>数量</span><span>计分</span></div>
            <div class="abso" v-else-if="index==8"><span>题型</span><span>数量</span><span>计分</span></div>
            <div class="border">
              <span>{{i.clas}}</span>
              <span class="light">{{i.quantity}}</span>
              <span>{{i.score}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="kechengTab">
      <el-tab-pane label="案例列表" name="first">
        <span slot="label" class="icon1">案例列表</span>
        <div class="tabContent">
          <ul class="titleUlBox">
            <li>
              <span class="num">序号</span>
              <span class="name">案例名称</span>
              <span class="point">课程名称</span>
              <span class="type">题型</span>
              <span class="count">分值</span>
              <span class="oper">操作</span>
            </li>
            <li v-for="(item,index) in topicData" class="titltLi">
              <span class="num">{{index+1}}</span>
              <span class="name">{{item.name}}</span>
              <span class="point">{{item.point}}</span>
              <span class="type">{{item.type}}</span>
              <span class="count">{{item.count}}</span>
              <el-popover placement="top" width="160">
                <p>删除案例？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="delet(false,item)">取消</el-button>
                  <el-button type="primary" size="mini" @click="delet(true,item)">确定</el-button>
                </div>
                <span class="oper" slot="reference"><i class="el-icon-delete"></i>删除</span>
              </el-popover>
            </li>
          </ul>
          <div style="text-align: right;">
            <el-pagination
              background
              layout="prev, pager, next"
              @current-change="changePage"
              :total="50">
            </el-pagination>
          </div>
          <div class="line"></div>
          <p><span class="el-icon-info"></span>您可以通过右上角的“继续添加”按钮来增加案例</p>
          <div style="text-align: right">
            <el-button type="primary">保存</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="题型分值" name="second">
        <span slot="label" class="icon2">题型分值</span>
          <div class="tabContent">
            <div style="margin-top: 20px;">
            <ul class="titleUl">
              <li class="titleHead">
                <span class="titleOne">题型</span>
                <span class="titleTwo">数量</span>
                <span class="titleThr">分值</span>
              </li>
              <li v-for="(item,index) in topicList.classification" :key="index" class="titleList">
                <span class="titleOne">{{item.clas}}</span>
                <span class="titleTwo">
                  <el-input-number v-model="item.quantity" @change="handleChangeCount" :min="0"></el-input-number>
                </span>
                <span class="titleThr">
                  <el-input-number v-model="item.score" @change="handleChangePoint" :min="0"></el-input-number>
                </span>
              </li>
            </ul>
          </div>
          <div class="line"></div>
          <p>
            <span class="el-icon-info"></span>
            已选择<span class="light">{{title.point}}</span>个知识点，
            共计<span class="light">{{title.count}}</span>个案例，
            累计总分<span class="light">{{allPoint}}</span>分。
          </p>
          <div style="text-align: right">
            <el-button type="primary">保存</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="基本信息" name="third">
        <span slot="label" class="icon3">基本信息</span>
        <div class="tabContent">
          <div style="margin-top: 20px;">
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
          <div class="line"></div>
          <p><span class="el-icon-info"></span>设置个性的名称和备注，以便更快速的找到目标题组。</p>
          <div style="text-align: right">
            <el-button type="primary">保存</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>



  </div>
</template>

<script>
export default {
  name: 'editProblem',
  data () {
    return {
      bookName: '',
      activeName: 'first',
      tizuName: '',
      textarea: '',
      title: {
        point: 5,
        count: 150
      },
      topicList: {
        title: '第一学期摸底题',
        time: '2018-2-13',
        text: '描述',
        point: 10,
        case: 40,
        count: 100,
        classification: [
          {
            clas: '选择题',
            quantity: 10,
            score: 20
          },{
            clas: '填空题',
            quantity: 10,
            score: 20
          },{
            clas: '计算题',
            quantity: 10,
            score: 20
          },{
            clas: '不限定',
            quantity: 10,
            score: 4
          },{
            clas: '选择题',
            quantity: 10,
            score: 20
          },{
            clas: '填空题',
            quantity: 10,
            score: 20
          },{
            clas: '计算题',
            quantity: 10,
            score: 20
          },{
            clas: '不限定',
            quantity: 10,
            score: 8
          },{
            clas: '选择题',
            quantity: 10,
            score: 20
          },{
            clas: '填空题',
            quantity: 10,
            score: 20
          }
        ]
      },
      topicData: [
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
        {
          name: '提供的原始单据、记账凭证、账薄资料等,要求选用正确的方法AAbb',
          point: '基础会计',
          type: '单选题',
          count: 2,
        },
      ],
    }
  },
  mounted() {
    this.$store.commit("secondrouterCtrl",false);
    this.bookName = localStorage.getItem("bookName");
    this.tizuName = this.topicList.title;
    this.textarea = this.topicList.text;
  },
  methods: {
    handleClick(tab, event) {
      
    },
    delet(bool,item) {
      bool? console.log(`删除${item.name}`): ''
      document.body.click();
    },
    changePage() {

    },
    handleChangeCount() {

    },
    handleChangePoint() {

    }
  },
  computed: {
    allPoint() {
      let point = 0;
      for(let i=0; i<this.topicList.classification.length; i++){
        point+=this.topicList.classification[i].score;
      }
      return point
    },
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
.topContentBox {
  padding: 20px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}
.topContentBox>div {
  position: relative;
}
.topContentBox>div h3 {
  color: #00B0FF;
  font-size: 14px;
  position: relative;
  font-weight: normal;
}
.topContentBox>div h3 span {
  position: absolute;
  color: #989898;
  font-size: 12px;
  right: 0;
}
.topContentBox>div p {
  line-height: 24px;
  background-color: rgba(247, 118, 118, 0.1);
  margin-top: 10px;
  text-indent: 20px;
  font-size: 12px;
  color: #687178;
}
.topContentBox>div p span {
  color: #00B0FF;
}
.list {
  columns: 100px 3;
  -moz-columns: 100px 3;
  -webkit-columns: 100px 3;
  position: relative;
  padding-top: 45px;
  font-size: 12px;
  padding-right: 160px;
}
.list .line {
  position: absolute;
  width: 1px;
  height: 150px;
  background: #EEEEEE;
  top: 15px;
  left: 485px;
}
.list .line:first-child {
  left: 228px;
}
.abso {
  position: absolute;
  line-height: 25px;
  top: 16px;
}
.abso span {
  color: rgba(165,183,197,1);
  border-bottom: 1px solid #EEEEEE;
  padding-bottom: 2px;
  display: inline-block;
  width: 65px;
  text-align: center;
}
.border {
  clear: both;
}
.border span {
  width: 65px;
  text-align: center;
  color: #687178;
  line-height: 30px;
  height: 29px;
  border-bottom: 1px solid #EEEEEE;
  float: left;
}
.border .light {
  color: #00B0FF;
}
.el-tabs__item span {
  font-size: 12px;
  color: #A5B7C5;
  width: 90px;
  height: 35px;
  line-height: 35px;
  text-align: right;
  padding-right: 10px;
  display: block;
  background-position: 5px 8px;
  background-repeat: no-repeat;
}
.el-tabs__item.is-active span {
  color: #323C47;
  background-color: white;
}
.el-tabs__item .icon1 {
  background-image: url('../../share/img/icon_class_tab_1_normal.png');
}
.el-tabs__item .icon1:hover, .el-tabs__item.is-active .icon1 {
  background-image: url('../../share/img/icon_class_hover.png');
}
.el-tabs__item .icon2 {
  background-image: url('../../share/img/icon_class_tab_2_normal.png');
}
.el-tabs__item .icon2:hover, .el-tabs__item.is-active .icon2 {
  background-image: url('../../share/img/icon_class_tab_2_hover.png');
}
.el-tabs__item .icon3 {
  background-image: url('../../share/img/icon_class_tab_3_normal.png');
}
.el-tabs__item .icon3:hover, .el-tabs__item.is-active .icon3 {
  background-image: url('../../share/img/icon_class_tab_3_hover.png');
}
.tabContent {
  padding: 20px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}
.tabContent .line {
  height: 1px;
  background-color: #E8E8E8;
  margin-top: 20px;
}
.tabContent>p {
  font-size: 14px;
  color: rgba(104,113,120,1);
  margin-top: 8px;
}
.tabContent>p .light {
  color: #00B0FF;
}
.tabContent>p .el-icon-info {
  color: #1890FF;
  margin-right: 8px;
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
}
.titleUlBox .num {
  display: inline-block;
  width: 80px;
  text-align: center;
    height: 40px;
  line-height: 40px;
}
.titleUlBox .name {
  display: inline-block;
  width: 410px;
  text-align: center;
    height: 40px;
  line-height: 40px;
}
.titltLi .name {
  text-align: left;
}
.titleUlBox .point {
  display: inline-block;
  width: 100px;
  text-align: center;
    height: 40px;
  line-height: 40px;
}
.titleUlBox .type {
  display: inline-block;
  width: 100px;
  text-align: center;
    height: 40px;
  line-height: 40px;
}
.titleUlBox .count {
  display: inline-block;
  width: 100px;
  text-align: center;
    height: 40px;
  line-height: 40px;
}
.titleUlBox .oper {
  display: inline-block;
  width: 100px;
  text-align: center;
  position: relative;
    height: 40px;
  line-height: 40px;
}
.titltLi .oper {
  cursor: pointer;
}
.titltLi .oper .el-icon-delete {
  position: absolute;
  left: 17px;
  top: 12px;
  font-size: 16px;
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
.titleMsgBox span {
  font-size: 16px;
  display: inline-block;
  width: 85px;
  text-align: right;
  margin-right: 35px;
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
</style>
