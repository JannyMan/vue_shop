/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { Datetime, Group } from 'vux'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
import global_ from './../static/global'
Vue.use(VueJsonp)
Vue.use(Vuex)
Vue.component(Datetime.name, Datetime)
Vue.component(Group.name, Group)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.GLOBAL = global_;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
const store = new Vuex.Store({
  state: {
    counts: 0
  },
  mutations: {
    increment (state) {
      state.counts++
    }
  }
});