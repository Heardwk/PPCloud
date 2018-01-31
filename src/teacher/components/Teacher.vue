<template>
  <div class="">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <router-link 
          v-for="(item,index) in urlData" class="link" 
          :key="index" :to="item.url"
          :data-content="item.name">
          {{item.name}}
        </router-link>
        <el-dropdown placement="bottom" @command="gerenlink">
          <span class="el-dropdown-link">狗剩</span>
          <el-dropdown-menu slot="dropdown" class="dropdownList">
            <el-dropdown-item command="first"><router-link class="droplink" to="Geren">基本信息</router-link></el-dropdown-item>
            <el-dropdown-item command="second"><router-link class="droplink" to="Geren">我的消息</router-link></el-dropdown-item>
            <el-dropdown-item command="third"><router-link class="droplink" to="Geren">资料管理</router-link></el-dropdown-item>
            <el-dropdown-item command=""><router-link class="droplink" to="../Load">退出</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <transition name="" mode="out-in">
          <router-view />
        </transition>
      </el-main>
      <!-- 尾部 -->
      <el-footer>Footer</el-footer>
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
.dropdownList li {
  padding: 0;
}
.droplink {
  display: block;
  padding: 0 20px;
}
</style>
