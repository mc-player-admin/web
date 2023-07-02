import sidebar from './config/sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hello VitePress',
  description: 'Just playing around.',
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

        // scss: {
        //   additionalData: `@use "src/assets/style/element.scss" as *;`
        // }
      }
    }
  }
})
