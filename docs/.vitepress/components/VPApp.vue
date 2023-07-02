<script setup>
import VPSidebar from './VPSidebar.vue'
import VPNav from './VPNav.vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <!-- <layout /> -->
  <div id="vp-app">
    <VPNav />
    <div class="vp-content">
      <VPSidebar />
      <div class="content vp-doc">
        <Content />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#vp-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  .vp-content {
    display: flex;
    min-height: 0;
    flex: 1;
    .sidebar,
    .content {
      overflow: auto;
      min-height: 0;
    }
    .content {
      flex: 1;
      padding: 10px 32px 100px;
      box-sizing: border-box;
    }
  }
}
</style>
