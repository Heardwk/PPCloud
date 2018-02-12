<template>
  <div class="">
    <div class="topBox">
      <p>教学计划</p>
    </div>
    <div v-if="!fileData.length" class="fileBg"></div>
    <div v-if="fileData.length">
      <div class="fileTop">
        <p>已上传<span class="light">{{fileData.length}}</span>个文件</p>
      </div>
      <div class="fileList"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  data () {
    return {
      fileData: []
    }
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .light {
    color: #0094FF;
  }
  .topBox {
    margin-top: 1px;
    background: white;
    padding: 20px;
  }
  .topBox p {
    color: #687178;
    font-size: 12px;
    line-height: 23px;
  }
  .fileBg {
    height: 500px;
    background-color: white;
  }
  .fileTop {
    padding: 20px;
    background: white;
    font-size: 12px;
    color: #687178;
  }
  .fileList {
    border-top: 10px solid #F8F8F8;
    padding: 20px;
    background: white;
  }
</style>
