<template>
  <approval-common
    title="案件审批"></approval-common>
</template>

<routeMeta>
  {
    title: '案件审批',
    layout: 'layout-default'
  }
</routeMeta>

<script>
import ApprovalCommon from '../components/approval-common/approval-common'
export default {
  name: 'Approval',
  components: {
    ApprovalCommon
  },

  created () {
    const vm = this
    vm.axios.get('/test').then(res => {
      console.log(res)
    })
  },

  data () {
    return {
      show: true,
      overlay: true
    }
  }
}
</script>
