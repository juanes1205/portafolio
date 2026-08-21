<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  actions: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  current: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <li class="mb-12 ms-6">
    <!-- Dot indicador en la línea de tiempo -->
    <span
      class="absolute flex items-center justify-center w-4 h-4 rounded-full -start-2 border-2 border-white dark:border-gray-900 transition-transform duration-300 hover:scale-125"
      :class="current ? 'bg-blue-500 animate-pulse' : 'bg-secondary'"
    ></span>

    <div class="flex flex-col sm:flex-row sm:items-start gap-4">
      <!-- Columna izquierda: título, empresa, fecha -->
      <div class="flex-shrink-0 sm:w-60">
        <div class="flex items-center gap-2 flex-wrap">
          <h3 class="text-lg font-semibold text-blue-300 leading-tight">
            {{ title }}
          </h3>
        </div>
        <h4 class="text-sm font-semibold text-base-content/80 mt-0.5">
          {{ company }}
        </h4>
        <time
          class="mt-1 text-xs font-normal text-gray-400 dark:text-gray-500 flex items-center gap-1"
        >
          <span
            class="inline-block w-1.5 h-1.5 rounded-full bg-blue-400/60"
          ></span>
          {{ date }}
        </time>
      </div>

      <!-- Columna derecha: descripción, tags, link -->
      <div class="flex-grow">
        <p
          class="mb-4 text-sm font-normal text-base-content/80 leading-relaxed"
        >
          {{ description }}
        </p>

        <!-- Tags de tecnologías -->
        <div v-if="tags.length" class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="tag in tags"
            :key="tag"
            class="badge badge-sm badge-outline text-xs font-medium text-blue-400 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-200"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Botón opcional -->
        <a
          v-if="url"
          :href="url"
          target="_blank"
          class="font-medium btn btn-secondary btn-sm rounded-lg"
        >
          {{ actions }}
          <svg
            class="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </li>
</template>
