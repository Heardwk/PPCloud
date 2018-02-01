<template>
  <div class="">
  	<div class="topMenu"></div>
    <div class="componentBox">
      <p class="boxTitle">最近使用</p>
      <div class="recently">
        <div class="recentlyList" v-for="(item,index) in recentlyData" :key="index">
          <router-link :to="item.url">
            <img :src="item.src" height="180" width="120">
          </router-link>
          <h4><router-link :to="item.url">{{item.name}}</router-link></h4>
          <p>案例数量：{{item.number}}题</p>
          <p>更新时间：{{item.time}}</p>
        </div>
      </div>
    </div>
    <div style="background: white; padding-top: 1px;">
      <div class="componentBox">
        <p class="boxTitle">课程实训</p>
        <div class="boxList">
          <router-link v-for="(item,index) in bookList" :key="index" :to="item.url">
            <div><img :src="item.src" height="180" width="120"></div><h5>{{item.name}}</h5>
          </router-link>
        </div>
        <p class="boxTitle">综合实训</p>
        <div class="boxList">
          <router-link v-for="(item,index) in bookList" :key="index" :to="item.url">
            <div><img :src="item.src" height="180" width="120"></div><h5>{{item.name}}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shixun',
  data () {
    return {
      recentlyData: [
        {
          name: '基础会计',
          number: '3281',
          time: '2017/8/22',
          src: require('../../share/img/image_class_cover.png'),
          url: 'Course'
        },{
          name: '财务管理',
          number: '3281',
          time: '2017/8/22',
          src: require('../../share/img/image_class_cover.png'),
          url: 'Course'
        },{
          name: '初级会计电算化',
          number: '3281',
          time: '2017/8/22',
          src: require('../../share/img/image_class_cover.png'),
          url: 'Course'
        },
      ],
      bookList: [
        {
          url: 'Course',
          src: require('../../share/img/image_class_cover.png'),
          name: '基础会计'
        },{
          url: 'Course',
          src: require('../../share/img/image_class_cover.png'),
          name: '财务管理'
        },{
          url: 'Course',
          src: require('../../share/img/image_class_cover.png'),
          name: '初级会计电算化'
        },{
          url: 'Course',
          src: require('../../share/img/image_class_cover.png'),
          name: '财务管理'
        },
      ]
    }
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componentBox .boxTitle {
  text-indent: 20px;
  color: #243847;
  font-size: 18px;
  margin-top: 50px;
}
.recently {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  margin-top: 25px;
}
.recentlyList {
  width:300px;
  height:220px;
  position: relative;
  border-radius: 8px;
  padding-left: 160px;
  margin-bottom: 50px;
  font-family: PingFangSC;
  color: #FFFFFF;
  box-shadow: 0 6px 16px 0px rgba(0, 0, 0, 0.15);
  background: -webkit-linear-gradient(#D8D1FF, #BAADFF);
  background:    -moz-linear-gradient(#D8D1FF, #BAADFF);
  background:      -o-linear-gradient(#D8D1FF, #BAADFF);
  background:         linear-gradient(#D8D1FF, #BAADFF);
}
.recentlyList:first-child {
  background: -webkit-linear-gradient(#C8EAFC, #96D6FF);
  background:    -moz-linear-gradient(#C8EAFC, #96D6FF);
  background:      -o-linear-gradient(#C8EAFC, #96D6FF);
  background:         linear-gradient(#C8EAFC, #96D6FF);
}
.recentlyList:last-child {
  background: -webkit-linear-gradient(#FFD0D4, #FAA1AD);
  background:    -moz-linear-gradient(#FFD0D4, #FAA1AD);
  background:      -o-linear-gradient(#FFD0D4, #FAA1AD);
  background:         linear-gradient(#FFD0D4, #FAA1AD);
}
.recentlyList a {
  color: white;
}
.recentlyList img {
  position: absolute;
  top: 20px;
  left: 20px;
}
.recentlyList h4 {
  font-size: 16px;
  margin-top: 70px;
  margin-bottom: 30px;
}
.recentlyList p {
  font-size: 12px;
  margin-bottom: 5px;
}
.boxList {
  width: 100%;
  overflow: hidden;
}
.boxList>a {
  display: inline-block;
  margin: 25px 26px 0 26px;
}
.boxList:last-child {
  padding-bottom: 50px;
}
.boxList a div {
  padding: 10px;
  box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.14);
}
.boxList a div:hover {
  box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.4);
}
.boxList h5 {
  text-align: center;
  margin-top: 20px;
  color: #687178;
  font-size: 16px;
}
</style>
