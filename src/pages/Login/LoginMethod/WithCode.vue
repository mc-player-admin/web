<script lang="ts" setup>
import { ref } from 'vue'

const mode = ref('bot')
</script>

<template>
  <div class="code">
    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="mode" class="ml-4">
        <el-radio label="bot" size="large" aria-checked>机器人验证</el-radio>
        <el-radio label="mail" size="large">邮件验证</el-radio>
      </el-radio-group>
    </div>
    <!-- 验证方式 -->
  </div>
</template>

<style lang="less" scoped>
.code {
  max-width: 500px;
  margin: auto;
}
</style>
