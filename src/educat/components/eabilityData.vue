<template>
  <div class="">
    <div class="">
      <p><router-link to="/Educat/EAbility">能力档案</router-link>{{personalData.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eabilityData',
  data () {
    return {
      personalData: {
        name: '',
      }
    }
  },
  mounted() {
    this.$store.commit("eabilityshow",false);
    this.personalData.name = localStorage.getItem("eabilityName");
  },
  destroyed() {
    this.$store.commit("eabilityshow",true)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
