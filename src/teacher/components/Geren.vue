<template>
  <div class="">
    <div class="topMenu"></div>
    <el-tabs v-model="activeName.activeName" @tab-click="handleClick" tab-position="left">
	    <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
	    <el-tab-pane label="我的消息" name="second">我的消息</el-tab-pane>
	    <el-tab-pane label="资料管理" name="third">资料管理</el-tab-pane>
	    <el-tab-pane label="我的话题" name="fourth">我的话题</el-tab-pane>
	  </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Geren',
  data () {
    return {
      
    }
  },
  mounted() {

  },
  methods: {
    handleClick(tab, event) {
      
    }
  },
  computed: {
  	activeName() {
  		return this.$store.state
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
