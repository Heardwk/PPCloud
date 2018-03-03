/*
* @Author: Administrator
* @Date:   2018-01-29 10:18:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-02 12:06:23
*/
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: 'http://192.168.1.152:12331/api/',
    TenantId: '1',
    activeName: 'first',
    shixun: true,
    course: true,
    allcase: true,
    plan: true,
    student:true,
    task:true,
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
    taskshow (state,val) {
      state.task = val
    },
    eabilityshow(state,val) {
      state.eability = val;
    },
  }
})