<script setup>
import VPSidebar from './VPSidebar.vue'
import VPNav from './VPNav.vue'
import { useSidebar } from '../composables/sidebar'
import VPDocFooter from './VPDocFooter.vue'

const controls = !location.search.includes('controls=false')

const { open, useListenResize } = useSidebar()
controls && useListenResize()
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
