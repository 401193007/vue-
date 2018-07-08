import Vue from 'vue'
import { Toast, Dialog } from 'vant'
Vue.use(Toast)
Vue.use(Dialog)

// vant插件，全局使用
export const vantPlugins = {
  computed: {
    showLoading () {
      return this.$store.state.vantModule.showLoading
    }
  },

  watch: {
    showLoading (val) {
      const vm = this
      if (!val) {
        vm.closeLoading()
      } else {
        vm.loading()
      }
    }
  },

  methods: {
    // 公用loading
    loading (text = '加载中...') {
      this.$toast({
        type: 'loading',
        message: text,
        mask: true
      })      
    },

    closeLoading () {
      Toast.clear()
    },

    // 公用确认弹窗
    dialog (content, cb, title = '提示', type = 'confirm') {
      const vm = this
      vm.$dialog[type]({
        title,
        message: content
      }).then(() => {
        cb()
      })
    },

    closeDialog () {
      this.$dialog.close()
    },
    
    // 公用提示
    toast (text, type = 'text', mask = false) {
      return () => this.$toast(text)
    }
  }
}

// 全局表单验证函数
export const formValid = {
  methods: {
    // 验证是否为空
    checkNull (value, cb) {
      if (value.trim() === '' || !value) {
        typeof cb === 'function' && cb()
        return false
      } else {
        return true
      }
    }
  }
} 

