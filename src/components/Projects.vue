```vue
<script setup>
import { ref } from "vue";
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

// Índice de la imagen actual
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
        <div class="relative w-full overflow-hidden rounded-lg">
          <!-- Imagen principal -->
          <img
            v-if="images.length"
            :src="images[currentImage]"
            :alt="`${altText} - imagen ${currentImage + 1}`"
            class="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />

          <!-- Botón anterior -->
          <button
            v-if="images.length > 1"
            type="button"
            @click="previousImage"
            class="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-none text-white hover:bg-black/70"
            aria-label="Imagen anterior"
          >
            ❮
          </button>

          <!-- Botón siguiente -->
          <button
            v-if="images.length > 1"
            type="button"
            @click="nextImage"
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
              @click="selectImage(index)"
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