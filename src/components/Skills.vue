<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const skillCategories = [
  {
    key: "frontend",
    icon: "mdi:web",
    skills: [
      { name: "Vue.js", icon: "logos:vue" },
      { name: "React", icon: "logos:react" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "daisyUI", icon: "logos:daisyui" },
      { name: "Bootstrap", icon: "logos:bootstrap" }
    ]
  },
  {
    key: "backend",
    icon: "mdi:server",
    skills: [
      { name: "PHP", icon: "logos:php" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "Node.js", icon: "logos:nodejs" },
      { name: "Express.js", icon: "logos:express" },
      { name: "REST APIs", icon: "hugeicons:api" }
    ]
  },
  {
    key: "cloud",
    icon: "mdi:cloud-sync",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Apache", icon: "logos:apache" },
      { name: "PowerShell", icon: "material-icon-theme:powershell" },
      { name: "VMware", icon: "logos:vmware" }
    ]
  },
  {
    key: "databases",
    icon: "mdi:database",
    skills: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MariaDB", icon: "logos:mariadb" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "Firebase", icon: "logos:firebase" }
    ]
  }
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
    <div
      v-for="category in skillCategories"
      :key="category.key"
      class="card bg-neutral/10 backdrop-blur-md border border-neutral-content/10 shadow-xl rounded-2xl hover:border-blue-500/50 hover:shadow-blue-500/5 transition-all duration-300 flex flex-col p-6"
    >
      <!-- Categoría Cabecera -->
      <div class="flex items-center gap-3 mb-6 border-b border-neutral-content/10 pb-4">
        <Icon :icon="category.icon" class="w-8 h-8 text-blue-500" />
        <h3 class="font-bold text-xl text-base-content">
          {{ t(`skills.categories.${category.key}`) }}
        </h3>
      </div>

      <!-- Skills List -->
      <div class="flex flex-col gap-3">
        <div
          v-for="skill in category.skills"
          :key="skill.name"
          class="flex items-center gap-3 bg-base-100/30 p-2 rounded-lg hover:bg-base-100/60 transition-colors duration-200"
        >
          <!-- Skill Icon -->
          <div class="w-8 h-8 flex items-center justify-center bg-white p-1 rounded-md shadow-sm">
            <Icon :icon="skill.icon" class="max-w-full max-h-full" />
          </div>
          <!-- Skill Name -->
          <span class="text-sm font-medium text-base-content/90">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
