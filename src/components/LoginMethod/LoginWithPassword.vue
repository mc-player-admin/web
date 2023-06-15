<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'LoginWithPassword'
})

const form = ref({
  user: '',
  password: ''
})
</script>

<template>
  <el-form label-position="left" label-width="40px" :model="form">
    <el-form-item label="QQ">
      <el-input v-model="form.user" name="qq"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" name="password" show-password />
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped></style>
