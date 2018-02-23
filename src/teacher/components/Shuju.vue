<template>
  <div class="">
    <div class="topMenu"></div>
    <div style="background: white;border-bottom: 1px solid #EEEEEE;padding: 20px 0;">
      <div class="topBox">
        <div>
          <span>课程实训</span>
          <el-select v-model="value" placeholder="基础会计">
            <el-option
              v-for="(item,index) in course"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div>
          <span>任教时间</span>
          <el-select v-model="value" placeholder="2017-2018年上学期">
            <el-option
              v-for="(item,index) in teacTime"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div>
          <span>任务名称</span>
          <el-select v-model="value" placeholder="基础会计第四周摸底测试">
            <el-option
              v-for="(item,index) in taskName"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shuju',
  data () {
    return {
      course: ['基础会计','财务会计'],
      teacTime: ['2017-2018年上学期','2017-2018年下学期'],
      taskName: ['基础会计第四周摸底测试','基础会计第一周摸底测试']
    }
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topBox {
    width: 960px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .topBox>div>span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
</style>
