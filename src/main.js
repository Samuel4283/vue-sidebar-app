import { createApp } from 'vue'
import router from './router/index.js'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
    .use(router)  // 將 router 註冊進 Vue 應用中
    .mount('#app') // 掛載到 index.html 的 #app

