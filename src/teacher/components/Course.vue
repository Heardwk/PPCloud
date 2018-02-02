<template>
  <div class="">
    <div class="componentBox">
      <p class="path"><router-link to="/Teacher/Shixun">实训中心</router-link> &gt; {{bookAttr.name}}</p>
      <div class="whiteBox booktop">
        <img :src="bookAttr.src" height="180" width="120" class="bookimg">
        <router-link to="#" class="anli">全真案例</router-link>
        <div class="book">
          <h3>{{bookAttr.name}}</h3>
          <p>{{bookAttr.text}}</p>
          <p class="ico">
            <span class="one">任教班级: {{teac.classone}}</span>
            <span class="two">任教班级: {{teac.classtwo}}</span>
            <span class="three">{{bookAttr.topic}}题</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      bookAttr: {
        name: '没有',
        src: require('../../share/img/image_class_cover.png'),
        text: '文字描述，对课程的简介，描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        topic: 1234
      },
      teac: {
        classone: "暂无",
        classtwo: "暂无",
      }
    }
  },
  mounted() {
    this.$store.commit("shixunshow",false);
    if(this.$route.query.name){
      this.bookAttr.name = this.$route.query.name
    }
  },
  destroyed() {
    this.$store.commit("shixunshow",true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.path {
  color: #687178;
  font-size: 16px;
  font-family: PingFangSC;
  margin-top: 40px;
  margin-bottom: 20px;
}
.whiteBox {
  background: white;
  border-radius: 6px;
  padding: 20px;
  position: relative;
}
.booktop {
  background-image: url('../../share/img/img_class_goto.png');
  background-repeat: no-repeat;
  background-position: 780px 20px;
}
.bookimg {
  position: absolute;
  top: 20px;
  left: 20px;
}
.anli {
  position: absolute;
  right: 40px;
  bottom: 25px;
  width: 120px;
  height: 40px; 
  background: rgba(0,176,255,1);
  background-image: url('../../share/img/icon_class_mouse.png');
  background-repeat: no-repeat;
  background-position: 14px 9px;
  border-radius: 7px;
  font-family: PingFangSC-Regular;
  color: rgba(255,255,255,1);
  line-height: 40px;
  text-indent: 50px;
  font-size: 14px;
}
.book {
  height: 180px;
  margin-left: 140px;
  margin-right: 200px;
  position: relative;
  padding-right: 20px;
  padding: 20px 20px 0 0;
  border-right: 1px solid #EEEEEE;
}
.book h3 {
  font-size: 16px;
  font-family: PingFangSC-Medium;
  color: rgba(66,66,78,1);
  line-height: 20px;
  margin-bottom: 15px;
}
.book p {
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: rgba(104,113,120,1);
  line-height: 20px;
}
.book .ico {
  position: absolute;
  bottom: 0px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: rgba(36,56,71,1);
  line-height: 20px;
}
.book .ico .one {
  padding-left: 50px;
  background: url('../../share/img/icon_setclass_normal.png') 20px 0 no-repeat;
}
.book .ico .two {
  padding-left: 50px;
  background: url('../../share/img/icon_class_classdata_normalcopy.png') 20px 0 no-repeat;
}
.book .ico .three {
  padding-left: 190px;
  background: url('../../share/img/icon_class_count_normal.png') 160px 0 no-repeat;
}
</style>
