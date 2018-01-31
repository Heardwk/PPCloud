<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-family: "Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #F8F8F8;
}
div {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
body,dl,dd,h1,h2,h3,h4,h5,h6,p,form {
  margin: 0;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  color: #888888;
  cursor: pointer;
  text-decoration: none;
}
textarea,input,button {
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
header {
  text-align: center;
  line-height: 60px;
  background-color: white;
}
</style>
