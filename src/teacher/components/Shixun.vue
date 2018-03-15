<template>
  <div class="" style="min-height:100%;background: white">
    <div v-if="shixun.firstrouter" class="feight">
      <div v-if="recentlyData.length>0" class="componentBox">
        <p class="boxTitle">最近使用</p>
        <div style="margin-bottom:20px">
          <router-link class="recentlyList recentlyListTop" tag="div" v-for="(item,index) in recentlyData" 
          :key="index" :to="{ name: 'Course', query: { bookid: item.id, bookname: item.name }}">
            <img :src="item.src" width="100%">
            <div>
              <h4>{{item.name}}</h4>
              <p>{{item.text}}</p>
              <p><i class="el-icon-document"></i>{{item.number}}题<span>{{item.time}}日更新</span></p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="shixun.firstrouter" style="background: white; padding-bottom: 20px;">
      <div class="componentBox" v-for="(item,index) in classType" :key="index">
        <p class="boxTitle">{{item.type}}</p>
        <div>
          <router-link class="recentlyList recentlyListBot" tag="div" v-for="(item,index) in item.bookList" :key="index" :to="{ name: 'Course', query: { bookid: item.id, bookname: item.name }}">
            <img :src="item.src" width="100%">
            <div>
              <h4>{{item.name}}</h4>
              <p><i class="el-icon-document"></i>{{item.number}}题<span>{{item.time}}日更新</span></p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
    
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
          id: 1,
          number: '3281',
          time: '2017/8/22',
          src: require('../../share/img/class_big.png'),
          text: '一套专注于会计基础的课程。'
        },{
          name: '财务管理',
          id: 2,
          number: '3281',
          time: '2017/8/22',
          src: require('../../share/img/class_big.png'),
          text: '一套专注于会计基础的课程。'
        },{
          name: '初级会计电算化',
          id: 3,
          number: '3281',
          time: '2017/8/22',
          src: require('../../share/img/class_big.png'),
          text: '一套专注于会计基础的课程。'
        },
      ],
      classType: [
        {
          type: '课程实训',
          bookList: [
            {
              name: '基础会计',
              id: 1,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '财务管理',
              id: 2,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '初级会计电算化',
              id: 3,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '财务管理',
              id: 2,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },
          ] 
        },
        {
          type: '综合实训',
          bookList: [
            {
              name: '基础会计',
              id: 1,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '财务管理',
              id: 2,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '初级会计电算化',
              id: 3,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '财务管理',
              id: 2,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },
            {
              name: '初级会计电算化',
              id: 3,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },{
              name: '财务管理',
              id: 2,
              number: '3281',
              time: '2017/8/22',
              src: require('../../share/img/calss_small.png'),
            },
          ] 
        },
      ],
      getall: {}
    }
  },
  mounted() {
    this.getAllCourse()
  },
  computed: {
    shixun() {
      return this.$store.state
    }
  },
  methods: {
    getAllCourse() {
      this.$http.post(`${this.$store.state.location}/services/app/Course/GetAll`,
        {
          "published": true,
          "isActive": true,
          "filter": ""
        },{
          headers: {
            "Content-Type": "application/json",
          }
        }).then(response=>{
          this.getall = response.body.result;
        },response=>{
          console.log('error')
        });
    }
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componentBox .boxTitle {
  text-indent: 20px;
  color: #243847;
  font-size: 18px;
  margin-top: 25px;
}
.recentlyListTop {
  width:306px;
  margin-bottom: 50px;
}
.recentlyListTop:nth-child(3n) {
  margin-right: 0;
}
.recentlyListBot {
  width: 224px;
}
.recentlyListBot:nth-child(4n) {
  margin-right: 0;
}
.recentlyList {
  display: inline-block;
  position: relative;
  border-radius: 2px 2px 0 0;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  margin: 25px 20px 5px 0;
}
.recentlyList:hover {
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.09);
}
.recentlyList img {
  display: block;
  border: 0;
  border: none;
  border-radius: 2px 2px 0 0;
}
.recentlyList div {
  padding: 10px 20px 15px 20px;
}
.recentlyList h4 {
  font-size: 16px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, .85);
}
.recentlyList p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
  margin-bottom: 10px;
  position: relative;
}
.recentlyList p:last-child {
  font-size: 12px;
  margin: 0;
}
.el-icon-document {
  margin-right: 5px;
}
.recentlyList p span {
  position: absolute;
  right: 0;
}
</style>
