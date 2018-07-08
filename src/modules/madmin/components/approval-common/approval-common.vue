<template>
  <div class="wrap">
    <van-nav-bar
      fixed
      :title="title"
      left-text="返回"
      left-arrow 
      @click-left="onClickLeft"/>
    
    <div class="container">
      <div class="form-preview list bottom-line">
        <div class="preview-hd">
          <label>案件流程：</label>
          <div class="preview-value">
            <p>分公司案件管理流程（主）</p>
          </div>
        </div>
        <div class="preview-hd">
          <label>案件编号：</label>
          <div class="preview-value">
            <p>201702104</p>
          </div>
        </div>
        <div class="preview-hd">
          <label>经办信息：</label>
          <div class="preview-value">
            <p>张三(1254)- 广东分公司 - 一区</p>
          </div>
        </div>
        <div class="preview-hd">
          <label>投诉时间：</label>
          <div class="preview-value">
            <p>2017-06-12 14:20:30</p>
          </div>
        </div>
      </div>

      <div class="form-preview bottom-line">
        <div class="preview-hd">
          <label>投  诉 人：</label>
          <div class="preview-value">
            <p>昌冠(125478569 业务员)；</p>
            <p>劳振(142536987 业务员)；</p>
            <p>李邢龙(256987458 经销商)；</p>
            <p>王宗兰(369875847 准经销商)</p>
          </div>
        </div>
      </div>

      <div class="form-preview bottom-line">
        <div class="preview-hd">
          <label>案件类型：</label>
          <div class="preview-value">
            <p>重复申请资格；</p>
            <p>接纳他人重复申请资格；</p>
            <p>诱导、胁迫他人重复申请资格；</p>
          </div>
        </div>
      </div>

      <div class="form-preview bottom-line">
        <div class="preview-hd">
          <label>查证情况：</label>
          <div class="preview-value">
            <p>经查实，昌冠(125478569 业务员)；劳振(142536987 业务员)；李邢龙(256987458 经销商)；王宗兰(369875847 准经销商)违规属实，需要执行处分。</p>
          </div>
        </div>
      </div>

      <div class="form-preview bottom-line">
        <div class="preview-hd">
          <label>处理建议：</label>
          <div class="preview-value">
            <p>卡号: 336514788 姓名: 张世霞 有效身份: 优惠消费者 有效职级: 30 是否违规: 是 处理等级: 3 终止标记: 违反夫妻运作管理 执行时间: 2017-10-01 到 2017-11-30 附加处分:  备注: 备注1</p>
            <p>卡号: 336514788 姓名: 张世霞 有效身份: 优惠消费者 有效职级: 30 是否违规: 是 处理等级: 3 终止标记: 违反夫妻运作管理 执行时间: 2017-10-01 到 2017-11-30 附加处分:  备注: 备注1</p>
            <p>卡号: 336514788 姓名: 张世霞 有效身份: 优惠消费者 有效职级: 30 是否违规: 是 处理等级: 3 终止标记: 违反夫妻运作管理 执行时间: 2017-10-01 到 2017-11-30 附加处分:  备注: 备注1</p>
          </div>
        </div>
      </div>

      <div class="form-preview bottom-line">
        <div class="preview-hd">
          <label>审批信息：</label>
          <div class="preview-value">
            <p>分公司规则主任（主）审批  <br/>张三   / 同意   / 同意处分  / 2017-07-12 10:10:10</p>
            <p>分公司规则主任（主）审批  <br/>张三   / 同意   / 同意处分  / 2017-07-12 10:10:10</p>
            <p>分公司规则主任（主）审批  <br/>张三   / 同意   / 同意处分  / 2017-07-12 10:10:10</p>
          </div>
        </div>
      </div>

      <div class="preview-wrap">
        <div class="preview-hd high-box" v-if="this.$route.path === '/approval'">
          <label>当前节点：</label>
          <div class="preview-value">
            <p>业务规则主任/职员审批</p>
          </div>
        </div>
        <div v-else-if="this.$route.path === '/approval-implement'">
          <div class="preview-hd">
            <label>被执行人：</label>
            <div class="preview-value">
              <p>356764568   / 张三   /  70级  /  经销商   / 广东分公司</p>
              <p>356764568   / 张三   /  70级  /  经销商   / 广东分公司</p>
              <p>356764568   / 张三   /  70级  /  经销商   / 广东分公司</p>
            </div>
          </div>
          <div class="preview-hd high-box">
            <label>执行描述：</label>
          </div>
          <implement-describe :executeType="executeType" :describe="describe"></implement-describe>
        </div>
      </div>

    </div>

    <div class="fixed-bottom-wrap">
      <van-row>
        <van-col span="12">
          <van-button bottom-action type="primary" @click="modalStatus(true, approvalStatus = true)">同意</van-button>
        </van-col>
        <van-col span="12">
          <van-button bottom-action @click="modalStatus(true, approvalStatus = false)" style="background-color:#c8c8c8;color:#666;">不同意</van-button>
        </van-col>
      </van-row>      
    </div>

    <!-- 遮罩层 -->
    <van-popup v-model="showModal" position="top" :overlay="overlay">
      <div class="pop-wrap">
        <div>
          <label for="">{{approvalText}}</label>
          <van-field v-model="approvalOpinion" placeholder="请输入审批意见" type="textarea" class="textarea"/>          
        </div>

        <div class="btn-group">
          <van-button type="danger" @click="handleSubmit">提交</van-button>
          <van-button type="default" @click="modalStatus(false)">取消</van-button>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>
import { Button, NavBar, Cell, CellGroup, Row, Col, Popup, Field } from 'vant'
import ImplementDescribe from '../implement-describe/implement-describe'
import { vantPlugins, formValid } from '../../assets/js/utils'
export default {
  mixins: [vantPlugins, formValid],

  name: 'Approval',
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Popup.name]: Popup,
    [Field.name]: Field,
    ImplementDescribe
  },

  props: {
    title: {
      type: String
    }
  },

  data () {
    return {
      showModal: false,
      overlay: true,  // 是否遮罩层
      approvalStatus: '',   // 审批状态
      approvalText: '',
      approvalOpinion: '',
      executeType: 'rename',  // 执行类型
      describe: {
        title: [ 'describe', 'degrade', 'sex', 'credentialsType', 'credentialsNumber', 'enclosure'],
        content: [
          {
            degrade: 'saleMan',
            describe: '原信息',
            sex: 'male',
            enclosure: 'https://www.baidu.com/',
            credentialsType: '身份证',
            credentialsNumber: '21312dfadsjflkdsjfdsa839487324'
          }
        ]
      }      
    }
  },

  watch: {
    approvalStatus (val) {
      if (typeof val !== 'boolean') return
      const vm = this
      val ? vm.approvalText = '同意审批' : vm.approvalText = '不同意审批'
    },

    // 清空文本域
    showPopUp (newVal) {
      if (!newVal) {
        this.approvalOpinion = ''
      }
    }
  },

  methods: {
    onClickLeft () {
      this.$router.push('/')
    },

    // 页面点击事件，分发
    modalStatus (isShow = true) {
      const vm = this
      if (isShow) {
        vm.showModal = true
      } else {
        vm.showModal = false
      }
    },

    // 提交
    handleSubmit () {
      const vm = this
      const approvalOpinion = vm.approvalOpinion
      let int = true   // 可能存在多验证
      int = int && vm.checkNull(approvalOpinion, vm.toast('审批意见不能为空'))

      if (int) {
        vm.dialog('是否确认提交审批意见？', () => {
          vm.showModal = false
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('./approval-common.css')
</style>
