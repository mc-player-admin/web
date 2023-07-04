<script setup>
import VPSidebar from './VPSidebar.vue'
import VPNav from './VPNav.vue'
import { useSidebar } from '../composables/sidebar'
import VPDocFooter from './VPDocFooter.vue'
import 'vitepress/theme'
import { onMounted, ref } from 'vue'

const controls = ref(false)

onMounted(() => {
  controls.value = !location.search.includes('controls=false')
})
// todo: 处理隐藏控件时滚动报错问题
const { open, useListenResize } = useSidebar()
useListenResize()
</script>

<template>
  <template v-if="controls">
    <div id="vp-app">
      <VPSidebar />
      <VPNav />
      <div class="content vp-doc" :class="open ? 'open' : ''">
        <Content />
        <VP-doc-footer />
      </div>
    </div>
  </template>
  <template v-else>
    <Content class="vp-doc" />
  </template>
</template>

<style lang="less" scoped>
#vp-app {
  display: flex;
  flex-direction: column;
  // height: 100vh;
  .content {
    flex: 1;
    padding: 10px 32px 100px;
    box-sizing: border-box;
    transition: all 0.5s;
    &.open {
      margin-left: @sidebar-width;
    }
  }
  .sidebar {
    overflow: auto;
  }
}
</style>
