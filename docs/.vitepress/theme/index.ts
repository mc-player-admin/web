import type { Theme } from 'vitepress'
import VPApp from '../components/VPApp.vue'
import NotFound from '../components/NotFound.vue'

export default {
  NotFound,
  Layout: VPApp,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
  // enhanceApp: ({ app }) => {
  //   app.use(ElementPlus)

  //   globals.forEach(([name, Comp]) => {
  //     app.component(name, Comp)
  //   })
  // }
} as Theme
