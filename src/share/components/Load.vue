<template>
  <div class="" style="position: relative">
    <div class="loadBox" v-if="show"><dialogs @dialog="dialog"></dialogs></div>
    <el-header>
      <div class="head">
        <router-link to="/Teacher">教师登录</router-link>
        <router-link to="/Student">学生登录</router-link>
        <router-link to="/Educat">教务登录</router-link>
        <router-link to="/tizu" target="_blank">题组</router-link>
        <button @click="loading">登录</button>
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
import dialogs from './dialogs'
export default {
  name: 'Load',
  data () {
    return {
      show: false,
      sessionData: {}
    }
  },
  methods: {
    loading() {
      this.show = true
    },
    dialog(msg) {
      if(msg) {
        this.$http.post(`${this.$store.state.location}services/app/Session/GetCurrentLoginInformations`, 
        {}, 
        {headers: {
          "Content-Type": "application/json",
          "Athena-TenantId": this.$store.state.TenantId,
          'Authorization': localStorage.token
        }}).then(response => {
          this.sessionData = response.body.result;
          console.log(this.sessionData.user.roles[0]);
          if(this.sessionData.user.roles[0]=="Teacher") {
            window.location.href = '#/Teacher'
          }else if(this.sessionData.user.roles[0]=="Student") {
            window.location.href = '#/Student'
          }else if(this.sessionData.user.roles[0]=="Admin") {
            window.location.href = '#/Load'
          }else {
            window.location.href = '#/Educat'
          }     
          this.$message({message: '登录成功',type: 'success',duration: 1000});
          this.show = false
        },response => {
          this.$message.error({message:'登录超时！',duration: 1000});
        });
      }else {    
        this.show = false
      }
    }
  },
  components: {
  	yuanxiao,dialogs,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  width: 960px;
  margin: 0 auto;
  text-align: right;
  background: url('../img/logo_Light.png') 0 20px no-repeat;
}
.head a {
  color: white;
}
.loadBox {
  position: relative;
  z-index: 1000;
}
</style>
