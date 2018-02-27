<template>
  <div class="" style="position:relative">
    <!-- 辅助资料控件 -->
    <div class="auxiliaryDataCtrl">
      <span @click="ishide=!ishide">{{ishide? '隐藏': '显示'}}</span>
      <el-tooltip class="item" effect="dark" content="缩小" placement="top">
        <span @click="auxiliaryDatascale(false)">-</span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="放大" placement="top">
        <span @click="auxiliaryDatascale(true)">+</span>
      </el-tooltip>     
    </div>
    <!-- 辅助资料显示 -->
    <div :class="ishide? '': 'hide'" class="auxiliaryData" :style="{width: thiswidth +'px'}" v-drag="drage">
      <el-carousel trigger="click" :autoplay="false" class="fuzhuziliao" height="370">
        <el-carousel-item v-for="(item,index) in topic.auxiliaryData" :key="index">
          <div class="auxiliaryTop">{{item.name}}</div>
          <div class="auxiliaryText" ref="imgText">{{item.text}}</div>
          <img :src="item.src" class="img" :height="thisheight" :width="thiswidth">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 单选题 -->
    <div v-if="topic.caseType=='单选题'" class="danxaun">
      <div class="dxcontainer">
        <p>{{topic.id}}.{{topic.question}}{{topic.caseType}}</p>
        <p v-for="(item,index) in topic.answer" :key="index">
          【{{String.fromCharCode(index+65)}}】{{item}}
        </p>
        <slot></slot>
      </div>  
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
      truewidth: 500,
      trueheight: 260,
      scale: 1,
    }
  },
  directives: {
    drag: {
      // 指令的定义
      bind: function (el, binding) {
        let oDiv = el;
        oDiv.onmousedown = function(e) {
          e.preventDefault();
          e.stopPropagation()
          let disX = e.clientX - oDiv.offsetLeft;
          let disY = e.clientY - oDiv.offsetTop;
          document.onmousemove = function (e) {
            let _x = e.clientX - disX;
            let _y = e.clientY - disY;
            _x = Math.min(Math.max(_x,0), document.documentElement.clientWidth - oDiv.offsetWidth);
            _y = Math.min(Math.max(_y,0), document.documentElement.clientHeight - oDiv.offsetHeight);
            oDiv.style.left = _x + 'px';
            oDiv.style.top = _y + 'px';
            binding.value({x:e.pageX,y:e.pageY});
          };
          document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }
      }
    }
  },
  methods: {
    auxiliaryDatascale(ctrl) {
      if(ctrl) {
        this.truewidth * (this.scale+.2) > document.documentElement.clientWidth-20 ? '' : this.scale += .2;
      }else {
        this.truewidth * (this.scale-.2) < 300 ? '' : this.scale -= .2;
      }
    },
    drage(val) {
      this.val = val;
    }
  },
  computed: {
    thiswidth() {
      return this.truewidth * this.scale
    },
    thisheight() {
      return this.trueheight * this.scale    
    },
    shuffheight() {
      return ''
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*辅助资料*/
  .auxiliaryDataCtrl {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 3;
  }
  .auxiliaryDataCtrl span {
    cursor: pointer;
    background-color: #002140;
    font-size: 18px;
    color: white;
    display: inline-block;
    line-height: 30px;
    padding: 0 10px;
  }
  .auxiliaryDataCtrl span:first-child {
    font-size: 14px;
  }
  .auxiliaryDataCtrl span:hover {
    color: #409EFF;
  }
  .auxiliaryData {
    position: fixed;
    right: 20px;
    top: 30%;
    overflow: hidden;
    transition: width .5s linear,opacity .5s linear;
    -webkit-transition: width .5s linear,opacity .5s linear;
    z-index: 2;
    cursor: move;
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
  }
  .auxiliaryText {
    background: white;
    padding: 12px;
    color: #151E26;
    transition: all .5s linear;
    -webkit-transition: all .5s linear;
  }
  .auxiliaryData .img {
    margin: 0 auto;
    display: block;
    cursor: pointer;
    transition: all linear .5s;
    -webkit-transition: all linear .5s;
  }
  .ctrl {
    background-color: #002140;
    color: white;
    line-height: 30px;
    padding: 0 10px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-size: 14px;
    z-index: 1;
  }
  .ctrl:hover {
    color: #409EFF;
  }
  .el-carousel__item {
    background: white;
  }
  .hide {
    display: none;
  }
  /*单选样式*/
  .danxaun {
    position: relative;
  } 
  .danxaun .dxcontainer {
    max-width: 840px;
  }
  .danxaun .dxcontainer p {
    margin-bottom: 16px;
    font-size: 14px;
    color: #151E26;
  }
</style>
