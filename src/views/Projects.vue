<script setup>
import Projects from "@/components/Projects.vue";
</script>

<template>
  <div class="mockup-browser border border-base-300 w-full top-12 h-full">
    <div class="grid place-content-center">
      <Projects
        :title="$t('projects.proy.0.title')"
        :description="$t('projects.proy.0.description')"
        :technologies="['Laravel', 'PHP', 'VueJs', 'MariaDB']"
        imgUrl="/proyectos/Sistema_CVI/02.jpg"
        altText="Sistema_CVI"
        githubUrl=""
        previewUrl=""
        type="web"
      />
      <Projects
        :title="$t('projects.proy.1.title')"
        :description="$t('projects.proy.1.description')"
        :technologies="['Laravel', 'PHP', 'VueJs', 'MariaDB']"
        imgUrl="/proyectos/MSN/03.jpg"
        altText="MSN"
      />
    </div>
  </div>
</template>
