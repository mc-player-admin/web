import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './AppSuspense.vue'
import router from './router'

import './assets/style/base.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
