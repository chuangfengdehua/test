/*
 * @Author: nichao
 * @Date: 2020-04-05 23:31:14
 * @LastEditTime: 2020-04-06 08:15:42
 */
import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
Vue.use(Vuex)
console.log(new Vuex.Store())
export default new Vuex.Store({
  state: {
    name: 'nichao'
  },
  mutations,
  actions: {},
  getters: {},
  modules: {}
})
