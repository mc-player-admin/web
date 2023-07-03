<script setup lang="ts">
import {
  CircleClose as CircleCloseIcon,
  CircleCheck as CircleCheckIcon
} from '@element-plus/icons-vue'

defineOptions({
  name: 'AuditSteps'
})

defineProps<{
  step: number
}>()
</script>

<template>
  <el-steps :active="step" finish-status="success" align-center>
    <el-step title="注册账号" />
    <el-step title="完善信息" />
    <el-step title="申请白名单" />
    <!-- todo: 明确审核完成后的三种类型 -->
    <el-step title="人工审核" v-if="step < 4" />
    <el-step title="审核不通过" :icon="CircleCloseIcon" v-if="5" status="error" />
    <el-step title="审核通过" :icon="CircleCheckIcon" v-if="step == 4" />
  </el-steps>
</template>
