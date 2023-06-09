<script lang="ts" setup></script>

<template>
  <div class="nav">
    <div class="title">
      <!-- <div class="logo"></div> -->
      <h1>MC-Player-Admin</h1>
    </div>
    <div class="loginstatus">
      <a href="javascript:;" v-if="true">您好，请登录</a>
      <a href="javascript:;" v-else>Admin</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url(@/assets/style/base.less);
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 2px 1px #f2f2f2;
  height: 60px;
  padding: 0 25px;
  .title {
    display: flex;
    align-items: center;
    h1 {
      color: #7764b5;
    }
  }

  .loginstatus {
    cursor: pointer;
    a {
      color: #409eff;
      &:hover {
        color: #ffbfc9;
      }
    }
  }
}
</style>
