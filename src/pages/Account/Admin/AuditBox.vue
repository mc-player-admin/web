<script setup lang="ts">
import { watch } from 'vue'

defineOptions({
  name: 'AuditBox'
})

const reasons = [
  '无法验证粉丝牌，请规范上传图片',
  'id格式有误，请正确填写游戏id',
  'b站用户名与uid不符'
]

const props = defineProps<{
  approved: boolean | undefined
  reason: string
}>()
defineEmits(['update:approved', 'update:reason'])

watch(
  () => props,
  (value: any) => {
    console.log(value)
  },
  {
    deep: true
  }
)
</script>

<template>
  <el-row>
    <el-radio-group :model-value="approved" @change="(value) => $emit('update:approved', value)">
      <el-radio-button :label="true">通过</el-radio-button>
      <el-radio-button :label="false">拒绝</el-radio-button>
    </el-radio-group>
  </el-row>
  <el-row v-show="props.approved == false">
    <el-tag v-for="i in reasons" type="info" text @click="$emit('update:reason', i)">{{
      i
    }}</el-tag>
    <el-input
      :model-value="props.reason"
      @input="(value) => $emit('update:reason', value)"
      placeholder="原因"
    />
  </el-row>
</template>

<style lang="less" scoped>
.el-tag {
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
}
</style>
