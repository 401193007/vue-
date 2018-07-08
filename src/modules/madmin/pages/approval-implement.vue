<template>
  <approval-common
    title="案件执行审批"></approval-common>
</template>

<routeMeta>
  {
    title: '案件执行审批',
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
  data () {
    return {
      show: true,
      overlay: true
    }
  }
}
</script>