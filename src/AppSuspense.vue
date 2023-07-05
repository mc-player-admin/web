<script setup lang="ts">
import App from './App.vue'
import { ElLoading } from 'element-plus'

const loadingInstance = ElLoading.service()

const mounted = () => {
  loadingInstance.close()
}
</script>

<template>
  <Suspense>
    <app @vue:mounted="mounted" />
    <template #fallback> loding </template>
  </Suspense>
</template>

<style lang="less" scoped>
.before_loding {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
}
</style>
