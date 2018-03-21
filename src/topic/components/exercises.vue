<template>
  <div class="" style="position:relative">
    <!-- 辅助资料控件 -->
    <div class="auxiliaryDataCtrl">
      <span @click="ishide=!ishide">{{ishide? '隐藏': '显示'}}</span>
      <el-tooltip class="item" effect="dark" content="缩小" placement="top">
        <span @click.prevent="auxiliaryDatascale(false)">-</span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="放大" placement="top">
        <span @click.prevent="auxiliaryDatascale(true)">+</span>
      </el-tooltip>     
    </div>
    <!-- 辅助资料显示 -->
    <div :class="ishide? '': 'hide'" class="auxiliaryData" :style="{width: sizes.w +'px'}" v-drag="drage">
      <div class="auxiliaryTop">{{topic.auxiliaryData.name}}</div>
      <div class="auxiliaryText">{{topic.auxiliaryData.text}}</div>
      <el-carousel trigger="click" :autoplay="false" class="fuzhuziliao" :height="sizes.h+'px'">
        <el-carousel-item v-for="(item,index) in topic.auxiliaryData.imgs" :key="index">
          <img :src="item" class="img" :height="sizes.h" :width="sizes.w">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 单选题 -->
    <div v-if="topic.caseType=='单选题'" class="danxaun">
      <div class="dxcontainer">
        <p>{{topic.id}}.{{topic.question}}{{topic.caseType}}</p>
        <p v-for="(item,index) in topic.answer" :key="index">
          【{{String.fromCharCode(index+65)}}】{{item.content}}
        </p>
        <div class="g_bu">
          <div style="margin-top: 60px"  v-for="(item,index) in topic.answer" :key="index">
              <el-radio @change="radiochange" v-model="radio" :label="item.content" border size="medium">{{String.fromCharCode(index+65)}}</el-radio>          
          </div>
        </div> 
      </div>  
    </div>
    <!-- 多选题 -->
    <div v-if="topic.caseType=='单选题'" class="danxaun">
      <div class="dxcontainer">
        <p>{{topic.id}}.{{topic.question}}{{topic.caseType}}</p>
        <p v-for="(item,index) in topic.answer" :key="index">
          【{{String.fromCharCode(index+65)}}】{{item.content}}
        </p>
        <div class="g_bu">
          <template>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" border :key="city" size="medium">{{city}}</el-checkbox>
            </el-checkbox-group>
            {{checkedCities}}
          </template>
        </div> 
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
      checkAll: false,
      checkedCities: [],
      cities:['上海', '北京'],
      isIndeterminate: true,
      radio:'',
      ishide: true,
      topic: {
        id: 1,
        caseType: '单选题',
        question: '',
        answer: [],
        auxiliaryData: {
          name: '资料名',
          text: '3月3日，副总经理吴涵申请借款3000元，用于购买办公用品，经批准，出纳以现金支付。',
          imgs: ['#','#']
        },
      },
      truewidth: 500,
      trueheight: 260,
      scale: 1,
      aa: 0,
      Single:{},
      topics:[]
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
  mounted(){
    this.GetTtheTitle();
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
    },
    // 获取单选题题目
    GetTtheTitle(){
      this.$http.post(`${this.$store.state.location}/services/app/Question/Get`,
          {
            "version": 1,
            "uniqueId": "47bc282b-0b64-48ee-afc6-5d9d6759c843"
          },{
            headers: {
              "Content-Type": "application/json"
            }
          }).then(response=>{
            this.Single = response.body.result;
            console.log(this.Single)
            // this.topic.question = this.Single.content;
            // this.topic.answer = this.Single.options;
          },response=>{
            console.log("error")
          })  
    },
    radiochange(){
      console.log(this.radio)
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
  computed: {
    sizes() {
      let obj = {};
      obj.w = this.truewidth * this.scale;
      obj.h = this.trueheight * this.scale;
      return obj
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
    z-index: 99;
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
    z-index: 98;
    cursor: move;
  }
  .fuzhuziliao {
    font-size: 14px;
  }
  .auxiliaryTop {
    font-size: 14px;
    background-color: #002140;
    color: white;
    line-height: 30px;
    position: relative;
    text-indent: 20px;
  }
  .auxiliaryText {
    font-size: 14px;
    background: white;
    padding: 12px;
    color: #151E26;
    transition: all .5s linear;
    -webkit-transition: all .5s linear;
  }
  .auxiliaryData .img {
    margin: 0 auto;
    display: block;
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
  .g_bu{
   margin-left: 30px;
   display: flex;
}
.g_bu>button>span{
   color:rgba(104,113,120,1);
}
.g_bu>button{
  color: #D8D8D8;
}
.el-button.is-active, .g_bu>button:active{
   background-color:#7ED321;
   border-color: transparent;
   color: #fff;
}
.g_bu>button:focus{
   background-color:#7ED321;
   border-color: transparent;
   color: #fff;
}
.g_bu>button:hover{
   background-color:#7ED321;
   border-color: transparent;
   color: #fff;
}
.g_bu>button:hover{
   background-color:#7ED321;
   border-color: transparent;
   color: #fff;
}
.g_bu>.el-button--medium{
  padding: 10px 40px;
}
</style>
