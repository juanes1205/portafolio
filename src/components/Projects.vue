<script setup>
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
  imgUrl: {
    type: String,
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

//mapa de tecnologias conn iconos
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
    <!-- layout responsive -->
    <div
      class="bg-dark-800 rounded-lg p-6 flex flex-col md:flex-row items-start gap-6"
    >
      <!-- imagen (izquierda) -->
      <div class="w-full md:w-1/2 flex-shrink-0">
        <img
          :src="imgUrl"
          :alt="altText"
          class="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <!-- contenido (derecha) -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <!-- título -->
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <!-- tecnologías e iconos -->
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
        <!-- tipo oculto -->
        <span class="hidden" :value="type">{{ type }}</span>
        <!-- descripción -->
        <div class="rounded-lg">
          <p class="text-sm font-medium text-gray-400">
            {{ description }}
          </p>
        </div>
        <!-- links -->
        <div class="flex gap-2 items-center">
          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            class="btn btn-ghost btn-sm font-semibold rounded-lg flex items-center gap-1"
          >
            <Icon icon="mdi:github" class="w-4 h-4" />
            Github
          </a>
          <a
            v-if="previewUrl"
            :href="previewUrl"
            target="_blank"
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
