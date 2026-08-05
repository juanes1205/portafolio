<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200 relative overflow-hidden">
    <!-- Fondo con efecto de partículas -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 text-center p-8 backdrop-blur-lg bg-base-100 bg-opacity-30 rounded-xl shadow-xl">
      <h1 class="text-9xl font-bold text-primary mb-4 animate-pulse">404</h1>
      <div class="space-y-6">
        <!-- Gif espacial mejorado -->
        <img 
          src="https://i.gifer.com/7iJR.gif" 
          alt="404 Space"
          class="w-64 h-64 mx-auto rounded-full shadow-lg object-cover"
        >
        <p class="text-2xl font-semibold mb-8">Houston, we have a problem!</p>
        <p class="text-lg text-base-content/80 mb-8">
          The page you're looking for has been lost in space
        </p>
        <!-- Botones de acción -->
        <div class="flex gap-4 justify-center">
          <button 
            @click="router.push('/')" 
            class="btn btn-primary"
          >
            Return to Earth (Home)
          </button>
          <button 
            @click="router.go(-1)" 
            class="btn btn-outline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animación de estrellas en el fondo */
.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url(/imgs/stars.png) repeat top center;
  z-index: 0;
}

.stars {
  animation: move-twinkle 200s linear infinite;
  background-size: 500px 500px;
}

.stars2 {
  animation: move-twinkle 150s linear infinite;
  background-size: 1000px 1000px;
  opacity: 0.4;
}

.stars3 {
  animation: move-twinkle 100s linear infinite;
  background-size: 1500px 1500px;
  opacity: 0.2;
}

@keyframes move-twinkle {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1000px);
  }
}

/* Animación del contenedor principal */
.backdrop-blur-lg {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style> 