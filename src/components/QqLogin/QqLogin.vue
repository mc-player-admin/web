<script setup lang="ts">
import { computed, ref } from 'vue'
import { loginInit as loginInitApi } from '@/apis/user'
import { ElMessage } from 'element-plus'

const iserr = ref(true)

type Argument = {
  client_id: string
  redirect_uri: string
  state: string
}

const argument = ref<Argument | null>(null)

const init = async () => {
  const { data: res } = await loginInitApi()
  console.log(res)
  if (res.status != 200) {
    return (iserr.value = true)
  }
  const { appid, redirect_uri, uuid } = res.data
  argument.value = {
    client_id: appid,
    redirect_uri: redirect_uri,
    state: uuid
  }
  iserr.value = false
}
init()
const href = computed(() => {
  if (!argument.value || iserr.value) {
    return
  }
  const href = new URL('https://graph.qq.com/oauth2.0/authorize ')
  const { client_id, redirect_uri, state } = argument.value
  href.searchParams.append('response_type', 'code')
  href.searchParams.append('client_id', client_id)
  href.searchParams.append('redirect_uri', encodeURI(redirect_uri))
  href.searchParams.append('state', state)
  return href.toString()
})

const onLogin = (e: Event) => {
  if (iserr.value) {
    e.preventDefault()
    ElMessage.error('登录失败，请稍后重试')
  }
}
</script>

<template>
  <a :href="href" @click="onLogin">
    <slot />
  </a>
</template>

<style lang="less" scoped></style>
