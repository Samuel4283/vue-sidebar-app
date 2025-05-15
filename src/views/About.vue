<template>
  <div class="about-page">
    <!-- 粒子背景 -->
    <vue-particles id="tsparticles" :options="particlesOptions" />

    <!-- 主要內容 -->
    <div class="content">
      <h1 class="title">關於我</h1>
      <p class="intro">
        嗨，我是 Samuel，一位對技術充滿熱情的開發者，熱愛學習與挑戰。目前專注於前端開發、人工智慧與網頁設計，希望透過程式創造出實用且有趣的作品。
      </p>

      <div class="info-grid">
        <div class="info-card">
          <h2>🧠 專長技能</h2>
          <ul>
            <li>Vue.js / React</li>
            <li>HTML / CSS / JS</li>
            <li>Python / MySQL</li>
            <li>AI 與深度學習基礎</li>
          </ul>
        </div>

        <div class="info-card">
          <h2>🎯 興趣領域</h2>
          <ul>
            <li>前端 UI/UX 設計</li>
            <li>資料視覺化</li>
            <li>影像處理與 AI 模型</li>
            <li>技術寫作與教學</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const particlesOptions = ref({
  background: { color: { value: "#0d0d0d" } },
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
      opacity: 0.4,
      width: 1
    },
    collisions: { enable: true },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1.2,
      straight: false
    },
    number: {
      density: { enable: true, area: 800 },
      value: 60
    },
    opacity: { value: 0.6 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } }
  },
  detectRetina: true
});
</script>

<style scoped>
.about-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #0d0d0d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
  padding: 3rem 1.5rem;
  max-width: 960px;
  margin: 0 auto;
  color: #ffffff;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.intro {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  color: #ccc;
}

.info-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  width: 300px;
  backdrop-filter: blur(6px);
}

.info-card h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.info-card ul {
  list-style: none;
  padding-left: 1rem;
}

.info-card li::before {
  content: '• ';
  color: #00bcd4;
}
</style>
