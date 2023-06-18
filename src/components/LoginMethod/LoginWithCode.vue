<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'LoginWithCode'
})

const form = ref({
  username: '',
  password: ''
})
</script>

<template>
  <el-form label-position="left" label-width="60px" :model="form">
    <el-form-item label="邮箱">
      <el-input v-model="form.username">
        <template #append>@qq.com</template>
      </el-input>
    </el-form-item>
    <el-form-item label="验证码" class="code">
      <el-input v-model="form.password" />
      <el-button type="primary" class="send_code">发送验证码</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>
.code {
  :deep(.el-form-item__content) {
    display: flex;
    flex-flow: row nowrap;
    .send_code {
      margin-left: 8px;
    }
  }
}
</style>
