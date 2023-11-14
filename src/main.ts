import './assets/main.css'
import './assets/reset.css'

import App from './App.vue'

import { createApp } from 'vue'
import { router } from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
