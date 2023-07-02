import sidebar from './config/sidebar.json'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: sidebar
  },
  base: '/docs',
  outDir: '../dist/docs'
})
