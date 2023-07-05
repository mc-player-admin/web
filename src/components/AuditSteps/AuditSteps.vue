<script setup lang="ts">
import {
  CircleClose as CircleCloseIcon,
  CircleCheck as CircleCheckIcon
} from '@element-plus/icons-vue'

defineOptions({
  name: 'AuditSteps'
})

const props = defineProps<{
  status: keyof typeof steps
  type?: 'accept' | 'deny'
}>()

const steps = {
  register: 0,
  edit_userinfo: 1,
  submit: 2,
  wait: 3,
  result: 4
}
const step = steps[props.status]
</script>

<template>
  <el-steps :active="step" finish-status="success" align-center>
    <el-step title="注册账号" />
    <el-step title="完善信息" />
    <el-step title="申请白名单" />
    <el-step title="等待审核" v-if="status != 'result'" />
    <el-step title="审核不通过" :icon="CircleCloseIcon" status="error" v-else-if="type == 'deny'" />
    <el-step title="审核通过" :icon="CircleCheckIcon" v-else-if="type == 'accept'" />
    <el-step title="审核" v-else-if="type == undefined" />
  </el-steps>
</template>
