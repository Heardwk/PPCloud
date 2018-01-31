// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './vuex'
import router from './router'
import animate from 'animate.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(animate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h =>h(App)
})
