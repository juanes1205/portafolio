<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section>
    <h2
      class="text-4xl font-bold text-blue-500 text-start mt-10 mb-10 flex items-center"
    >
      <Icon :icon="icon" class="w-10 h-10 mr-2" />
      <slot name="title" />
    </h2>
    <slot />
  </section>
</template>

