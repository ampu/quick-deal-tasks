import { createApp } from 'vue'

import App from './App.vue'
import {router} from './router.ts'
import {store} from './store.ts'

import './style.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
