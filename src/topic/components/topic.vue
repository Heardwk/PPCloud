<template>
  <div class="">
  	<router-link to="/topic/teacMarking">阅卷</router-link>
    <router-link to="/topic/teacPreview">预览题型</router-link>
    <router-link to="/topic/teacTiZu">预览题组</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'topic',
  data () {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
