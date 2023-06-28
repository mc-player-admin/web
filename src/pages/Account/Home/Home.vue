<script setup lang="ts">
import AccountUser from '@/components/AccountUser/AccountUser.vue'
defineOptions({
  name: 'AccountPage'
})
</script>

<template>
  <account-user />
  <!-- <el-alert title="您还没有完善信息" type="warning" show-icon>完善后才可以申请白名单</el-alert> -->
  <div class="options">
    <ul>
      <li>玩家查询</li>
      <li>服务器状态</li>
      <li>常见问题</li>
      <li>问题反馈</li>
      <li>BUG反馈</li>
      <!-- todo: 千万别点 -->
      <li>千万别点</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.el-alert {
  margin-top: 8px;
}
.options {
  background-color: #fff;
  margin-top: 8px;
  ul {
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      height: 45px;
      line-height: 45px;
      padding-left: 15px;
      border-bottom: 1px solid #aaaaaa2a;
    }
  }
}
</style>
