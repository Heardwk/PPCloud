/*
* @Author: Administrator
* @Date:   2018-01-29 10:18:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-30 15:52:53
*/
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeName: 'first'
  },
  mutations: {
    add (state,command) {
      state.activeName = command;
    },
  }
})