<script setup>
import VPSidebar from './VPSidebar.vue'
import VPNav from './VPNav.vue'
import DefaultTheme from 'vitepress/theme'
import { useSidebar } from '../composables/sidebar'

const { Layout } = DefaultTheme
const { open, useListenResize } = useSidebar()
useListenResize()
</script>

<template>
  <div id="vp-app">
    <VPSidebar />
    <VPNav />
    <div class="content vp-doc" :class="open ? 'open' : ''">
      <Content />
    </div>
  </div>
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
// #vp-app {
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   overflow: hidden;
//   .content {
//     flex: 1;
//     min-height: 0;
//     overflow: auto;
//   }
//   .sidebar,
//   .content {
//     overflow: auto;
//     min-height: 0;
//   }
//   .content {
//     flex: 1;
//     padding: 10px 32px 100px;
//     box-sizing: border-box;
//     transition: all 0.5s;
//     &.open {
//       margin-left: @sidebar-width;
//     }
//   }
//   // }
// }
</style>
