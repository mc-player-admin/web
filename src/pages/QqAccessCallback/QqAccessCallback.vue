<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { login as loginApi } from '@/apis/user'
import { ElMessage } from 'element-plus'
import { getUserInfo } from '@/utils/getUserInfo'

const route = useRoute()
const router = useRouter()

const { code, state } = route.query

const login = async () => {
  console.log(code, state)

  const { data: res } = await loginApi(code as string, state as string)
  if (res.status == 200) {
    localStorage.setItem('token', res.data.token)
    await getUserInfo()
    if (res.data.type == 'login') {
      ElMessage.success('登录成功')
      router.replace('/')
    } else if (res.data.type == 'register') {
      ElMessage.success('注册成功')
      router.replace('/register')
    }
  } else {
    ElMessage.error('登录失败' + (res.data?.msg ? res.data?.msg : ''))
    router.replace('/')
  }
}

login()
</script>

<template>
  <div v-loading="true" class="loading"></div>
</template>

<style lang="less" scoped>
.loading {
  width: 100%;
  height: 100vh;
}
</style>
