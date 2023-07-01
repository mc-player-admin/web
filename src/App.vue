<script setup lang="ts">
import Nav from '@/components/Nav/Nav.vue'
import { getUserInfo } from '@/utils/getUserInfo'

getUserInfo()
</script>

<template>
  <Nav :path="$route.path"></Nav>
  <router-view />
</template>

<style lang="less" scoped></style>
