<template>
    <div id="home-page">
      <!-- Hero 區 -->
      <div id="hero" class="hero-section">
        <!-- 粒子背景 -->
        <vue-particles id="tsparticles" :options="particlesOptions" />
  
        <div class="hero-content">
          <h1>Hello, I’m Samuel — Developer, Designer, Dreamer.</h1>
          <div class="scroll-down">⬇ Scroll Down</div>
        </div>
      </div>
  
      <!-- 關於我 -->
      <section class="about-section">
        <img class="avatar" src="../assets/coding_cat.png" alt="Avatar" />
        <p class="intro">一位熱愛創作與開發的全端工程師。</p>
        <div class="tags">
          <span class="tag">👨‍💻 開發者</span>
          <span class="tag">🎨 創作者</span>
          <span class="tag">💻 工程師</span>
        </div>
      </section>
  
      <!-- 導覽區 -->
      <section class="nav-section">
        <div class="nav-card">📁 Portfolio</div>
        <div class="nav-card">📄 Resume</div>
        <div class="nav-card">📹 YouTube</div>
        <div class="nav-card">📝 Blog</div>
      </section>
  
      <!-- 技術區 -->
      <section class="tech-section">
        <h2>我的技術棧</h2>
        <div class="tech-icons">
          <i class="fab fa-vuejs"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-node"></i>
          <i class="fab fa-github"></i>
        </div>
      </section>
  
      <!-- 頁尾 -->
      <footer class="footer">
        <p>📫 聯絡我：qazwsxedc4283@gmail.com</p>
        <div class="socials">
          <a class="instagram-link" rel="noopener noreferrer" target="_blank" href="https://github.com/Samuel4283"><i class="fab fa-github"></i></a>
          <a class="instagram-link" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/samuel_lin_0602"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'
const particlesOptions =ref({
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
      random: false,
      speed: 2,
      straight: false
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

</script>

  <style scoped>
  .hero-section {
    position: relative;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
    text-align: center;
    animation: fadeIn 2s ease;
    z-index: 2;
    position: relative;
  }
  
  .scroll-down {
    margin-top: 20px;
    animation: bounce 2s infinite;
    z-index: 2;
    position: relative;
  }
  
  .about-section,
  .nav-section,
  .tech-section,
  .footer {
    padding: 60px 20px;
    text-align: center;
  }
  
  .avatar {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .tag {
    display: inline-block;
    background: #00b894;
    color: white;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 20px;
  }
  
  .nav-card {
    display: inline-block;
    margin: 10px;
    padding: 15px 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .nav-card:hover {
    transform: scale(1.05);
  }
  
  .tech-icons i {
    font-size: 2rem;
    margin: 10px;
    color: #42b983;
  }
  
  .footer {
    background: #111;
    color: white;
  }
  
  .socials i {
    color: white;
    margin: 10px;
    cursor: pointer;
  }

  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  </style>
  