<template>
  <div class="">
    <div class="titleBox">
      <h3>{{topic.classType}}{{topic.tizuName}}</h3>
    </div>
  </div>
</template>

<script>
import exercises from './exercises'
export default {
  name: 'teacTiZu',
  data () {
    return {
      topic: {
        id: 1,
        caseType: '单选题',
        classType: '基础会计',
        tizuName: '题组一',
        classify: '错账更正 > 划线更正法概念 > 适用范围和操作要求',
        caseCount: 16,
        question: '下列各种情况中会导致企业折价发行债券的是下列各种情况中会导致企业折价发行债券的是，下列各种情况中会导致企业折价发行债券的是( )。',
        answer: ["债券的票面利率大于市场利率。","债券的票面利率等于市场利率","债券的票面利率小于市场利率","以上都不对"],
        auxiliaryData: [
          {
            text: '3月3日，副总经理吴涵申请借款3000元，用于购买办公用品，经批准，出纳以现金支付。',
            src: '#'
          },{
            text: '3月3日，副总经理吴涵申请借款3000元，用于购买办公用品，经批准，出纳以现金支付。',
            src: '#'
          } 
        ]
      }
    }
  },
  components: {
    exercises
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titleBox {
    padding: 10px 25px;
    background-color: #002140;
    color: white;
  }
  .titleBox h3 {
    font-size: 16px;
    font-weight: 100;
  }
</style>
