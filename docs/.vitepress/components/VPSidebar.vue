<script setup lang="ts">
import { computed } from 'vue'
import { useSidebar } from '../composables/sidebar'
import { useRoute } from 'vitepress'

defineOptions({
  name: 'VPSidebar'
})

const { sidebar, open, isOpen } = useSidebar()

const display = computed(() => {
  if (open.value) {
    return 'open'
  } else if (isOpen.value) {
    return 'unfold'
  } else {
    return 'hidden'
  }
})

const route = useRoute()

const isActive = (path: string) => {
  return computed(() => {
    return route.path == path
  })
}
</script>

<template>
  <div class="sidebar" :display="display">
    <a
      class="sidebar_item"
      v-for="i in sidebar"
      :href="i.link"
      :class="isActive(i.link).value ? 'avtive' : ''"
    >
      {{ i.text }}
    </a>
  </div>
</template>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: @nav-height;
  width: @sidebar-width;
  height: calc(100vh - @nav-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  transition: all 0.5s;
  transform: translateX(-100%);
  &[display='open'],
  &[display='unfold'] {
    transform: translateX(0);
  }
  .sidebar_item {
    width: 80%;
    padding: 10px 15px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      color: @primary;
    }
    &.avtive {
      color: @primary;
      background-color: fadein(@primary, -85%);
      border-radius: 10px;
      font-weight: 600;
    }
  }
}
</style>
