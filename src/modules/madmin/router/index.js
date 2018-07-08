/**
 * Created by Rain on 2018/1/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { Toast } from 'vant'
Vue.use(VueRouter)
import store from '../store'

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes: [<%= _routes %>]
})

router.beforeEach((to, from, next) => {
  // 控制路由的loading
  store.dispatch('loader', true)
  next()
})

router.afterEach((to, from) => {
  // 注意模拟延迟
  setTimeout(() => {
    store.dispatch('loader', false)
  }, 2000)
})

export default router
