<template>
  <div class="">
  	<el-container>
      <el-header style="background: white; height: 80px;" class="ww">
        <div class="head">
          <div class="schoolBox">
            {{schoolName}}
          </div>
          <el-dropdown placement="bottom">
            <span class="el-dropdown-link">联系客服</span>
            <el-dropdown-menu slot="dropdown" class="dropdownList">
              <el-dropdown-item><span class="droplink">小云客服</span></el-dropdown-item>
              <el-dropdown-item><span class="droplink">0731-85219848-8009</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          |
          <el-dropdown placement="bottom">
            <span class="el-dropdown-link">狗剩</span>
            <el-dropdown-menu slot="dropdown" class="dropdownList">
              <el-dropdown-item><span class="droplink">基本信息</span></el-dropdown-item>
              <el-dropdown-item><router-link class="droplink" to="/Load">退出</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <div style="height: 80px;"></div>
      <el-container class="ww">
        <el-aside width="200px" style="padding-top: 20px; background: #001529; min-height: 100%;">
          <router-link 
            v-for="(item,index) in linkList" 
            :to="item.link" :key="index"
            class="roLink" 
            @click.native="goto(index)"
            :class="{'active': activeId===index}">
            <span :class="item.icon"></span>
            {{item.name}}
          </router-link>
        </el-aside>
        <el-main>
        	<router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Educat',
  data () {
    return {
      schoolName: "湖南外贸职业学院",
      activeId: 0,
      linkList: [
        {
          link: '/Educat/Monitor',
          icon: 'el-icon-view',
          name: '实训监控'
        },
        {
          link: '/Educat/Teaching',
          icon: '',
          name: '任教管理'
        },
        {
          link: '/Educat/Plan',
          icon: '',
          name: '教学计划'
        },
        {
          link: '/Educat/Account',
          icon: '',
          name: '账号管理'
        },
        {
          link: '/Educat/EAbility',
          icon: '',
          name: '能力档案'
        },
        {
          link: '/Educat/Manaportal',
          icon: '',
          name: '门户管理'
        },
        {
          link: '/Educat/Usermsg',
          icon: '',
          name: '个人信息'
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
    goto(val) {
      this.activeId = val;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-dropdown {
  margin: 0 5px;
}
.dropdownList li {
  padding: 0;
}
.droplink {
  display: block;
  padding: 0 20px;
  font-size: 14px;
  color: #678178;
}
.head {
  text-align: right;
  position: relative;
  color: #678178;
}
.schoolBox {
  position: absolute;
  padding-left: 70px;
  color: #283A48;
  font-size: 20px;
  background-image: url('../../share/img/School.png');
  background-repeat: no-repeat;
  background-position: 0 center;
}
.ww {
  min-width: 960px;
}
.roLink {
  display: block;
  line-height: 54px;
  text-align: center;
  color: #FFFFFF;
  font-size: 14px;
}
.active {
  background: rgba(0,176,255,0.3);
}
</style>
