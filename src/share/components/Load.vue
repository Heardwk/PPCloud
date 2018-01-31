<template>
  <div class="">
    <el-header>
      <router-link to="Teacher">教师登录</router-link>
      <router-link to="Student">学生登录</router-link>
    </el-header>
    <yuanxiao></yuanxiao>
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

</style>
