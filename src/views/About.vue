<template>
  <div class="about-page">
    <!-- 粒子背景 -->
    <vue-particles id="tsparticles" :options="particlesOptions" />

    <!-- 內文 -->
    <div class="content">
      <h1>這是 About 頁面</h1>
      <p>這裡測試全域註冊的 Particles 元件是否能正常使用。</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const particlesOptions = ref({
  background: {
    color: {
      value: "#000"
    }
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
});

</script>

<style scoped>
.about-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
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
  padding: 2rem;
  color: white;
}
</style>
