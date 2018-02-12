<template>
  <div class="">
    <div class="topBox">
      <p>教学计划</p>
    </div>
    <div v-if="!fileData.length" class="fileBg">
      <p>还没有发布文件哟！<span class="light">发布文件</span></p>
    </div>
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
      fileData: [1,2]
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
    padding-top: 310px;
    height: 500px;
    background-color: white;
    background-image: url('../../share/img/null.png');
    background-repeat: no-repeat;
    background-position: center 100px;
  }
  .fileBg p {
    font-size: 18px;
    text-align: center;
    color: #687178;
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
