<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(false)
</script>

<template>
  Hello World
  <el-button type="">123</el-button>
  <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
  <el-checkbox v-model="checked2">Not disabled</el-checkbox>
</template>

<style lang="less" scoped></style>
