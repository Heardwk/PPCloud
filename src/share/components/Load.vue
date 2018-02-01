<template>
  <div class="" style="position: relative">
    <el-header>
      <div class="head">
        <router-link to="Teacher">教师登录</router-link>
        <router-link to="Student">学生登录</router-link>
      </div>
    </el-header>
    <yuanxiao></yuanxiao>
    <footer>
      <div class="foot">
        <span>帮助</span>
        <span>隐私条款</span>
        <span>版权声明</span>
        <span>Copyright © 2018 中德安普大数据网络科技有限公司</span>
        <a href="http://www.miitbeian.gov.cn">湘ICP备15000989号-1</a>
      </div>
    </footer>
  </div>
</template>

<script>
import yuanxiao from './Yuanxiao'
export default {
  name: 'Load',
  data () {
    return {
      
    }
  },
  components: {
  	yuanxiao,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  width: 960px;
  margin: 0 auto;
  text-align: right;
  background: url('../img/img_logo_index.png') 0 30px no-repeat;
}
.head a {
  color: white;
}
</style>
