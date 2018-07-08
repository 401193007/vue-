<template>
  <table class="tc-table">
    <thead>
      <tr>
        <th v-for="title in titles">{{title | formatTitle}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in content">
        <!-- 对应表头顺序 -->
        <template v-for="(title, index) in titles">
          <td v-if="title !== 'enclosure'">{{ row[title]? row[title]: null | formatVal}}</td>
          <td v-else><a :href="row[title]">附件</a></td>
        </template>
      </tr>
    </tbody>
  </table> 
</template>

<script>
  export default {
    props: {
      /**
       * [executeType description]
       * 执行类型
       * 强制更名：rename，
       */
      executeType: {
        type: String
      },
      /**
       * [describe description]
       * 执行描述
       */
      describe: {
        type: Object
      }
    },
    
    computed: {
      titles () {
        return Object.assign([], this.describe.title)   // 深拷贝
      },
      content () {
        return Object.assign([], this.describe.content)   
      }
    },

    // 注意filters不能获取this上下文
    filters: {
      // 格式化标题
      formatTitle (val) {
        switch (val) {
          case 'describe': {
            return ''
          }
          case 'name': {
            return '姓名'
          }
          case 'sex': {
            return '性别'
          }
          case 'credentialsType': {
            return '证件类型'
          }
          case 'credentialsNumber': {
            return '证件号码'
          }
          case 'degrade': {
            return '降级为'
          }
          case 'enclosure': {
            return '附件'
          }
        }
      },

      // 格式化值
      formatVal (val) {
        switch (val) {
          // 工种部分
          case 'saleMan': {
            return '业务员'
          }
          case 'manager': {
            return '经理'
          }

          // 性别部分
          case 'male': {
            return '男'
          }
          case 'female': {
            return '女'
          }

          // 默认
          default: {
            return val
          }
        }
      }
    }
  }
</script>

<style scoped>
  .tc-table {
    line-height: 1.6;
    border-collapse:collapse;
    word-break: break-all;
    font-size: 13px;
  }
  .tc-table td,.tc-table th {
    text-align:center;
    border:1px solid #e6e6e6;
  } 
</style>