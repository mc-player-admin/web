import sidebar from './config/sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MC-Player-Admin - 常见问题',
  description: 'MC-Player-Admin - 常见问题',
  themeConfig: {
    sidebar: sidebar
  },
  base: '/docs',
  outDir: '../dist/docs',
  cleanUrls: true,
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData:
            '@import "../../../src/assets/theme/theme.less"; @import "../theme/main.less";'
        }
      }
    }
  }
})
