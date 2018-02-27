<template>
  <div class="">
    <!-- 单选题 -->
    <div v-if="topic.caseType=='单选题'" class="danxaun">
      <div class="dxcontainer">
        <p>{{topic.id}}.{{topic.question}}{{topic.caseType}}</p>
        <p v-for="(item,index) in topic.answer" :key="index">
          【{{String.fromCharCode(index+65)}}】{{item}}
        </p>
      </div>
      <div :class="ishide?'':'hideAuxiliaryData'" class="auxiliaryData">
        <el-carousel trigger="click" :autoplay="false" class="fuzhuziliao" height="370px">
          <el-carousel-item v-for="(item,index) in topic.auxiliaryData" :key="index">
            <div class="auxiliaryTop">{{item.name}}<span @click="ishide=false">隐藏</span></div>
            <div class="auxiliaryText">{{item.text}}</div>
            <img :src="item.src" width="480" height="260" style="margin: 0 auto;display:block">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="ctrl" @click="ishide=!ishide">{{ishide?'隐藏':'显示'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exercises',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      ishide: true,
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
            src: '#',
            name: '资料名1'
          },{
            text: '资料阿斯达四大实打实大所',
            src: '#',
            name: '资料名2'
          } 
        ]
      },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .danxaun {
    position: relative;
    width: 100%;
  }
  .ctrl {
    background-color: #002140;
    color: white;
    line-height: 30px;
    padding: 0 20px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-size: 14px;
    z-index: 2;
  }
  .ctrl:hover {
    color: #409EFF;
  }
  .auxiliaryData {
    width: 500px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .5s linear;
    overflow: hidden;
  }
  .hideAuxiliaryData {
    /*display: none;*/
    width: 0;
  }
  .fuzhuziliao {
    font-size: 14px;
  }
  .auxiliaryTop {
    background-color: #002140;
    color: white;
    line-height: 30px;
    position: relative;
    text-indent: 20px;
    width: 500px;
  }
  .auxiliaryTop span {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
  .auxiliaryTop span:hover {
    color: #409EFF;
  }
  .auxiliaryText {
    background: white;
    padding: 12px;
    color: #151E26;
    width: 500px;
  }
  .danxaun .dxcontainer {
    margin-right: 505px;
  }
  .danxaun .dxcontainer p {
    margin-bottom: 16px;
    font-size: 14px;
    color: #151E26;
  }
  .el-carousel__item {
    background: white;
  }
</style>
