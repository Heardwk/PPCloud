/*
* @Author: Administrator
* @Date:   2018-01-29 10:18:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-09 11:17:30
*/
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: 'http://192.168.1.152:12331/api/',
    TenantId: '1',
    activeName: 'first',
    student:true,
    task:true,
    firstrouter: true,
    secondrouter: true,
    thirdrouter: true,
  },
  mutations: {
    add(state,command) {
      state.activeName = command;
    },
    studentshow (state,val) {
    	state.student = val
    },
    taskshow (state,val) {
      state.task = val
    },
    firstrouterCtrl(state,val) {
      state.firstrouter = val;
    },
    secondrouterCtrl(state,val) {
      state.secondrouter = val;
    },
    thirdrouterCtrl(state,val) {
      state.thirdrouter = val;
    },
  }
})