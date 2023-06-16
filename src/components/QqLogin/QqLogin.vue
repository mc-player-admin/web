<script setup lang="ts">
import { computed, reactive } from 'vue'

const argument = reactive({
  client_id: '102052321',
  redirect_uri: 'https://moon.mcxing.cn/login/qqAccessCallback',
  state: '123456'
})
const href = computed(() => {
  const href = new URL('https://graph.qq.com/oauth2.0/authorize ')
  href.searchParams.append('response_type', 'code')
  href.searchParams.append('client_id', argument.client_id)
  href.searchParams.append('redirect_uri', encodeURI(argument.redirect_uri))
  href.searchParams.append('state', argument.state)
  return href.toString()
})
</script>

<template>
  <a :href="href">
    <slot />
  </a>
</template>

<style lang="less" scoped></style>
