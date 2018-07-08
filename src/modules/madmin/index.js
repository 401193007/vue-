// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import { VueExtendLayout, layout } from '../../plugins/layout'
import './assets/css/common.css'
import store from './store'

// 全局axios配置
import VueAxios from 'vue-axios'
import axios from './assets/js/http'
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

Vue.use(VueExtendLayout, {layouts: require.context('./layouts', false, /^\.\/.*\.vue$/)})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...layout,
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})
