<script lang="ts" setup>
import { useUserStore } from '@/store/store'
// import Logout from '@/components/Logout/Logout.vue'
import NavButtons from './NavButtons.vue'
import { HamburgerButton as IconHamburgerButton } from '@icon-park/vue-next'

defineOptions({
  name: 'AppNav'
})
const user = useUserStore()
</script>

<template>
  <div class="nav">
    <router-link class="title" to="/">
      <h1>MC-Player-Admin</h1>
    </router-link>
    <div class="info">
      <div class="userinfo">
        <template v-if="user.isLogin">
          <el-avatar class="avatar" :src="user.userInfo?.avatar" />
          <div class="username">{{ user.userInfo?.username }}</div>
        </template>
        <template v-else>
          <router-link to="/login" v-if="$route.path != '/login'">
            <el-button type="primary">登录</el-button>
          </router-link>
        </template>
      </div>

      <div class="button_group_web">
        <nav-buttons />
      </div>

      <el-popover placement="top" :width="60" trigger="click">
        <template #reference>
          <el-button link class="button_group_phone_button">
            <icon-hamburger-button size="22" />
          </el-button>
        </template>
        <div class="button_group_phone">
          <nav-buttons />
        </div>
      </el-popover>
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
  }
}
.button_group_phone,
.button_group_web {
  :deep(a) {
    color: @text-primary-color;
    margin-left: 8px;
    &:hover {
      color: @text-primary-hover-color;
    }
  }
}
.button_group_phone {
  display: flex;
  flex-direction: column;
  :deep(a) {
    margin: 3px;
  }
}
.button_group_phone_button {
  margin-left: 10px;
  display: none;
}
.min-width(550px, {
  .button_group_phone_button {
    display: flex
    
  }
  .button_group_web {
    display: none
  }
});
</style>
