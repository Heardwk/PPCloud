/*
* @Author: Administrator
* @Date:   2018-01-29 10:18:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-13 11:29:55
*/
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeName: 'first',
    shixun: true,
    course: true,
    allcase: true,
    plan: true,
    student:true
  },
  mutations: {
    add(state,command) {
      state.activeName = command;
    },
    shixunshow(state,val) {
    	state.shixun = val;
    },
    courseshow(state,val) {
      state.course = val;
    },
    allcaseshow(state,val) {
      state.allcase = val;
    },
    planshow(state,val) {
      state.plan = val;
    },
    studentshow (state,val) {
    	state.student = val
    },
  }
})