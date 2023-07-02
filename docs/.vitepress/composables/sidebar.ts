import { useData, useRoute } from 'vitepress'

type SidebarItem = {
  text: string
  link: string
}

export const useSidebar = () => {
  const { site } = useData()

  const sidebar: SidebarItem[] = site.value.themeConfig.sidebar
  return {
    sidebar
  }
}
