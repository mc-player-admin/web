<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

defineOptions({
  name: 'VPSidebar'
})

const { sidebar } = useSidebar()

console.log(sidebar)
</script>

<template>
  <div class="sidebar">
    <a class="sidebar_item" v-for="i in sidebar" :href="i.link">
      {{ i.text }}
    </a>
  </div>
</template>

<style lang="less" scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // transform: translateX(-100%);
  .sidebar_item {
    width: 80%;
    padding: 10px 15px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      color: #42b983;
    }
  }
}
</style>
