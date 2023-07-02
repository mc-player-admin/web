import { useData } from 'vitepress'
import { onMounted, ref, onUnmounted, computed } from 'vue'

type SidebarItem = {
  text: string
  link: string
}

const resolvePath = (...path: string[]) => {
  return path.join('').replace(/\/\//g, '/')
}

/**
 * 影响首页文章左边距
 */
const open = ref(true)
/**
 * 控制移动端侧边栏
 * 不影响首页文章左边距
 */
const isOpen = ref(true)

const switchOpen = () => {
  isOpen.value = !isOpen.value
}
export const useSidebar = () => {
  const { site } = useData()
  const base = site.value.base

  const sidebar: SidebarItem[] = site.value.themeConfig.sidebar

  return {
    sidebar: sidebar.map((e) => {
      return {
        link: resolvePath(base, e.link),
        text: e.text
      }
    }),
    open,
    isOpen,
    switchOpen,
    useListenResize
  }
}

const useListenResize = () => {
  const onResize = (e: UIEvent) => {
    const el = e.target as Window

    if (el.innerWidth < 1000) {
      open.value = false
      isOpen.value = false
    } else {
      open.value = true
      isOpen.value = true
    }
  }
  onMounted(() => {
    window.addEventListener('resize', onResize)
    // 立即触发一次
    window.dispatchEvent(new Event('resize'))
  })
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
}
