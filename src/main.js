import { createApp } from 'vue'
import pinia from './stores'
import router from './router'
import '@/router/permission'

import App from './App.vue'

import 'normalize.css'
import '@/styles/index.scss'
import '@/styles/element-plus/index.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
