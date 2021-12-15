import { createApp } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from './router'

import 'animate.css'
import '@/assets/css/fonts.css'
import '@/assets/css/tailwind.css'

const app = createApp(App)
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT
})
app.use(router)
app.mount('#app')
