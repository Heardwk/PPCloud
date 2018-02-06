<template>
  <div class="">
    <p class="path">
      <router-link to="/Teacher/Shixun">实训中心</router-link> &gt;
      <router-link to="/Teacher/Shixun/Course">{{bookName}}</router-link> &gt;
      快速创建题组
    </p>
    <div class="headBox">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="选择知识点"></el-step>
        <el-step title="调整题型"></el-step>
        <el-step title="题组参数"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <p v-if="showBox[0]"><span class="el-icon-info"></span>请在左边的树形列表中勾选题组所涉及的知识点。</p>
      <p v-if="showBox[1]"><span class="el-icon-info"></span>可在下表中调整题组所涉题型的数量及每个题型的单题分值。</p>
      <p v-if="showBox[2]"><span class="el-icon-info"></span>可在下表中调整题组所涉题型的数量及每个题型的单题分值。</p>
      <p v-if="showBox[3]"><span class="el-icon-info"></span>收获创建成功的喜悦！</p>
    </div>
    <div v-if="showBox[0]" class="pointBox">
      <div class="leftContent">
        <p>
          <span class="hasLine">知识点</span>
          <el-input
            class="serch"
            placeholder="关键字搜索"
            v-model="filterText">
          </el-input>
        </p>
        <el-tree
          class="tree"
          :props="defaultProps"
          :data="dataList"
          node-key="id"
          show-checkbox
          ref="tree"
          :filter-node-method="filterNode"
          :accordion = "isAccordion"
          @check-change="handleCheckChange">
        </el-tree>
      </div>
      <div class="rightContent">
        <p><span class="hasLine">已选知识点</span></p>
        <div style="border-bottom: 1px solid #EEEEEE;min-height:350px;margin-top: 20px;">
          <span v-for="(item,index) in ckeckList" :key="index">{{item}}</span>
          <div v-if="checkTree.length>0">
            <el-tag
              v-for="item in checkTree"
              :key="item.id"
              @close="handleClose(item)"
              closable>
              {{item.label}}
            </el-tag>
          </div>
        </div>
        <p class="all">
          <span class="el-icon-info"></span>
          已选择<span class="light">{{title.point}}</span>个知识点，
          共计<span class="light">{{title.count}}</span>个案例，您可以在下一个步骤调整具体的题型及数量
        </p>
        <div class="btnBox">
          <el-button @click="active">取 消</el-button>
          <el-button @click="active++" type="primary">下一步</el-button>
        </div>
      </div>
    </div>
    <div v-if="showBox[1]" class="contentBox">
      <p><span class="hasLine">已选题型及数量</span></p>
      <div style="border-bottom: 1px solid #EEEEEE;min-height:350px;margin-top: 20px;">
        
      </div>
      <p class="all">
        <span class="el-icon-info"></span>
        已选择<span class="light">{{title.point}}</span>个知识点，
        共计<span class="light">{{title.count}}</span>个案例，
        累计总分<span class="light">{{allCount}}</span>分，创建完成后，您可以随时调整这些参数。
      </p>
      <div class="btnBox">
        <el-button @click="active--">上一步</el-button>
        <el-button @click="active++" type="primary">下一步</el-button>
      </div>
    </div>
    <div v-if="showBox[2]" class="contentBox">
      <p><span class="hasLine">设置题组基本信息</span></p>
      <div style="border-bottom: 1px solid #EEEEEE;min-height:350px;margin-top: 20px;">
        基本信息
      </div>
      <p class="all"><span class="el-icon-info"></span>设置个性的名称和备注，以便更快速的找到目标题组。</p>
      <div class="btnBox">
        <el-button @click="active--">上一步</el-button>
        <el-button @click="active++" type="primary">下一步</el-button>
      </div>
    </div>
    <div v-if="showBox[3]" class="contentBox">
     <div style="border-bottom: 1px solid #EEEEEE;min-height:369px;margin-top: 20px;">
       完成
     </div>
      <p class="all"><span class="el-icon-info"></span>完成后可以将立即将题组中的题目作为任务推送给学习进行练习。</p>
       <div class="btnBox">
          <el-button @click="active--">上一步</el-button>
          <el-button @click="active" type="primary">完成</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addProblemSet',
  data () {
    return {
      bookName: '',
      active: 0,
      isAccordion: true,
      defaultProps: {
        label: 'label',
        children: 'children'
      },
      checkTree: [],
      filterText: '',
      dataList: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1三级'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
            children: [{
              id: 10,
              label: '三级 2-1-1'
            }]
          }, {
            id: 6,
            label: '二级 2-2',
            children: [{
              id: 11,
              label: '三级 2-2-1'
            }]
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1',
            children: [{
              id: 12,
              label: '三级 3-1-1'
            }]
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
              id: 13,
              label: '三级 3-2-1'
            }]
          }]
        }
      ],
      ckeckList: [],
      tixing: [
        {
          type: '选择题',
          count: 0,
          point: 0
        },{
          type: "多选题",
          count: 0,
          point: 0
        },{
          type: "判断题",
          count: 0,
          point: 0
        },{
          type: "综合题",
          count: 0,
          point: 0
        },
      ]
    }
  },
  mounted() {
    this.$store.commit("courseshow",false);
    this.bookName = localStorage.getItem("bookName");
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      // if(checked) {
      //   this.ckeckList.push(data.label);
      // }

      // 所有被选中的
      this.checkTree = this.$refs.tree.getCheckedNodes();
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleClose(item) {
      this.checkTree.splice(this.checkTree.indexOf(item), 1);
      this.$refs.tree.setCheckedNodes(this.checkTree);
    }
  },
  computed: {
    showBox() {
      let arr = [false,false,false,false];
      arr[this.active] = true;
      return arr;
    },
    title() {
      return {point:5, count:150}
    },
    allCount() {
      let count = 0;
      for(let i=0; i<this.tixing.length; i++){
        count+=this.tixing[i].point;
      }
      return count
    }
  },
  destroyed() {
    this.$store.commit("courseshow",true)
  },

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
.headBox {
  padding: 20px 0;
  background-color: white;
  border-radius: 4px;
}
.headBox p {
  color: #687178;
  font-family: PingFangSC;
  font-size: 12px;
  padding: 20px 50px 0 50px;
}
.headBox p span {
  color: #1890FF;
  margin-right: 5px;
}
.pointBox {
  margin-top: 20px;
  position: relative;
  min-height: 600px;
}
.hasLine {
  color: #243847;
  position: relative;
  padding: 0 0 10px 0;
}
.hasLine::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #00B0FF;
  border-radius: 11px;
}
.leftContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 255px;
  height: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  font-size: 14px;
}
.el-input {
  display: inline-block;
  width: 135px;
  font-size: 12px;
  margin-left: 30px;
}
.tree {
  margin-top: 10px;
  height: 530px;
  overflow-y: auto;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}
.rightContent {
  margin-left: 275px;
  padding: 20px;
  font-size: 14px;
  background-color: white;
  border-radius: 4px;  
}
.el-tag {
  margin: 0 20px 20px 0;
}
.all {
  color: #687178;
  margin-top: 5px
}
.all .el-icon-info {
  color: #1890FF;
  margin: 0 5px 0 20px;
}
.all .light {
  color: #00B0FF;
}
.btnBox {
  padding: 30px 70px 10px 0px;
  text-align: right;  
}
.btnBox button {
  margin-left: 20px;
  height: 35px;
  line-height: 35px;
  width: 95px;
  padding: 0;
  display: inline-block;
}
.contentBox {
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  font-size: 14px;
}
</style>
