<template>
  <div class="">
    <div class="topBox">
      <p>能力档案</p>
      <div class="selectBox">
        <div class="inlineBox">
          <span class="lab" :class="light1?'light':''">学院</span>
          <el-select v-model="college"  @visible-change="visibleChange1" @change="change1" placeholder="请选择学院">
            <el-option
              v-for="item in colleges"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="inlineBox">
          <span class="lab" :class="light2?'light':''">年级</span>
          <el-select v-model="grade"  @visible-change="visibleChange2" @change="change2"  placeholder="请选择年级">
            <el-option
              v-for="item in grades"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="inlineBox">
          <span class="lab" :class="light3?'light':''">班级</span>
          <el-select v-model="Clas"  @visible-change="visibleChange3" @change="change3"  placeholder="请选择班级">
            <el-option
              v-for="item in Class"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="serchBox">
        <el-input v-model="input" placeholder="搜索学号或姓名"></el-input><el-button style="margin-left: 30px" type="primary">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EAbility',
  data () {
    return {
      college: '全部',
      colleges: ["全部","会计学院","经管学院"],
      grade: '全部',
      grades: ["全部","2016级","2017级"],
      Clas: '全部',
      Class: ["全部","1601班","1602班"],
      light1: false,
      light2: false,
      light3: false,
      input: '',
    }
  },
  mounted() {

  },
  methods: {
    visibleChange1(val) {
      // val? this.light=true: this.light=false
      this.light1 = val;
    },
    change1(val) {
      console.log(val)
    },
    visibleChange2(val) {
      // val? this.light=true: this.light=false
      this.light2 = val;
    },
    change2(val) {
      console.log(val)
    },
    visibleChange3(val) {
      // val? this.light=true: this.light=false
      this.light3 = val;
    },
    change3(val) {
      console.log(val)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topBox {
    padding: 20px 20px 30px 20px;
    background-color: white;
  }
  .topBox p {
    color: #687178;
    font-size: 12px;
  }
  .selectBox {
    margin: 20px 0;
  }
  .inlineBox {
    display: inline-block;
    margin-right: 20px;
  }
  .lab {
    background-color: #F2F2F2;
    font-size: 14px;
    color: #000000;
    border: 1px solid #dcdfe6;
    border-right: 0;
    border-right: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    display: block;
    width: 60px;
    line-height: 38px;
    text-align: center;
    float: left;
  }
  .el-select {
    width: 120px;
    height: 40px;
    float: left;
  }
  .light {
    border-color: #409EFF;
  }
  .serchBox {
    line-height: 40px;
  }
  .serchBox>div {
    width: 180px;
    display: inline-block;
  }
</style>
