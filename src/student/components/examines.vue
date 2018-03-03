 <template>
	 <div>
      <div class="content">
        <div class="task_content">
           <div style="width:960px;margin:0 auto;">
            <div class="nav">
    	   	   <el-breadcrumb separator="/">
    				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    				  <el-breadcrumb-item>我的任务</el-breadcrumb-item>
    				  <el-breadcrumb-item>基本会计</el-breadcrumb-item>
    				</el-breadcrumb>
	   	    </div>
          <div class="whiteBox booktop">
            <img :src="bookAttr.src" height="78" width="130" class="bookimg">
            <div class="book">
              <h3>{{Eattr.listName}}</h3>
              <p>{{bookAttr.text}}</p>
            </div>
          </div>
       </div>
     </div>
    </div>
	 </div>
</template>
<script>
  export default {
    name:"examines",
    data() {
      return {
          Eattr:{
            listImg:'获取数据失败',
            listId:'获取数据失败',
            listName:'获取数据失败',
            },
            bookAttr: {
              name: '没有',
              src: require('../../share/img/image_class_cover.png'),
              text: '文字描述，对课程的简',
              topic: 1234
            },
           teac: {
          classone: ["暂无"],
          classtwo: "暂无",
        },
      }
    },
   mounted () {
       this.$store.commit("taskshow",false);
   },
   destroyed() {
      this.$store.commit("taskshow",true)
    },
  };
</script>

<style scoped>
.task_content{
    border-bottom: 2px solid #FAFAFA;
    background: rgba(255,255,255,1);
    margin-bottom: 50px;
}
.content{
    min-height: 700px;
    margin: 0 auto;
}
.whiteBox {
  background: white;
  position: relative;
  display: flex;
}
.booktop {
  background-position: 780px 20px;
  border:1px solid red;
  padding: 5px;
}
.book {
  margin-left: 20px;
  width: 350px;
  position: relative;
  padding-right: 20px;
  padding: 0px 0px 0 0;
  border-right: 1px solid #EEEEEE;
}
.book h3 {
  height:22px; 
  font-size:14px;
  font-family:PingFangSC-Medium;
  color:rgba(0,0,0,0.65);
  line-height:22px;
}
.book p {
  margin-top: 15px;
  width: 326px;
  height:22px; 
  font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(0,0,0,0.65);
  line-height:22px;
}
.book .ico {
  position: absolute;
  bottom: 0px;
  font-size: 14px;
  color: rgba(36,56,71,1);
  line-height: 20px;
  display: block;
  width: 100%;
  padding-right: 120px;
}
.book .ico>span {
  padding-left: 35px;
  line-height: 25px;
  margin-right: 5px;
  height: 25px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 7px 3px;
  color:rgba(0,0,0,0.45);
}
.book .ico .one {
  background-image: url('../../share/img/icon_class_classdata_normalcopy.png');
  color: #00B0FF;
  font-size:14px;
  font-family:PingFangSC-Regular;
  line-height:27px;
}
.book .ico .three {
  position: absolute;
  right: 25px;
  top: 0;
  background-image: url('../../share/img/icon_class_count_normal.png');
}
.upload{
    width:90px;
  height:20px; 
  background:rgba(0,0,0,0.2);
  border-radius: 8px ;
  position: absolute;
  top: 0px;
  right: 25px;
  font-size:12px;
  font-family:HelveticaNeue;
  color:rgba(255,255,255,1);
  text-align: center;
  line-height: 20px;
}
.book .ico {
  position: absolute;
  bottom: 0px;
  font-size: 14px;
  color: rgba(36,56,71,1);
  line-height: 20px;
  display: block;
  width: 100%;
  padding-right: 120px;
}
.book .ico>span {
  padding-left: 35px;
  line-height: 25px;
  margin-right: 5px;
  height: 25px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 7px 3px;
  color:rgba(0,0,0,0.45);
}
.book .ico .one {
  background-image: url('../../share/img/icon_class_classdata_normalcopy.png');
  color: #00B0FF;
  font-size:14px;
  font-family:PingFangSC-Regular;
  line-height:27px;
}
.book .ico .three {
  position: absolute;
  right: 25px;
  top: 0;
  background-image: url('../../share/img/icon_class_count_normal.png');
}
.nav{
  font-size:14px;
  font-family:PingFangSC-Regular;
  color:rgba(0,0,0,0.45);
  line-height:22px;
  margin: 30px 0px;
}
.Basic_content{
  border-bottom: 2px solid #FAFAFA;
  background:rgba(255,255,255,1);
  margin-bottom: 50px;
}
.nav .el-breadcrumb__inner, .el-breadcrumb__inner a{
  display: inline-block; 
  color:rgba(0,0,0,0.45);
}
</style>