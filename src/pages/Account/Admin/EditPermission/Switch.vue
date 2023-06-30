<script setup lang="ts">
import { computed, ref } from 'vue'
import { setPermission } from '@/apis/admin'
import { ElMessage } from 'element-plus'

defineOptions({
  name: 'Switch'
})
const props = defineProps<{
  name: string
  modelValue?: boolean | null
  text: string
  group: number
}>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const loading = ref(false)

const beforeChange = async (value: string | number | boolean) => {
  console.log(Boolean(value))

  loading.value = true
  const { data: res } = await setPermission(props.group, props.name, Boolean(value))
  loading.value = false
  if (res.status == 200) {
    ElMessage.info('修改成功' + JSON.stringify(res?.data?.info))
  } else {
    ElMessage.error('修改失败' + JSON.stringify(res))
  }
}

const enable = () => {
  value.value = false
  beforeChange(false)
}
</script>

<template>
  <div class="switch">
    {{ text }}
    <el-button v-if="value == null || value == undefined" link @click="enable">
      点击启用
    </el-button>
    <el-switch v-else v-model="value" @change="beforeChange" :loading="loading" />
  </div>
</template>

<style lang="less" scoped></style>
