import { createApp } from 'vue'
// tailwind.base.css
import '@/assets/index.css'
import './style.css'
import App from './App.vue'
import { router } from '@/router'
import routerMiddleware from '@/router/middleware'

const app = createApp(App)

app.use(router).use(routerMiddleware)

app.mount('#app')
