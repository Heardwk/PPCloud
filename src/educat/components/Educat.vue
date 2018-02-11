<template>
  <div class="">
  	教务端
  	<router-link to="/Educat/Teaching">任教管理</router-link>
  	<router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Educat',
  data () {
    return {
      
    }
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
