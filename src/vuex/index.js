/*
* @Author: Administrator
* @Date:   2018-01-29 10:18:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-05 14:46:46
*/
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeName: 'first',
    shixun: true,
    course: true,
    book: "没有"
  },
  mutations: {
    add(state,command) {
      state.activeName = command;
    },
    shixunshow(state,val) {
    	state.shixun = val;
    },
    setbook(state,val) {
      state.book = val;
    },
    courseshow(state,val) {
      state.course = val;
    }
  }
})