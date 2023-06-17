<script setup lang="ts">
import QqLogin from '@/components/QqLogin/QqLogin.vue'
defineOptions({
  name: 'LoginPage'
})
</script>

<template>
  <div class="login">
    <h1 class="title">登录</h1>
    <div class="login_method">
      <qq-login class="qq-login">
        <img src="@/assets/03_qq_symbol.png" alt="" />
        QQ登录
      </qq-login>
      <div class="any-login">其他方式登录</div>
    </div>
    <a href="#" class="any_text">无法登录</a>
  </div>
</template>

<style lang="less" scoped>
.login {
  max-width: 300px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  margin-top: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .login_method {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    [class$='-login'] {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      color: #fff;
      border-radius: 40px;
      background-color: #0093f5;
      margin: 8px 0;
      img {
        height: 25px;
        margin: 0 5px;
      }
    }
    .qq-login {
      background-color: #0093f5;
    }
    .any-login {
      cursor: no-drop;
      background-color: rgba(14, 14, 14, 0.439);
    }
  }
  .any_text {
    color: #4f4f4faa;
  }
}
</style>
