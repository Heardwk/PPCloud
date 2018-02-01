<template>
  <div class="">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="head">
          <router-link to='Yuanxiao' class="logo colo"></router-link>
          <router-link 
            v-for="(item,index) in urlData" class="link colo" 
            :key="index" :to="item.url"
            :data-content="item.name">
            {{item.name}}
          </router-link>
          <el-dropdown placement="bottom" @command="gerenlink" class="user colo">
            <span class="el-dropdown-link">狗剩</span>
            <el-dropdown-menu slot="dropdown" class="dropdownList">
              <el-dropdown-item command="first"><router-link class="droplink" to="Geren">基本信息</router-link></el-dropdown-item>
              <el-dropdown-item command="second"><router-link class="droplink" to="Geren">我的消息</router-link></el-dropdown-item>
              <el-dropdown-item command="third"><router-link class="droplink" to="Geren">资料管理</router-link></el-dropdown-item>
              <el-dropdown-item command=""><router-link class="droplink" to="../Load">退出</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <transition name="" mode="out-in">
          <router-view />
        </transition>
      </el-main>
      <!-- 尾部 -->
      <footer>
        <div class="foot">
          <span>帮助</span>
          <span>隐私条款</span>
          <span>版权声明</span>
          <span>Copyright © 2018 中德安普大数据网络科技有限公司</span>
          <a href="http://www.miitbeian.gov.cn">湘ICP备15000989号-1</a>
        </div>
      </footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Teacher',
  data () {
    return {
      urlData:[
        {
          name: '实训中心',
          url: 'Shixun'
        },{
          name: '任务管理',
          url: 'Renwu'
        },{
          name: '数据分析',
          url: 'Shuju'
        },{
          name: '能力档案',
          url: 'Ability'
        },{
          name: '资料共享',
          url: 'Ziliao'
        }
      ]
    }
  },
  created() {

  },
  methods: {
    gerenlink(command) {
      if(command) {
        if(command){
          this.$store.commit("add",command)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  height: 
}
.dropdownList li {
  padding: 0;
}
.droplink {
  display: block;
  padding: 0 20px;
}
.head {
  width: 960px;
  margin: 0 auto;
  text-align: left;
  position: relative;
}
.head .link {
  margin: 0 15px;
  font-size: 18px;
}
.head .logo {
  position: absolute;
  width: 165px;
  height: 40px;
  top: 30px;
  background: url('../../share/img/img_logo1_index.png') no-repeat;
}
.head .logoW {
  background: url('../../share/img/img_logo_index.png') no-repeat;
}
.head .link:nth-child(2) {
  margin-left: 325px;
}
.head .link:hover,.head .router-link-active {
  color: #00B0FF;
}
.user {
  margin-left: 73px;
  top: -1px;
}
.user .el-dropdown-link {
  font-size: 16px;
}
</style>
