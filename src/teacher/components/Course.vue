<template>
  <div class="">
    <div v-if="course.course">
      <p class="path"><router-link to="/Teacher/Shixun">实训中心</router-link> &gt; {{bookAttr.name}}</p>
      <div class="whiteBox booktop">
        <img :src="bookAttr.src" height="180" width="120" class="bookimg">
        <router-link to="#" class="anli">全真案例</router-link>
        <div class="book">
          <h3>{{bookAttr.name}}</h3>
          <p>{{bookAttr.text}}</p>
          <p class="ico">
            <span class="one" @click="setDailog=true">
              任教班级: 
              <span v-for="(item,index) in teac.classone" :key="index">{{item}} </span>
            </span>
            <span class="two" @click="setDailog=true">任教期间: {{teac.classtwo}}</span>
            <span class="three">{{bookAttr.topic}}题</span>
          </p>
        </div>
      </div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="kechengTab">
        <el-tab-pane label="我的题组" name="first">
          <span slot="label" class="icon1">我的题组</span>
          <div class="tabCard" :class="{ topicLass: has }">
            <div class="cardTitle">
              <span class="careName">我的题组 <span> (共{{topicList.length}}个)</span></span>
              <span class="addName" @click="newDailog=true">新建题组</span><span class="addBtn">+</span>
            </div>
            <div v-if="!has">
              <div v-for="(item,index) in topicList" :key="index" class="tizuBox">
                <div class="ctrlBox">
                  <p><span>逐题预览</span></p>
                  <p><span>编辑题组</span></p>
                  <p><span>发布任务</span></p>
                  <div><span>删除</span><span>下载</span></div>
                </div>
                <div class="borR">
                  <h3>{{item.title}}<span>{{item.time}}</span></h3>
                  <p>基本信息： 已选择<span>{{item.point}}</span>个知识点，共<span>{{item.case}}</span>个案例，总分值<span>{{item.count}}</span>分</p>
                  <div class="list">
                    <span class="line"></span>
                    <span class="line"></span>
                    <div v-for="(i,index) in item.classification" :key="index">
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
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="实训计划" name="second">
          <span slot="label" class="icon2">实训计划</span>
          <div class="tabCard">
            <div class="cardTitle">实训计划</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="实训总结" name="third">
          <span slot="label" class="icon3">实训总结</span>
          <div class="tabCard">
            <div class="cardTitle">实训总结</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课程资料" name="fourth">
          <span slot="label" class="icon4">课程资料</span>
          <div class="tabCard">
            <div class="cardTitle">课程资料</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 教师设置弹窗 -->
    <el-dialog :visible.sync="setDailog" width="600px">
      <span class="setTitle">设置任教班级及期间</span>
      <div class="setBox"><span>任教时间：</span>{{setTime}}</div>
      <div class="setBox">
        <span>任教班级：</span>
        <el-select v-model="setValue1" placeholder="选择院系">
          <el-option
            v-for="item in setOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="setValue2" placeholder="选择年级">
          <el-option
            v-for="item in setOptionsA"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="setBox">
        <span>选择班级：</span>
        <div id="checkClas" class="checkClas">
          <span v-for="(item,index) in hasClass" :key="index">
            <input :id="index" type="checkbox" name="cls" :disabled="item.chec" :value="item.class">
            <label v-if="!item.chec" :for="index">{{item.class}}</label>
            <el-tooltip v-else effect="dark" :content="item.teac+str" placement="top-start">
              <label :for="index">{{item.class}}</label>
            </el-tooltip>
          </span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setDailog=false">取 消</el-button>
        <el-button type="primary" @click="setDailogT">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新建题组弹窗 -->
    <el-dialog :visible.sync="newDailog" width="700px">
      <span class="setTitle">新建题组</span>
      <div class="newBox">
        <div class="newOne">
          <router-link to='/Teacher/Shixun/Course/addProblemSet'>
            <el-button type="primary" @click="newDailog=false">快速选择案例</el-button>
          </router-link>
          <p>通过对知识点的选择，随机生成一定数量的案例保存为题组，给学生发布练习任务</p>
        </div>
        <span class="line"></span>
        <div class="newTwo">
          <el-button type="primary" @click="newDailog=false">快速选择案例</el-button>
          <p>手动挑选每一个具体的案例，交将其保存为题组，给学生发布练习任务</p>
        </div>
      </div>
    </el-dialog>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      str: "老师已经选择",
      setTime: "2017-2018年第二学期",
      setClass: [
        {
          class: '18会计',
          xibie: "会计系",
          nianji: '2018级',
          chec: false,
          teac: ''
        },{
          class: '18财会',
          xibie: "会计系",
          nianji: '2018级',
          chec: false,
          teac: ''
        },{
          class: '18财会',
          xibie: "会计系",
          nianji: '2018级',
          chec: false,
          teac: ''
        },{
          class: '18会计',
          xibie: "会计系",
          nianji: '2018级',
          chec: true,
          teac: '张三'
        },{
          class: '18财会',
          xibie: "会计系",
          nianji: '2018级',
          chec: false,
          teac: ''
        },{
          class: '17经管',
          xibie: "经管系",
          nianji: '2017级',
          chec: false,
          teac: ''
        },
      ],
      setOptions: [
        {
          value: '会计系',
          label: '会计系',
        },{
          value: '经管系',
          label: '经管系',
        },{
          value: '信息系',
          label: '信息系',
        }
      ],
      setOptionsA: [
        {
          value: '2018级',
          label: '2018级'
        },{
          value: '2017级',
          label: '2017级'
        },{
          value: '2016级',
          label: '2016级'
        }
      ],
      setValue1: '',
      setValue2: '',
      setDailog: false,
      newDailog: false,
      bookAttr: {
        name: '没有',
        src: require('../../share/img/image_class_cover.png'),
        text: '文字描述，对课程的简介，描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        topic: 1234
      },
      teac: {
        classone: ["暂无"],
        classtwo: "暂无",
      },
      activeName: 'first',
      topicList: [
        {
          title: '第一学期摸底题',
          time: '2018-2-13',
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
        }
      ] 
    }
  },
  mounted() {
    this.$store.commit("shixunshow",false);
    this.bookAttr.name = this.$store.state.book;
  },
  methods: {
    handleClick(tab, event) {
      
    },
    setDailogT() {
      this.setDailog = false;
      let checkClas = document.getElementById("checkClas");
      let checkI = checkClas.getElementsByTagName("input");
      let arr = [];
      for(let i=0; i<checkI.length; i++) {
        if(checkI[i].checked) {
          arr.push(checkI[i].value);
        }
      }
      if(arr.length==0){
        arr.push("暂无")
      }
      this.teac.classone = arr;
      this.teac.classtwo = this.setTime;
    }
  },
  computed: {
    course() {
      return this.$store.state
    },
    has() {
      return this.topicList.length>0? false: true
    },
    hasClass() {
      let arr = [];
      for(let i in this.setClass){
        if(this.setClass[i].xibie==this.setValue1&&this.setClass[i].nianji==this.setValue2){
          arr.push(this.setClass[i])
        }
      }
      return arr;
    }
  },
  destroyed() {
    this.$store.commit("shixunshow",true)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.path {
  color: #687178;
  font-size: 16px;
  font-family: PingFangSC;
  margin-top: 40px;
  margin-bottom: 20px;
}
.whiteBox {
  background: white;
  border-radius: 6px;
  padding: 20px;
  position: relative;
}
.booktop {
  background-image: url('../../share/img/img_class_goto.png');
  background-repeat: no-repeat;
  background-position: 780px 20px;
}
.bookimg {
  position: absolute;
  top: 20px;
  left: 20px;
}
.anli {
  position: absolute;
  right: 40px;
  bottom: 25px;
  width: 120px;
  height: 40px; 
  background-color: rgba(0,176,255,1);
  background-repeat: no-repeat;
  background-position: 14px 9px;
  background-image: url('../../share/img/icon_class_mouse.png');
  border-radius: 7px;
  font-family: PingFangSC-Regular;
  color: rgba(255,255,255,1);
  line-height: 40px;
  text-indent: 50px;
  font-size: 14px;
}
.anli:hover {
  background-color: #F99090;
}
.book {
  height: 180px;
  margin-left: 140px;
  margin-right: 200px;
  position: relative;
  padding-right: 20px;
  padding: 20px 20px 0 0;
  border-right: 1px solid #EEEEEE;
}
.book h3 {
  font-size: 16px;
  font-family: PingFangSC-Medium;
  color: rgba(66,66,78,1);
  line-height: 20px;
  margin-bottom: 15px;
}
.book p {
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: rgba(104,113,120,1);
  line-height: 20px;
}
.book .ico {
  position: absolute;
  bottom: 0px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: rgba(36,56,71,1);
  line-height: 20px;
  display: block;
  width: 100%;
  padding-right: 120px;
}
.book .ico>span {
  padding-left: 35px;
  line-height: 25px;
  margin-right: 5px;
  height: 25px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 7px 3px;
}
.book .ico .one {
  cursor: pointer;
  background-image: url('../../share/img/icon_setclass_normal.png');
}
.book .ico .one:hover {
  background-image: url('../../share/img/icon_setclass_normalcopy.png');
  color: #F99090;
}
.book .ico .two {
  cursor: pointer;
  background-image: url('../../share/img/icon_class_classdata_normalcopy.png');
}
.book .ico .two:hover {
  background-image: url('../../share/img/icon_class_classdata_normalcopy2.png');
  color: #F99090;
}
.book .ico .three {
  position: absolute;
  right: 25px;
  top: 0;
  background-image: url('../../share/img/icon_class_count_normal.png');
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
  font-family: PingFangSC-Regular;
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
.el-tabs__item .icon4 {
  background-image: url('../../share/img/icon_class_tab_4_normal.png');
}
.el-tabs__item .icon4:hover, .el-tabs__item.is-active .icon4 {
  background-image: url('../../share/img/icon_class_tab_4_hover.png');
}
.tabCard {
  background-color: white;
  padding: 25px 40px 25px 20px;
  min-height: 415px;
  background-repeat: no-repeat;
  background-position: center;
}
.topicLass {
  background-image: url('../../share/img/img_unress.png');
}
.cardTitle {
  position: relative;
  font-family: PingFangSC-Regular;
  margin-bottom: 25px;
}
.careName {
  font-size: 14px;
  color: #243847;
  line-height: 20px;
  padding-bottom: 5px;
  margin-left: 20px;
  border-bottom: 5px solid #00B0FF;
}
.careName span {
  font-size: 12px;
  color: rgba(165,183,197,1);
  line-height: 12px;
}
.addBtn {
  position: absolute;
  right: 60px;
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #00B0FF;
  color: white;
  font-size: 28px;
  text-indent: 1px;
  text-align: center;
  line-height: 23px;
  cursor: pointer;
}
.addName {
  position: absolute;
  right: 0;
  display: inline-block;
  height: 28px;
  line-height: 28px;
  font-size: 11px;
  color: rgba(36,56,71,1);
  cursor: pointer;
  padding-left: 40px;
  z-index: 2;
}
.addName:hover {
  color: #F77676;
}
.addName:hover+span {
  background-color: #F77676;
}
.tizuBox {
  padding: 20px;
  border: 1px solid #E9EFF4;
  border-radius: 6px;
  position: relative;
  margin-bottom: 25px;
}
.tizuBox .borR {
  margin-right: 160px;
  padding-right: 20px;
  position: relative;
  border-right: 1px solid #EEEEEE;
}
.tizuBox .ctrlBox {
  position: absolute;
  right: 10px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
}
.ctrlBox span {
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 12px 5px;
}
.ctrlBox span:hover {
  color: #F77676;
  background-image: url('../../share/img/icon_setclass_normalcopy.png');
}
.ctrlBox p {
  text-align: center;
  margin: 8px 0 16px 0;
}
.ctrlBox p span {
  margin: 0 auto;
  width: 110px;
  line-height: 30px;
  display: block;
  text-indent: 18px;
  border-radius: 2px;
  border: 1px solid #00B0FF;
  color: rgba(0,176,255,1);
  background-image: url('../../share/img/icon_setclass_normal.png');
}
.ctrlBox p span:hover {
  color: #F77676;
  border-color: #F77676;
}
.ctrlBox div span {
  color: #A5B7C5;
  padding-left: 35px;
  line-height: 40px;
  width: 80px;
  display: inline-block;
  background-position: 7px 10px;
  background-image: url('../../share/img/icon_setclass_normal.png');
}
.borR h3 {
  font-family: PingFangSC-Regular;
  color: #00B0FF;
  font-size: 14px;
  position: relative;
  font-weight: normal;
}
.borR h3 span {
  position: absolute;
  color: #989898;
  font-size: 12px;
  right: 0;
}
.borR p {
  line-height: 24px;
  background-color: rgba(247, 118, 118, 0.1);
  margin-top: 10px;
  text-indent: 20px;
  font-size: 12px;
  color: #687178;
}
.borR p span {
  color: #00B0FF;
}
.list {
  columns: 100px 3;
  -moz-columns: 100px 3;
  -webkit-columns: 100px 3;
  position: relative;
  padding-top: 45px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
}
.list .line {
  position: absolute;
  width: 1px;
  height: 150px;
  background: #EEEEEE;
  top: 15px;
  left: 441px;
}
.list .line:first-child {
  left: 212px;
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
/* 设置教师任教 */
.setTitle {
  position: absolute;
  top: 15px;
  left: 25px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: #687178;
  line-height: 25px;
  border-bottom: 4px solid #00B0FF;
  font-size: 12px;
}
.setBox {
  font-family: PingFangSC-Regular;
  margin: 0 30px 0 25px;
  padding: 10px 0 15px 0;
  border-bottom: 1px solid #EEEEEE;
  position: relative;
}
.setBox>span {
  color: #A5B7C5;
  margin-right: 11px;
}
.el-select {
  width: 140px;
}
.el-select:last-child {
  margin-left: 20px;
}
.checkClas {
  margin-left: 85px;
  margin-top: -25px;
  min-height: 40px;
}
.checkClas>span {
  display: inline-block;
  position: relative;
}
.checkClas>span input {
  position: absolute;
  top: 5px;
  left: 15px;
  display: block;
  cursor: pointer;
  z-index: -1;
  opacity: 0;
}
.checkClas>span label {
  width: 95px;
  padding: 0 15px;
  line-height: 28px;
  border-radius: 3px;
  display: block;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: #A5B7C5;
  text-align: right;
  border: 1px solid #A5B7C5;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: white;
  cursor: pointer;
  background-image: url('../../share/img/CombinedShapeB.png');
  background-repeat: no-repeat;
  background-position: 15px 5px;
}
.checkClas>span input:checked+label {
  background-color: #7ED321;
  color: white;
  border: 1px solid #7ED321;
  background-image: url('../../share/img/CombinedShapeW.png');
}
.checkClas>span input:disabled+label {
  background-color: #D8D8D8;
  color: white;
  border: 1px solid #D8D8D8;
  cursor: default;
  background-image: url('../../share/img/CombinedShapeE.png');
}
.dialog-footer {
  width: 100%;
  display: block;
  text-align: center;
}
.dialog-footer .el-button {
  font-size: 12px;
  padding: 10px 30px;
}
.dialog-footer .el-button--default {
  border: 1px solid #A5B7C5;
  color: #A5B7C5;
  background-color: white;
  margin-right: 35px;
}
.dialog-footer .el-button--default:hover {
  color: white;
  background-color: #A5B7C5;
}
.dialog-footer .el-button--primary {
  border: 1px solid #00B0FF;
  color: white;
  background-color: #00B0FF;
}
/*新建题组弹窗*/
.newBox {
  padding: 50px 30px;
  position: relative;
}
.newBox>div {
  width: 240px;
  vertical-align: top;
  display: inline-block;
  padding-top: 160px;
  text-align: left;
  background-repeat: no-repeat;
  background-image: url('../../share/img/img_class_goto_left.png');
}
.newBox>div:hover {
  opacity: 0.7;
}
.newBox .line {
  position: absolute;
  top: 0;
  left: 0;
}
.newBox .newOne {
  margin-left: 25px;
}
.newBox .newTwo {
  margin-left: 66px;
}
.newBox>div .el-button {
  display: block;
  width: 145px;
  text-indent: 25px;
  background-color: #00B0FF;
  background-repeat: no-repeat;
  background-position: 10px 8px;
  background-image: url('../../share/img/icon_class_mouse.png');
  margin: 20px auto;
}
.newBox>div p {
  font-size: 12px;
  color: #A5B7C5;
  text-indent: 20px;
}
</style>