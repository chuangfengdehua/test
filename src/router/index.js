/*
 * @Author: nichao
 * @Date: 2020-03-31 23:58:17
 * @LastEditTime: 2020-04-04 12:16:45
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
