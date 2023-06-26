import { watch, type Directive, nextTick } from 'vue'
import { useUserStore } from '@/store/store'

/**
 * # v-permission
 * 传入 `permission` 字符串
 * 匹配 `userStore` 中的权限将元素展示/隐藏
 */
export default {
  created(el, binding) {
    // 先设置为none
    el.style.setProperty('display', 'none')
    const userStore = useUserStore()
    watch(
      () => userStore.permission,
      (value) => {
        const permission = value.find((e) => {
          return e.name == binding.value
        })
        // 有权限 展示
        if (permission?.value) {
          el.style.removeProperty('display')
        } else {
          // 没权限 替换
          const comment = document.createComment('v-permission')
          nextTick(() => {
            if (el.parentNode) {
              el.parentNode.replaceChild(comment, el)
            } else {
              el.replaceChildren(comment)
              el.style.setProperty('display', 'none')
            }
          })
        }
      },
      {
        deep: true,
        immediate: true
      }
    )
  }
} as Directive<HTMLDivElement, string>
