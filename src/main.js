import './assets/main.scss'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin} from "@vueuse/motion";
import Swiper from 'swiper'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$swiper = Swiper

app.use(MotionPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
