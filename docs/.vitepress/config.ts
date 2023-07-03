import sidebar from './config/sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MC-Player-Admin - 常见问题',
  description: 'MC-Player-Admin - 常见问题',
  themeConfig: {
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/mc-player-admin/web/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
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
