<template>
  <div class="">
  	<router-link to="/tizu/teacMarking">阅卷</router-link>
    <router-link to="/tizu/teacPreview">预览题型</router-link>
    <router-link to="/tizu/teacTiZu">预览题组</router-link>
    <router-link to="/tizu/choice_question">预览题型</router-link>
    <router-link to="/tizu/topic">预览题型</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'tizu',
  data () {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
