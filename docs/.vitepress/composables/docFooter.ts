import { useData, useRoute } from 'vitepress'
import { onMounted, ref, onUnmounted, computed } from 'vue'

interface EditLink {
  pattern: string
  text?: string
}

export const useDocFooter = () => {
  const { theme } = useData()
  const route = useRoute()
  console.log(route.data.relativePath)
  const editLink = theme.value.editLink as EditLink
  const url = computed(() => {
    return editLink.pattern.replace(':path', route.data.relativePath)
  })
  return {
    editLink: {
      text: editLink.text,
      url: url
    }
  }
}
