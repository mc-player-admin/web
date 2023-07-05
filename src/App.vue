<script setup lang="ts">
import Nav from '@/components/Nav/Nav.vue'
import { getUserInfo } from '@/utils/getUserInfo'
import { ElMessage } from 'element-plus'

try {
  await getUserInfo()
} catch {
  ElMessage.error('数据获取失败，请稍后再试')
}
</script>

<template>
  <Nav :path="$route.path"></Nav>
  <router-view />
</template>

<style lang="less" scoped></style>
