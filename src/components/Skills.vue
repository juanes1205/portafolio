<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Niveles: advanced = 90%, intermediate = 65%, basic = 40%
const LEVEL_MAP = {
  advanced:     { key: "advanced",     pct: 90, color: "bg-blue-500" },
  intermediate: { key: "intermediate", pct: 65, color: "bg-cyan-400" },
  basic:        { key: "basic",        pct: 40, color: "bg-slate-400" },
};

const skillCategories = [
  {
    key: "frontend",
    icon: "mdi:web",
    skills: [
      { name: "Vue.js",        icon: "logos:vue",               level: "advanced" },
      { name: "JavaScript",    icon: "logos:javascript",        level: "advanced" },
      { name: "HTML5",         icon: "logos:html-5",            level: "advanced" },
      { name: "CSS3",          icon: "logos:css-3",             level: "advanced" },
      { name: "Tailwind CSS",  icon: "logos:tailwindcss-icon",  level: "intermediate" },
      { name: "React",         icon: "logos:react",             level: "intermediate" },
      { name: "daisyUI",       icon: "logos:daisyui",           level: "intermediate" },
      { name: "Bootstrap",     icon: "logos:bootstrap",         level: "intermediate" },
    ]
  },
  {
    key: "backend",
    icon: "mdi:server",
    skills: [
      { name: "PHP",         icon: "logos:php",     level: "advanced" },
      { name: "Laravel",     icon: "logos:laravel", level: "advanced" },
      { name: "Node.js",     icon: "logos:nodejs",  level: "intermediate" },
      { name: "Express.js",  icon: "logos:express", level: "intermediate" },
      { name: "REST APIs",   icon: "hugeicons:api", level: "advanced" },
    ]
  },
  {
    key: "cloud",
    icon: "mdi:cloud-sync",
    skills: [
      { name: "AWS",         icon: "logos:aws",                          level: "intermediate" },
      { name: "Docker",      icon: "logos:docker",                       level: "advanced" },
      { name: "Linux",       icon: "logos:linux-tux",                    level: "advanced" },
      { name: "Nginx",       icon: "logos:nginx",                        level: "advanced" },
      { name: "Apache",      icon: "logos:apache",                       level: "advanced" },
      { name: "PowerShell",  icon: "material-icon-theme:powershell",     level: "intermediate" },
      { name: "VMware",      icon: "logos:vmware",                       level: "intermediate" },
    ]
  },
  {
    key: "databases",
    icon: "mdi:database",
    skills: [
      { name: "PostgreSQL",  icon: "logos:postgresql",  level: "intermediate" },
      { name: "MariaDB",     icon: "logos:mariadb",     level: "advanced" },
      { name: "MySQL",       icon: "logos:mysql",       level: "advanced" },
      { name: "Firebase",    icon: "logos:firebase",    level: "intermediate" },
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
          class="flex flex-col gap-1.5 bg-base-100/30 px-3 py-2 rounded-lg hover:bg-base-100/60 transition-colors duration-200"
        >
          <!-- Icono + Nombre + Badge nivel -->
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 flex items-center justify-center bg-white p-1 rounded-md shadow-sm flex-shrink-0">
              <Icon :icon="skill.icon" class="max-w-full max-h-full" />
            </div>
            <span class="text-sm font-medium text-base-content/90 flex-1">{{ skill.name }}</span>
            <span
              class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
              :class="{
                'bg-blue-500/15 text-blue-400': skill.level === 'advanced',
                'bg-cyan-400/15 text-cyan-400': skill.level === 'intermediate',
                'bg-slate-400/15 text-slate-400': skill.level === 'basic',
              }"
            >
              {{ t(`skills.levels.${skill.level}`) }}
            </span>
          </div>

          <!-- Barra de progreso -->
          <div class="w-full h-1 bg-base-100/40 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-700"
              :class="LEVEL_MAP[skill.level].color"
              :style="{ width: LEVEL_MAP[skill.level].pct + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
