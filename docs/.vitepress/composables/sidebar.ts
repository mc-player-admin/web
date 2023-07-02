import { useData, useRoute } from 'vitepress'

type SidebarItem = {
  text: string
  link: string
}

const resolvePath = (...path: string[]) => {
  return path.join('').replace(/\/\//g, '/')
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
    })
  }
}
