<script lang="ts" setup>
defineOptions({
  name: 'LoginPage'
})

const routers = [
  {
    index: 'bypassword',
    text: '密码登录'
  },
  {
    index: 'bycode',
    text: '验证码登录'
  },
  {
    index: 'byapp',
    text: '扫码登录',
    disabled: true
  }
]
</script>
<template>
  <div class="login">
    <div class="login-title">
      <h1>登录</h1>
    </div>
    <div class="login-mode-selete">
      <el-menu default-active="bypassword" mode="horizontal" router>
        <el-menu-item
          v-for="item in routers"
          :key="item.index"
          :index="item.index"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </el-menu-item>
      </el-menu>
    </div>
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.login {
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
