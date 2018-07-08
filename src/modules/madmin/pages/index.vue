<template>
  <div class="container">
    <h2 class="demo-block__title">代办</h2>
    <van-cell-group>
      <van-cell title="案件审批" is-link to="/approval" />
      <van-cell title="案件执行审批" is-link to="/approval-implement" />
    </van-cell-group>
  </div>
</template>

<routeMeta>
  {
    title: '首页',
    layout: 'layout-default'
  }
</routeMeta>

<script>
import { Cell, CellGroup } from 'vant'

export default {
  name: 'Index',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-block__title {
    text-align: left;
    margin:0;
    font-size: 14px;
    color:rgba(69,90,100,.6);
    padding:40px 15px 15px;
    font-weight:400;
  }
</style>
