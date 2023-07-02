import sidebar from './config/sidebar.json'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: sidebar
  },
  base: '/docs',
  outDir: '../dist/docs',
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
