<template>
  <div class="" style="background: white">
    <div class="topMenu"></div>
    <div style="background: white; padding: 20px 0">
      <div class="ctrlTop">
        <span>实训课程:</span>
        <el-select v-model="course" size="medium">
          <el-option
            v-for="item in allcourse"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <div class="ctrlR">
          <el-radio-group v-model="state" size="medium">
            <el-radio-button label="全部" ></el-radio-button>
            <el-radio-button label="未开始"></el-radio-button>
            <el-radio-button label="进行中"></el-radio-button>
            <el-radio-button label="已结束"></el-radio-button>
          </el-radio-group>
          <el-input placeholder="请输入任务名" suffix-icon="el-icon-search" clearable v-model="search"></el-input>
        </div>
      </div>
      <div v-for="(item,index) in missionData" :key="index" class="missionBox">
        <img :src="item.src" width="130" height="78">
        <div class="missionMsb">
          <div class="missTextBox">
            <div class="missL">{{item.title}}</div>
            <div class="missR">
              <span class="one">班级</span>
              <span>开始时间</span>
              <span>结束时间</span>
            </div>
          </div>
          <div class="missTextBox">
            <div class="missL">{{item.text}}</div>
            <div class="missR">
              <span class="one">{{item.clas}}</span>
              <span>{{item.beginT}}</span>
              <span>{{item.endT}}</span>
            </div>
          </div>
        </div>
        <div class="missionCtrl">
          <span v-if="item.program==0">未开始</span>
          <span v-else-if="item.program==100">已完成</span>
          <span v-else>进行中</span>
          <el-progress :percentage="item.program" :status="item.program==100? 'success' : ''"></el-progress>
          <div class="missctrlR">
            <span v-if="item.program==0">
              <i class="el-icon-delete" @click="feiqi(item.title)"></i><span @click="feiqi(item.title)">废弃</span>
              <i class="shu">|</i><i class="el-icon-edit-outline" @click="edit(item.title)"></i><span @click="edit(item.title)">编辑</span>
              <i class="shu">|</i><i class="el-icon-document" @click="yulan(item.title)"></i><span @click="yulan(item.title)">预览</span>
            </span>
            <span v-else-if="item.program==100">
              <i class="el-icon-document" @click="chakan(item.title)"></i><span @click="chakan(item.title)">查看</span>
            </span>
            <span v-else>
              <i class="el-icon-delete" @click="feiqi(item.title)"></i><span @click="feiqi(item.title)">废弃</span>
              <i class="shu">|</i><i class="el-icon-document" @click="chakan(item.title)"></i><span @click="chakan(item.title)">查看</span>
            </span>
          </div>
        </div>
      </div>
      <div class="pagein">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Renwu',
  data () {
    return {
      state: '全部',
      allcourse: ['全部','基础会计','财务会计'],
      course: '全部',
      search: '',
      missionData: [
        {
          src: '#',
          title: '第二学期摸底测试',
          text: '一些初级职高会计电算化案例合集。',
          clas: '1816班 1818班 1823班1816班 1818班',
          beginT: '06-16 14:03',
          endT: '06-17 14:03',
          program: 0,
        },{
          src: '#',
          title: '第二学期摸底测试',
          text: '一些初级职高会计电算化案例合集。一些初级职高会计电算化案例合集。',
          clas: '1816班 1818班 1823班1816班 ',
          beginT: '06-16 14:03',
          endT: '06-17 14:03',
          program: 50,
        },{
          src: '#',
          title: '第二学期摸底测试',
          text: '一些初级职高会计电算化案例合集。一些初级职高会计电算化案例合集。',
          clas: '1816班 1818班 1823班1816班 ',
          beginT: '06-16 14:03',
          endT: '06-17 14:03',
          program: 100,
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
    feiqi(name) {
      console.log(`废弃${name}`);
    },
    edit(name) {
      console.log(`编辑${name}`);
    },
    chakan(name) {
      console.log(`查看${name}`);
    },
    yulan(name) {
      console.log(`预览${name}`);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ctrlTop {
    width: 960px;
    margin: 30px auto 20px auto;
    position: relative;
  }
  .ctrlTop>span {
    font-size: 16px;
    color: #000000;
    font-weight: bold
  }
  .ctrlTop>.el-select {
    width: 160px;
    margin-left: 5px;
  }
  .ctrlR {
    position: absolute;
    right: 0;
    top: -3px;
  }
  .ctrlR .el-input {
    display: inline-block;
    margin-left: 20px;
    width: 260px;
  }
  .missionBox {
    margin: 0 auto 20px auto;
    width: 960px;
    padding: 10px;
    border: 1px solid #E9E9E9;
    border-radius: 2px;
  }
  .missionMsb {
    display: inline-block;
    vertical-align: top;
    margin-left: 15px;
  }
  .missTextBox {
    width: 785px;
    position: relative;
    min-height: 38px;
    font-size: 14px;
    overflow: hidden;
    color:  rgba(0, 0, 0, 0.65);
  }
  .missTextBox:first-child .missL {
    font-weight: bold;
  }
  .missL {
    width: 325px;
  }
  .missR {
    position: absolute;
    right: 0;
    top: 0;
  }
  .missR>span {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 85px;
    margin-left: 40px;
  }
  .missR>span:first-child {
    width: 150px;
  }
  .missionCtrl {
    height: 30px;
    line-height: 35px;
    border-top: 1px solid #E9E9E9;
    margin-top: 5px;
    padding-top: 5px;
    position: relative;
    font-size: 14px;
    color: rgba(0, 0, 0, .45)
  }
  .missionCtrl .el-progress {
    width: 210px;
    display: inline-block;
    margin-left: 8px;
  }
  .missctrlR {
    position: absolute;
    right: 0;
    top: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  .missctrlR>span i {
    color: #1890FF;
    cursor: pointer;
  }
  .missctrlR>span .shu {
    margin: 15px;
    color: #D8D8D8;
  }
  .missctrlR>span span {
    color: #1890FF;
    cursor: pointer;
    margin-left: 5px;
  }
  .pagein {
    width: 960px;
    margin: 25px auto 20px auto;
    text-align: right;
  }
</style>
