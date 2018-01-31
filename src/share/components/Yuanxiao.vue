<template>
  <div class="">
  	<div>banner</div>
  	<el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane label="通知公告" name="first">通知公告</el-tab-pane>
	    <el-tab-pane label="实训资讯" name="second">实训资讯</el-tab-pane>
	  </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Yuanxiao',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
  	handleClick(tab,events){
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
