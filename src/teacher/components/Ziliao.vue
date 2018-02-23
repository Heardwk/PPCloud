<template>
  <div>
    <div class="topMenu"></div>
    <div class="contentBox">
      <div class="contentLeft">
        <p><span class="hasLine">知识点</span></p>
        <div class="scrollL">
          <div v-for="(item,index) in pointList" :key="index" class="chooseList" @click="hasact(index)" :class="{'act': isact === index}">
            <span class="el-icon-tickets"></span>{{item.name}}
          </div>
        </div>
      </div>
      <div class="contentRight">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ziliao',
  data () {
    return {
      isact: 0,
      pointList: [
        {
          id: 0,
          name: '知识点A'
        },{
          id: 1,
          name: '知识点B'
        },{
          id: 2,
          name: '知识点C'
        },{
          id: 3,
          name: '知识点D'
        },{
          id: 4,
          name: '知识点E'
        },
      ],
    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {
    hasact(val) {
      this.isact = val;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contentBox {
    width: 960px;
    margin: 30px auto;
    position: relative;
  }
  .contentLeft {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    font-size: 14px;
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
  .scrollL {
    margin-top: 10px;
    height: 701px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .chooseList {
    padding: 15px;
    font-size: 12px;
    color: #243847;
    border: 1px solid #E9EFF4;
    border-radius: 5px;
    margin-top: 5px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .chooseList:hover, .chooseList.act {
    background-color: #00B0FF;
    color: white;
  }
  .chooseList:hover span, .chooseList.act span {
    color: white;
  }
  .chooseList span {
    font-size: 18px;
    color: #4DA1FF;
    margin-right: 10px;
  }
  .contentRight {
    margin-left: 215px;
    padding: 20px;
    font-size: 14px;
    background-color: white;
    border-radius: 4px;
    height: 770px; 
  }
</style>
