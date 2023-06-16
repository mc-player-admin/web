<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { login as loginApi } from '@/apis/login'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()

const { code, state } = route.query

const login = async () => {
  console.log(code, state)

  const { data: res } = await loginApi(code as string, state as string)
  if (res.status == 200) {
    localStorage.setItem('token', res.data.token)
    ElMessage.success('登录成功')
    router.replace('/')
  } else {
    ElMessage.error('登录失败' + (res.data?.msg ? res.data?.msg : ''))
    router.replace('/')
  }
}

login()
</script>

<template>
  <div></div>
</template>

<style lang="less" scoped></style>
