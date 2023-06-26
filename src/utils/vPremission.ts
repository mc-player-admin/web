import { watch, type Directive, nextTick } from 'vue'
import { useUserStore } from '@/store/store'

/**
 * # v-premission
 * 传入 `premission` 字符串
 * 匹配 `userStore` 中的权限将元素展示/隐藏
 */
export default {
  created(el, binding) {
    // 先设置为none
    el.style.setProperty('display', 'none')
    const userStore = useUserStore()
    watch(
      () => userStore.premission,
      (value) => {
        const premission = value.find((e) => {
          return e.name == binding.value
        })
        // 有权限 展示
        if (premission?.value) {
          el.style.removeProperty('display')
        } else {
          // 没权限 替换
          const comment = document.createComment('v-premission')
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
