<template>
  <div class="">
    <div class="componentBox">
      <p class="path"><router-link to="/Teacher/Shixun">实训中心</router-link> &gt; {{bookAttr.name}}</p>
      <div class="whiteBox booktop">
        <img :src="bookAttr.src" height="180" width="120" class="bookimg">
        <router-link to="#" class="anli">全真案例</router-link>
        <div class="book">
          <h3>{{bookAttr.name}}</h3>
          <p>{{bookAttr.text}}</p>
          <p class="ico">
            <span class="one">任教班级: {{teac.classone}}</span>
            <span class="two">任教班级: {{teac.classtwo}}</span>
            <span class="three">{{bookAttr.topic}}题</span>
          </p>
        </div>
      </div>

      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="kechengTab">
        <el-tab-pane label="我的题组" name="first">
          <span slot="label" class="icon1">我的题组</span>
          <div class="tabCard" :class="{ topicLass: has }">
            <div class="cardTitle">
              <span class="careName">我的题组 <span> (共{{topicList.number}}个)</span></span>
              <span class="addName">新建题组</span><span class="addBtn">+</span>
            </div>
            <div v-if="!has">
              <div v-for="(item,index) in topicList.topicArr" :key="index" class="tizuBox">
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
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      bookAttr: {
        name: '没有',
        src: require('../../share/img/image_class_cover.png'),
        text: '文字描述，对课程的简介，描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        topic: 1234
      },
      teac: {
        classone: "暂无",
        classtwo: "暂无",
      },
      activeName: 'first',
      topicList: {
        number: 1,
        topicArr: [
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
          },{
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
          },
        ]
      }
    }
  },
  mounted() {
    this.$store.commit("shixunshow",false);
    if(this.$route.query.name){
      this.bookAttr.name = this.$route.query.name
    }
  },
  destroyed() {
    this.$store.commit("shixunshow",true)
  },
  methods: {
    handleClick(tab, event) {
      
    }
  },
  computed: {
    has() {
      return this.topicList.number>0? false: true
    }
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
  background: rgba(0,176,255,1);
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
  background: #F99090;
  background-repeat: no-repeat;
  background-position: 14px 9px;
  background-image: url('../../share/img/icon_class_mouse2.png');
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
}
.book .ico span {
  padding-left: 50px;
}
.book .ico .one {
  cursor: pointer;
  background: url('../../share/img/icon_setclass_normal.png') 20px 0 no-repeat;
}
.book .ico .one:hover {
  background: url('../../share/img/icon_setclass_normalcopy.png') 20px 0 no-repeat;
  color: #F99090;
}
.book .ico .two {
  cursor: pointer;
  background: url('../../share/img/icon_class_classdata_normalcopy.png') 20px 0 no-repeat;
}
.book .ico .two:hover {
  background: url('../../share/img/icon_class_classdata_normalcopy2.png') 20px 0 no-repeat;
  color: #F99090;
}
.book .ico .three {
  padding-left: 190px;
  background: url('../../share/img/icon_class_count_normal.png') 160px 0 no-repeat;
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
.line {
  position: absolute;
  width: 1px;
  height: 150px;
  background: #EEEEEE;
  top: 15px;
  left: 441px;
}
.line:first-child {
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
</style>