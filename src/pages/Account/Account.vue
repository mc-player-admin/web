<script setup lang="ts">
import {
  Home as IconHome,
  User as IconUser,
  Help as IconHelp,
  Experiment as IconExperiment,
  EveryUser as IconEveryUser,
  UserBusiness as IconUserBusiness,
  Permissions as IconPermissions,
  Audit as IconAudit
} from '@icon-park/vue-next'
import { ref } from 'vue'
import vPermission from '@/utils/vPermission'

defineOptions({
  name: 'AccountPage'
})
const collapse = ref(false)
</script>

<template>
  <div class="account">
    <el-menu default-active="/account/" class="account_menu" router :collapse="collapse">
      <el-menu-item index="/account/">
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

      <el-menu-item index="/account/admin-audit" v-permission="'admin.audit'">
        <el-icon><icon-audit /></el-icon>
        <span>审核</span>
      </el-menu-item>
      <el-menu-item index="/account/admin-edit_userinfo" v-permission="'admin.edit_userinfo'">
        <el-icon><icon-every-user /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/account/admin-edit_player" v-permission="'admin.edit_player'">
        <el-icon><icon-user-business /></el-icon>
        <span>玩家管理</span>
      </el-menu-item>
      <el-menu-item index="/account/admin-edit_permission" v-permission="'admin.edit_permission'">
        <el-icon><icon-permissions /></el-icon>
        <span>权限管理</span>
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
      <Suspense>
        <router-view></router-view>
      </Suspense>
    </div>
  </div>
</template>

<style lang="less" scoped>
.account {
  display: flex;
  height: calc(100vh - 60px);
  // overflow: hidden;
  .content {
    flex: 1;
    padding: 8px;
    overflow: auto;
    box-sizing: border-box;
    height: 100%;
  }
}
</style>
