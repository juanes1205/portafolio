<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import Projects from "@/components/Projects.vue";
import { Icon } from "@iconify/vue";

const { t } = useI18n();

const selectedFilter = ref("all");

const projectsList = [
  {
    titleKey: "projects.proy.0.title",
    descriptionKey: "projects.proy.0.description",
    technologies: ["Laravel", "PHP", "VueJs", "MariaDB"],
    images: [
      "/proyectos/Sistema_CVI/01.jpg",
      "/proyectos/Sistema_CVI/02.jpg",
      "/proyectos/Sistema_CVI/03.jpg",
    ],
    altText: "Sistema_CVI",
    githubUrl: "https://github.com/juanes1205/sistema_cvi",
    previewUrl: "",
    type: "web",
  },
  {
    titleKey: "projects.proy.1.title",
    descriptionKey: "projects.proy.1.description",
    technologies: ["Laravel", "PHP", "VueJs", "MariaDB"],
    images: [
      "/proyectos/MSN/01.jpg",
      "/proyectos/MSN/02.jpg",
      "/proyectos/MSN/03.jpg",
    ],
    altText: "MSN",
    githubUrl: "https://github.com/juanes1205/msn",
    previewUrl: "",
    type: "web",
  },
  {
    titleKey: "projects.proy.2.title",
    descriptionKey: "projects.proy.2.description",
    technologies: ["PHP", "MariaDB"],
    images: [
      "/proyectos/AD_Ventas/01.png",
      "/proyectos/AD_Ventas/02.png",
      "/proyectos/AD_Ventas/03.png",
      "/proyectos/AD_Ventas/04.png",
    ],
    altText: "ADVentas",
    githubUrl: "",
    previewUrl: "",
    type: "web",
  },
  {
    titleKey: "projects.proy.3.title",
    descriptionKey: "projects.proy.3.description",
    technologies: ["NodeJs","Express", "React Native","SQLite"],
    images: [
      "/proyectos/Pokemon/01.jpg",
      "/proyectos/Pokemon/02.jpg",
      "/proyectos/Pokemon/03.jpg",
      "/proyectos/Pokemon/04.jpg",
    ],
    altText: "Pokemon",
    githubUrl: "https://github.com/juanes1205/pokemon_react_native",
    previewUrl: "",
    type: "web",
  },
];

const filters = [
  { key: "all", labelKey: "projects.filters.all" },
  { key: "Laravel", label: "Laravel" },
  { key: "VueJs", label: "Vue.js" },
  { key: "PHP", label: "PHP" },
  { key: "Node.js", label: "Node.js" },
  { key: "Express", label: "Express" },
  { key: "React Native", label: "React Native" },
  { key: "SQLite", label: "SQLite" },
];

const filteredProjects = computed(() => {
  if (selectedFilter.value === "all") {
    return projectsList;
  }
  return projectsList.filter((project) =>
    project.technologies.includes(selectedFilter.value),
  );
});
</script>

<template>
  <div class="container mx-auto px-4 py-8 mt-12 min-h-screen">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1
        class="text-5xl font-extrabold text-blue-500 tracking-tight mb-4 flex items-center justify-center gap-2"
      >
        <Icon icon="pajamas:work" class="w-10 h-10" />
        {{ t("projects.section.title") }}
      </h1>
      <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
        {{ t("projects.subtitle") }}
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <button
        v-for="filter in filters"
        :key="filter.key"
        @click="selectedFilter = filter.key"
        :class="[
          'btn rounded-lg font-bold px-6 shadow-sm transition-all duration-300 hover:scale-105',
          selectedFilter === filter.key
            ? 'btn-primary text-primary-content shadow-lg shadow-primary/20'
            : 'btn-ghost border border-base-300',
        ]"
      >
        {{ filter.labelKey ? t(filter.labelKey) : filter.label }}
      </button>
    </div>

    <!-- Projects Grid -->
    <TransitionGroup
      tag="div"
      name="project-list"
      class="flex flex-col gap-10 max-w-4xl mx-auto"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.titleKey"
        class="project-item transition-all duration-500"
      >
        <Projects
          :title="t(project.titleKey)"
          :description="t(project.descriptionKey)"
          :technologies="project.technologies"
          :images="project.images"
          :altText="project.altText"
          :githubUrl="project.githubUrl"
          :previewUrl="project.previewUrl"
          :type="project.type"
        />
      </div>
    </TransitionGroup>

    <!-- No Projects Found -->
    <div v-if="filteredProjects.length === 0" class="text-center py-16">
      <Icon
        icon="mdi:folder-open-outline"
        class="w-16 h-16 mx-auto text-base-content/40 mb-4"
      />
      <p class="text-xl text-base-content/50">
        {{ t("projects.empty") }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.project-list-move {
  transition: transform 0.5s ease;
}
</style>
