<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    required: false,
  },
  previewUrl: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
});

// Índice de la imagen actual (carrusel de la tarjeta)
const currentImage = ref(0);

// Imagen siguiente
const nextImage = () => {
  if (props.images.length === 0) return;
  currentImage.value = (currentImage.value + 1) % props.images.length;
};

// Imagen anterior
const previousImage = () => {
  if (props.images.length === 0) return;
  currentImage.value =
    (currentImage.value - 1 + props.images.length) % props.images.length;
};

// Seleccionar una imagen específica
const selectImage = (index) => {
  currentImage.value = index;
};

// ── Modal lightbox ──────────────────────────────────────────────
const isModalOpen = ref(false);
const modalImage = ref(0);

const openModal = (index) => {
  modalImage.value = index;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "";
};

const nextModalImage = () => {
  modalImage.value = (modalImage.value + 1) % props.images.length;
};

const prevModalImage = () => {
  modalImage.value =
    (modalImage.value - 1 + props.images.length) % props.images.length;
};

const selectModalImage = (index) => {
  modalImage.value = index;
};

const onKeydown = (e) => {
  if (!isModalOpen.value) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") nextModalImage();
  if (e.key === "ArrowLeft") prevModalImage();
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));

// Mapa de tecnologías con iconos
const techIcons = {
  Flutter: "logos:flutter",
  Dart: "logos:dart",
  Firebase: "logos:firebase",
  Playstore: "mage:playstore",
  Html: "logos:html-5",
  Css: "logos:css-3",
  Js: "logos:javascript",
  Jquery: "devicon:jquery",
  Bootstrap: "logos:bootstrap",
  VueJs: "logos:vue",
  Tailwind: "vscode-icons:file-type-tailwind",
  Headless: "logos:headlessui-icon",
  Vercel: "vscode-icons:file-type-vercel",
  PHP: "vscode-icons:file-type-php",
  HighCharts: "logos:highcharts",
  Coidegniter: "logos:codeigniter-icon",
  Daisy: "logos:daisyui",
  Hosting: "vscode-icons:file-type-light-firebasehosting",
  React: "logos:react",
  "React Native": "devicon:reactnative",
  Next: "ri:nextjs-fill",
  ShadcnUI: "simple-icons:shadcnui",
  Figma: "logos:figma",
  AdobeXd: "simple-icons:adobexd",
  Laravel: "mdi:laravel",
  Blade: "logos:laravel",
  NodeJs: "logos:nodejs",
  MongoDb: "logos:mongodb",
  Xampp: "logos:xampp",
  Apache: "logos:apache",
  Mysql: "logos:myqsl",
  MariaDB: "logos:mariadb",
  Spark: "logos:apache-spark",
  Meta: "logos:meta-icon",
  Instagram: "logos:instagram-icon",
  Facebook: "logos:facebook",
  Supabase: "mdi:database",
  Appstore: "mdi:apple",
  SQLite: "logos:sqlite",
  Express: "logos:express",
  NodeJs: "logos:nodejs",
};
</script>

<template>
  <div class="backdrop-blur-md rounded-xl px-4">
    <!-- Layout responsive -->
    <div
      class="bg-dark-800 rounded-lg p-6 flex flex-col md:flex-row items-start gap-6"
    >
      <!-- CARRUSEL DE IMÁGENES -->
      <div class="w-full md:w-1/2 flex-shrink-0">
        <div class="relative w-full overflow-hidden rounded-lg h-70 group">
          <!-- Imagen principal (clickeable) -->
          <img
            v-if="images.length"
            :src="images[currentImage]"
            :alt="`${altText} - imagen ${currentImage + 1}`"
            class="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out cursor-zoom-in group-hover:scale-105"
            @click="openModal(currentImage)"
          />

          <!-- Hint de zoom -->
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            <span class="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
              <Icon icon="mdi:magnify-plus-outline" class="w-4 h-4" />
            </span>
          </div>

          <!-- Botón anterior -->
          <button
            v-if="images.length > 1"
            type="button"
            @click.stop="previousImage"
            class="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-none text-white hover:bg-black/70"
            aria-label="Imagen anterior"
          >
            ❮
          </button>

          <!-- Botón siguiente -->
          <button
            v-if="images.length > 1"
            type="button"
            @click.stop="nextImage"
            class="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-none text-white hover:bg-black/70"
            aria-label="Imagen siguiente"
          >
            ❯
          </button>

          <!-- Indicadores -->
          <div
            v-if="images.length > 1"
            class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
          >
            <button
              v-for="(_, index) in images"
              :key="index"
              type="button"
              @click.stop="selectImage(index)"
              :class="[
                'h-2 rounded-full transition-all duration-300',
                currentImage === index
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-white/70 hover:bg-white',
              ]"
              :aria-label="`Mostrar imagen ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>

      <!-- MODAL LIGHTBOX -->
      <Teleport to="body">
        <Transition name="lb-fade">
          <div
            v-if="isModalOpen"
            class="lb-overlay"
            @click.self="closeModal"
            role="dialog"
            aria-modal="true"
            :aria-label="`${altText} - galería`"
          >
            <!-- Contenedor de la imagen -->
            <div class="lb-box">
              <!-- Botón cerrar -->
              <button
                type="button"
                @click="closeModal"
                class="lb-close-btn"
                aria-label="Cerrar"
              >
                <Icon icon="mdi:close" class="w-5 h-5" />
              </button>

              <!-- Contador -->
              <span class="lb-counter">{{ modalImage + 1 }} / {{ images.length }}</span>

              <!-- Imagen activa -->
              <img
                :src="images[modalImage]"
                :alt="`${altText} - imagen ${modalImage + 1}`"
                class="lb-img"
              />

              <!-- Navegación -->
              <button
                v-if="images.length > 1"
                type="button"
                @click="prevModalImage"
                class="lb-nav lb-nav-left"
                aria-label="Imagen anterior"
              >
                <Icon icon="mdi:chevron-left" class="w-8 h-8" />
              </button>
              <button
                v-if="images.length > 1"
                type="button"
                @click="nextModalImage"
                class="lb-nav lb-nav-right"
                aria-label="Imagen siguiente"
              >
                <Icon icon="mdi:chevron-right" class="w-8 h-8" />
              </button>

              <!-- Miniaturas -->
              <div v-if="images.length > 1" class="lb-thumbs">
                <img
                  v-for="(img, i) in images"
                  :key="i"
                  :src="img"
                  :alt="`${altText} miniatura ${i + 1}`"
                  @click="selectModalImage(i)"
                  :class="['lb-thumb', modalImage === i ? 'lb-thumb-active' : '']"
                />
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

      <!-- CONTENIDO -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <!-- Título -->
        <h3 class="text-2xl font-bold">
          {{ title }}
        </h3>

        <!-- Tecnologías e iconos -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="btn btn-ghost btn-sm font-semibold rounded-lg flex items-center gap-1"
          >
            <Icon
              v-if="techIcons[tech]"
              :icon="techIcons[tech]"
              class="w-4 h-4"
            />
            {{ tech }}
          </span>
        </div>

        <!-- Tipo oculto -->
        <span class="hidden" :value="type">
          {{ type }}
        </span>

        <!-- Descripción -->
        <div class="rounded-lg">
          <p class="text-sm font-medium text-gray-400">
            {{ description }}
          </p>
        </div>

        <!-- Links -->
        <div class="flex gap-2 items-center">
          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-sm font-semibold rounded-lg flex items-center gap-1"
          >
            <Icon icon="mdi:github" class="w-4 h-4" />
            Github
          </a>

          <a
            v-if="previewUrl"
            :href="previewUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-sm font-semibold rounded-lg flex items-center gap-1"
          >
            <Icon icon="mdi:eye" class="w-4 h-4" />
            Preview
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* ── Overlay ────────────────────────────────── */
.lb-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* ── Caja del lightbox ──────────────────────── */
.lb-box {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 2.5rem;
}

/* ── Imagen principal ───────────────────────── */
.lb-img {
  max-width: 85vw;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 0.75rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  user-select: none;
  display: block;
}

/* ── Botón cerrar ───────────────────────────── */
.lb-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.lb-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* ── Contador ───────────────────────────────── */
.lb-counter {
  position: absolute;
  top: 0.2rem;
  left: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 600;
}

/* ── Botones de navegación ──────────────────── */
.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.lb-nav:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}
.lb-nav-left  { left:  -3.5rem; }
.lb-nav-right { right: -3.5rem; }

/* ── Miniaturas ─────────────────────────────── */
.lb-thumbs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.lb-thumb {
  width: 64px;
  height: 44px;
  object-fit: cover;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.6;
  transition: opacity 0.2s, border-color 0.2s;
}
.lb-thumb:hover  { opacity: 0.9; }
.lb-thumb-active { opacity: 1; border-color: oklch(var(--p)); }

/* ── Transición del lightbox ────────────────── */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>