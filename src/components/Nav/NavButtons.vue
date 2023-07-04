<script setup lang="ts">
defineOptions({
  name: 'NavButtons'
})
</script>

<template>
  <router-link to="/">首页</router-link>
  <a href="/docs/">常见问题</a>
  <router-link to="/account"> 个人中心 </router-link>
  <!-- <logout>
    <a>退出登录</a>
  </logout> -->
</template>

<style lang="less" scoped></style>
