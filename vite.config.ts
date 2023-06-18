import { fileURLToPath, URL } from 'node:url'

import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import BasicSsl from '@vitejs/plugin-basic-ssl'
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfigExport = {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      }),
      ElementPlus({
        useSource: true
      }),
      Inspect()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "src/assets/theme/theme.less";'
        },
        scss: {
          additionalData: `@use "src/assets/style/element.scss" as *;`
        }
      }
    }
  }
  if (mode == 'https') {
    config.plugins?.push(BasicSsl())
    if (!config.server) {
      config.server = {}
    }
    config.server.https = true
    config.server.host = 'moon.mcxing.cn'
    config.server.port = 443
  }

  return config
})
