<script lang="ts" setup>
import { useUserStore } from '@/store/store'

defineOptions({
  name: 'AppNav'
})

const userStore = useUserStore()
</script>

<template>
  <div class="nav">
    <router-link class="title" to="/">
      <h1>MC-Player-Admin</h1>
    </router-link>
    <div class="info">
      <div class="userinfo">
        <template v-if="userStore.isLogin">
          <el-avatar class="avatar" :src="userStore.userInfo?.avatar" />
          <div class="username">{{ userStore.userInfo?.username }}</div>
        </template>
        <template v-else>
          <router-link to="/login"> <el-button type="primary">登录</el-button></router-link>
        </template>
      </div>
      <router-link to="/">首页</router-link>
      <a href="/docs/">常见问题</a>
      <router-link to="/account/">个人中心</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav {
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 2px 1px #f2f2f283;
  height: 60px;
  padding: 0 25px;
  // 首页半透明
  &[path='/'] {
    background-color: #ffffff81;
    text-shadow: -1px 1px 4px #ffffff;
  }
  .title {
    cursor: pointer;
    display: flex;
    align-items: center;
    h1 {
      font-size: 1rem;
      color: #7764b5;
    }
  }

  .info {
    // cursor: pointer;
    display: flex;
    align-items: center;
    .userinfo {
      display: flex;
      align-items: center;
      .avatar {
        height: 38px;
        width: 38px;
      }
      .username {
        margin-left: 5px;
        font-size: 16px;
      }
    }
    a {
      color: @text-primary-color;
      margin-left: 8px;
      &:hover {
        color: @text-primary-hover-color;
      }
    }
  }
}
</style>
