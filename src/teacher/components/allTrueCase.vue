<template>
  <div class="">
    <p class="path">
      <router-link to="/Teacher/Shixun">实训中心</router-link> &gt;
      <router-link to="/Teacher/Shixun/Course">{{bookName}}</router-link> &gt;
      全真案例
    </p>
  </div>
</template>

<script>
export default {
  name: 'allTrueCase',
  data () {
    return {
      bookName: ''
    }
  },
  mounted() {
    this.$store.commit("courseshow",false);
    this.bookName = localStorage.getItem("bookName");
  },
  destroyed() {
    this.$store.commit("courseshow",true)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .path {
    color: #687178;
    font-size: 16px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
</style>
