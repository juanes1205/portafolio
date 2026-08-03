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
});
</script>

<template>
  <li class="mb-10 ms-4">
    <div class="flex flex-col sm:flex-row sm:items-start">
      <div class="flex-shrink-0 w-56">
        <div
          class="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white"
        ></div>
        <h3 class="text-lg font-semibold text-blue-300">
          {{ title }}
        </h3>
        <h4 class="text-md font-medium">
          {{ company }}
        </h4>
        <time
          class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >
          {{ date }}
        </time>
      </div>
      <div class="sm-ml-4 mt-2 sm:mt-0 flex-grow">
        <p class="mb-4 text-base font-normal">
          {{ description }}
        </p>
        <div class="flex items-center space-x-2">
          <a
            v-if="url"
            :href="url"
            target="_blank"
            class="font-medium btn btn-secondary rounded"
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
    </div>
  </li>
</template>
