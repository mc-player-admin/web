<script lang="ts" setup>
import { useUserStore } from '@/store/store'

defineOptions({
  name: 'AppNav'
})

const userStore = useUserStore()
</script>

<template>
  <div class="nav">
    <div class="title" @click="$router.push('/')">
      <!-- <div class="logo"></div> -->
      <h1>MC-Player-Admin</h1>
    </div>
    <div class="loginstatus">
      <router-link v-if="!userStore.isLogin" to="/login">您好，请登录</router-link>
      <router-link v-else to="/account">您好，{{ userStore.userInfo?.username }}</router-link>
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
  box-shadow: 1px 1px 2px 1px #f2f2f2;
  height: 60px;
  padding: 0 25px;
  .title {
    cursor: pointer;
    display: flex;
    align-items: center;
    h1 {
      font-size: 1rem;
      color: #7764b5;
    }
  }

  .loginstatus {
    cursor: pointer;
    a {
      color: @text-primary-color;

      &:hover {
        color: @text-primary-hover-color;
      }
    }
  }
}
</style>
