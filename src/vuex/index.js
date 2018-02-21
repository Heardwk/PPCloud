/*
* @Author: Administrator
* @Date:   2018-01-29 10:18:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-21 09:58:08
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
    student:true,
    eability: true,
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
    eabilityshow(state,val) {
      state.eability = val;
    },
  }
})