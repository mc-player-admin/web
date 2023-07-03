<script lang="ts" setup>
import { useUserStore } from '@/store/store'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'

defineOptions({
  name: 'AppNav'
})
const user = useUserStore()
const userStore = useUserStore()
const router = useRouter()
const logout = async () => {
  const confirm = await ElMessageBox({
    title: '警告',
    message: '确定要退出登录吗',
    showCancelButton: true,
    showClose: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  }).catch(() => {})
  if (confirm == 'confirm') {
    user.isLogin = false
    localStorage.removeItem('token')
    router.replace('/')
  }
}
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
          <router-link to="/login" v-if="$route.path != '/login'">
            <el-button type="primary">登录</el-button></router-link
          >
          <router-link to="/" v-if="$route.path != '/'">返回首页</router-link>
        </template>
      </div>
      <div class="btns" v-if="userStore.isLogin">
        <router-link to="/" v-if="$route.path != '/'">返回首页</router-link>
        <router-link to="/account" v-if="$route.path.substring(0, 8) != '/account'"
          >个人中心</router-link
        >
        <a href="/docs/">常见问题</a>
        <a href="javascript:;" @click="logout()" v-if="$route.path != '/account'">退出登录</a>
      </div>
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
