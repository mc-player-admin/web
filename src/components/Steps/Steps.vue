<script setup lang="ts">
import { ref, PropType } from 'vue'
defineOptions({
  name: 'Steps'
})

import {
  CircleClose as CircleCloseIcon,
  CircleCheck as CircleCheckIcon
} from '@element-plus/icons-vue'
const props = defineProps({
  step: {
    type: Number as PropType<number>,
    required: true
  }
})
const active = ref(props.step)
</script>

<template>
  <el-steps :active="active" finish-status="success" align-center>
    <el-step title="注册账号" />
    <el-step title="完善信息" />
    <el-step title="申请白名单" />
    <el-step title="人工审核" v-if="active < 4" />
    <el-step title="审核不通过" :icon="CircleCloseIcon" v-if="active == 5" status="error" />
    <el-step title="审核通过" :icon="CircleCheckIcon" v-if="active == 4" />
  </el-steps>
</template>
