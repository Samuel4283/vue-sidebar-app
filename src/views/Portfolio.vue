<template>
  <div class="portfolio-page">
    <!-- 粒子背景 -->
    <vue-particles id="tsparticles" :options="particlesOptions" />

    <!-- 內容區塊 -->
    <div class="content">
      <h1>我的作品集</h1>
      <p>以下是我開發的專案展示：</p>

      <div class="projects">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <img :src="project.image" alt="專案封面" />
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="view-button">查看專案</a>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <p>📫 聯絡我：qazwsxedc4283@gmail.com</p>
    <div class="socials">
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-twitter"></i>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
// 粒子背景設定
const particlesOptions = ref({
  background: {
    color: { value: "#000" }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: { enable: true },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      speed: 2
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } }
  },
  detectRetina: true
})

// 專案資料
const projects = ref([
  {
    id: 1,
    title: "Vue 作品展示頁",
    description: "這是一個使用 Vue 製作的展示頁，支援 RWD。",
    image: "@/src/assets/coding_cat.png",
    link: "https://samuel4283.me/"
  },
  {
    id: 2,
    title: "AI 圖像標註工具 (開發中)",
    description: "結合 Python + Vue 實作的標註工具，支援 MySQL 管理資料。",
    image: "@/src/assets/coding_cat.png",
    link: "#"
  },
  {
    id: 3,
    title: "Work Managemet OS (開發中)",
    description: "使用 Vue + Others 後端 做出可打包 具有設計感的 TODO 管理系統",
    image: "@/src/assets/coding_cat.png",
    link: "#"
  }
])
</script>

<style scoped>
.portfolio-page {
  position: relative;
  height: fit-content;
  min-height: 100vh;
  padding-bottom: 2rem; /* 給底部一點空間，不會太擠 */
}

#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  color: white;
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  width: 300px;
  backdrop-filter: blur(10px);
}

.project-card img {
  width: 100%;
  border-radius: 0.5rem;
}

.project-card h2 {
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #00ffc3;
}

.project-card p {
  font-size: 0.95rem;
  margin: 0.5rem 0 1rem 0;
}

.view-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #00ffc3;
  color: #000;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: 0.3s;
}

.view-button:hover {
  background: #00bfa5;
}

.footer {
  background: #111;
  color: white;
}
.socials i {
  margin: 10px;
  cursor: pointer;
}
</style>
