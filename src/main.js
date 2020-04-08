/*
 * @Author: nichao
 * @Date: 2020-03-31 23:58:17
 * @LastEditTime: 2020-04-05 23:47:18
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

require('./mock/index.js') // 引入mock数据
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
