// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router/index'
import './common/css/reset.css'
import axios from 'axios'
import 'mint-ui/lib/style.min.css'
import 'font-awesome/css/font-awesome.min.css'
import mintui from 'mint-ui'
import store from './store/index'
Vue.use(mintui)

import {Lazyload} from 'mint-ui'

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('./assets/img/jzsb.jpeg'),
  loading: require('./assets/img/jzz.gif'),
  attempt: 1,
  observe: true
})
Vue.prototype.$ajax = axios
import Router from 'vue-router'
Vue.use(Router)
Vue.use(store)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
