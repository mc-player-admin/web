<script setup lang="ts">
import { Share as IconShare, Close as IconClose } from '@icon-park/vue-next'
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

defineOptions({
  name: 'DraggableDocs'
})
defineProps<{
  path: string
}>()
defineEmits(['close'])

const headerEl = ref<HTMLElement | null>(null)

const { innerWidth, innerHeight } = window

const initialPosition = {
  x: innerWidth - 350,
  y: (innerHeight - 0.8 * innerHeight) / 2
}

const { style } = useDraggable(headerEl, {
  initialValue: initialPosition
})

const loading = ref(true)
const onLoad = () => {
  loading.value = false
}
</script>

<template>
  <div class="draggable-docs" :style="style">
    <div class="draggable-docs_header" ref="headerEl">
      <h1 class="title">
        收不到验证码
        <icon-share size="14" />
      </h1>
      <div class="buttons" @click="$emit('close')">
        <div><icon-close /></div>
      </div>
    </div>
    <div class="draggable-docs_content" v-loading="loading">
      <iframe :src="`/docs${path}?controls=false`" frameborder="0" @load="onLoad"></iframe>
    </div>
  </div>
</template>

<style lang="less" scoped>
.draggable-docs {
  position: fixed;
  background-color: #fff;
  z-index: 100;
  width: 330px;
  max-width: 90%;
  height: 80vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  cursor: move;
  transform: translateX(v-bind('initialPosition.x + "px"'));
  animation: load 0.3s both;
  @keyframes load {
    100% {
      transform: translateX(0);
    }
  }

  .draggable-docs_header {
    background-color: @primary;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    .title {
      font-weight: 400;
      font-size: 18px;
    }
    .buttons {
      cursor: pointer;
    }
  }
  .draggable-docs_content {
    flex: 1;
    iframe {
      width: 100%;
      height: 100%;
      padding-left: 5px;
      box-sizing: border-box;
    }
  }
}
</style>
