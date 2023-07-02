<script setup lang="ts">
defineOptions({
  name: 'vp-nav'
})
</script>

<template>
  <header>
    <div class="title">
      <h1>常见问题</h1>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  flex-shrink: 0;
  height: 0;
  width: 100%;
  height: 66px;
  border-bottom: 1px solid #aaaa;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  z-index: 100;
}
</style>
