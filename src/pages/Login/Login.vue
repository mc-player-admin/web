<script lang="ts" setup>
import { useRoute } from 'vue-router'

defineOptions({
  name: 'LoginPage'
})

// 获取当前路由路径 用于渲染登录方式导航栏
const getPath = () => {
  return useRoute().path.slice('/login/'.length)
}
</script>
<template>
  <div class="login">
    <div class="login-title">
      <h1>登录</h1>
    </div>
    <div class="login-mode-selete">
      <el-menu :default-active="getPath()" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="bypassword">密码登录</el-menu-item>
        <el-menu-item index="bycode">验证码登录</el-menu-item>
        <el-tooltip class="box-item" effect="dark" content="还没做~" placement="bottom">
          <el-menu-item index="byapp" disabled>扫码登录</el-menu-item>
        </el-tooltip>
      </el-menu>
    </div>
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.login {
  //   background-color: pink;
  margin: 0 auto;
  max-width: 600px;
  .login-title {
    text-align: center;
    font-size: 18px;
    margin: 25px;
  }

  .login-mode-selete {
    margin: 25px;
  }
}
</style>
