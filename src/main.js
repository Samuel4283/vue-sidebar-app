import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 引入 tsparticles Vue 版本
import { loadFull } from 'tsparticles'
import Particles from "@tsparticles/vue3";


import './style.css'


import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)


app.use(router) // 將 router 註冊進 Vue 應用中

// 註冊 Particles 插件，並初始化引擎

app.use(Particles, {
  init: async (engine) => {
    if (!engine) {
      console.error("❌ tsParticles engine is undefined")
      return
    }

    await loadFull(engine) // 👈 加載所有功能
  }
})


app.mount('#app') // 掛載到 index.html 的 #app