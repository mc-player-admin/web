<script setup lang="ts">
import {
  Home as IconHome,
  User as IconUser,
  Help as IconHelp,
  Experiment as IconExperiment
} from '@icon-park/vue-next'
import { ref } from 'vue'
import vPremission from '@/utils/vPremission'

defineOptions({
  name: 'AccountPage'
})
const collapse = ref(false)
</script>

<template>
  <div class="account">
    <el-menu default-active="" class="account_menu" router :collapse="collapse">
      <el-menu-item index="">
        <el-icon><icon-home /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="player">
        <el-icon><icon-user /></el-icon>
        <span>白名单管理</span>
      </el-menu-item>
      <el-menu-item index="issues" disabled>
        <el-icon><icon-help /></el-icon>
        <span>问题反馈</span>
      </el-menu-item>

      <el-menu-item index="issues" v-premission="'admin.audit'">
        <el-icon><icon-help /></el-icon>
        <span>审核</span>
      </el-menu-item>
      <el-menu-item index="issues" v-premission="'admin.edit_userinfo'">
        <el-icon><icon-help /></el-icon>
        <span>修改用户信息</span>
      </el-menu-item>

      <el-sub-menu index="" title="实验功能" disabled>
        <template #title>
          <el-icon><icon-experiment /></el-icon>
          <span>实验功能</span>
        </template>
        <el-menu-item-group title="实验功能">
          <el-menu-item index="">
            <el-icon><icon-experiment /></el-icon>
            暂未开放
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.account {
  display: flex;
  min-height: calc(100vh - 60px);
  .content {
    flex: 1;
    padding: 10px;
  }
}
</style>
