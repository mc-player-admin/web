<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { useUserStore } from '@/store/store'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()

defineOptions({
  name: 'LogOut'
})

const logout = async () => {
  const confirm = await ElMessageBox({
    title: '警告',
    message: '确定要退出登录吗',
    showCancelButton: true,
    showClose: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  }).catch(() => {})
  if (confirm == 'confirm') {
    user.isLogin = false
    localStorage.removeItem('token')
    router.replace('/')
  }
}
</script>

<template>
  <div @click="logout">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped></style>
