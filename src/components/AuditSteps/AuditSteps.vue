<script setup lang="ts">
import {
  CircleClose as CircleCloseIcon,
  CircleCheck as CircleCheckIcon
} from '@element-plus/icons-vue'

defineOptions({
  name: 'AuditSteps'
})

const props = defineProps<{
  status: 'register' | 'edit_userinfo' | 'submit' | 'status'
  type?: 'wait' | 'accept' | 'deny'
}>()

const steps = {
  register: 0,
  edit_userinfo: 1,
  submit: 2,
  status: 3
}
const step = steps[props.status]
</script>

<template>
  <el-steps :active="step" finish-status="success" align-center>
    <el-step title="注册账号" />
    <el-step title="完善信息" />
    <el-step title="申请白名单" />
    <el-step title="等待审核" v-if="type == 'wait'" />
    <el-step title="审核不通过" :icon="CircleCloseIcon" status="error" v-else-if="type == 'deny'" />
    <el-step title="审核通过" :icon="CircleCheckIcon" v-else-if="type == 'accept'" />
    <el-step title="审核" v-else-if="type == undefined" />
  </el-steps>
</template>
