<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { getCode } from '@/apis/user'
import { ref } from 'vue'

defineOptions({
  name: 'SendCode'
})
const emit = defineEmits(['onSendCode'])
const props = defineProps<{
  qq: string | null
}>()
const loading = ref(false)

const time = ref(0)
const sendCode = async () => {
  if (!props.qq || !/^[1-9][0-9]{4,10}$/.test(props.qq)) {
    return ElMessage.warning('请填写正确的qq号')
  }

  loading.value = true
  const { data: res } = await getCode(props.qq)
  loading.value = false
  if (res.status == 200) {
    ElMessage.success('发送成功')
    emit('onSendCode')
  } else {
    ElMessage.error('发送失败，请稍后再试')
  }

  time.value = 60
  const interval: NodeJS.Timer = setInterval(() => {
    if (time.value == 0) {
      return clearInterval(interval)
    }
    time.value--
  }, 1000)
}
</script>

<template>
  <el-button
    class="send_code"
    type="primary"
    :disabled="time !== 0"
    :loading="loading"
    @click="sendCode"
  >
    {{ time == 0 ? '发送验证码' : `${time} 秒后重试` }}
  </el-button>
</template>

<style lang="less" scoped>
.send_code {
  width: 100px;
}
</style>
