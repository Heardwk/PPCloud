<template>
  <div class="">
    <div class="titleBox">
      <h3>{{topic.classType}}</h3>
      <p>{{topic.classify}}<span>案例数量：(1/{{topic.caseCount}})</span></p>
    </div>
    <div class="ctrlBox">
      <span @click="chakandaan">查看答案</span>
      <span @click="daanjiexi">答案解析</span>
      <span @click="jisaunqi">计算器</span>
      <span @click="next" class="right">上一题</span>
      <span @click="prev">下一题</span>
    </div>
    <div class="timu">
      <exercises :id="topic.id"></exercises>
    </div>
  </div>
</template>

<script>
import exercises from './exercises'
export default {
  name: 'teacPreview',
  data () {
    return {
      topic: {
        id: 1,
        caseType: '单选题',
        classType: '基础会计',
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
  methods: {
    chakandaan() {

    },
    daanjiexi() {

    },
    jisaunqi() {

    },
    next() {

    },
    prev() {

    },
  },
  components: {
    exercises
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titleBox {
    padding: 15px;
    background-color: #002140;
    color: white;
  }
  .titleBox h3 {
    font-size: 18px;
    font-weight: 100;
  }
  .titleBox p {
    margin-top: 8px;
    font-size: 14px; 
  }
  .titleBox p span {
    margin-left: 35px;
  }
  .ctrlBox {
    background-color: white;
    position: relative;
    padding: 10px 20px;
  }
  .ctrlBox span {
    width: 80px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    border: 1px solid #EEEEEE;
    font-size: 12px;
    cursor: pointer;
    transition: all linear .3s;
    margin-right: 10px;
  }
  .ctrlBox span:hover {
    border-color: #C6E2FF;
    background-color: #ECF5FF;
    color: #409EFF;
  }
  .ctrlBox .right {
    position: absolute;
    right: 105px;
  }
  .ctrlBox span:last-child {
    position: absolute;
    right: 10px;
  }
  .timu {
    padding: 20px;
  }
</style>
