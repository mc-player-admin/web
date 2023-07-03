<script setup lang="ts">
import { useDocFooter } from '../composables/docFooter'
import { Share as IconShare } from '@icon-park/vue-next'
defineOptions({
  name: 'VPDocFooter'
})
const { editLink } = useDocFooter()
const hasLastUpdated = false
</script>

<template>
  <footer class="VPFooter">
    <div class="edit-info">
      <div class="edit-link">
        <a class="edit-link-button" :href="editLink.url.value">
          {{ editLink.text }}
          <icon-share />
        </a>
      </div>

      <div v-if="hasLastUpdated" class="last-updated">
        <!-- <VPDocFooterLastUpdated /> -->
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.VPFooter {
  margin-top: 20px;
}
.edit-link-button {
  display: flex;
  align-items: center;
}
</style>
