import Vue from 'vue'
import { BASE_URL } from './config'
import store from '../../store'
// 引入axios
import axios from 'axios'
// 设置axios请求超时时间
axios.defaults.timeout = 5000
/**
 * 请求前拦截
 * @config 请求时候的参数
 */
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.url = BASE_URL + config.url
  store.dispatch('loader', true)
  return config
}, error => {
  // 对请求错误处理
  store.dispatch('loader', false)
  return Promise.reject(error)
})
/**
 * 响应后拦截
 */
axios.interceptors.response.use(data => {
  // 注意模拟延迟
  setTimeout(() => {
    store.dispatch('loader', false)
  }, 2000)
  return data
}, error => {
  store.dispatch('loader', false)
  return Promise.reject(error)
})

export default axios