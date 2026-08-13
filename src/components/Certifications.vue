<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const academicTimeline = [
  {
    key: "degree1",
    icon: "mdi:school-outline",
    year: "2025"
  },
  {
    key: "degree2",
    icon: "mdi:school-outline",
    year: "2018"
  }
];

const certifications = [
  {
    key: "aws",
    icon: "logos:aws"
  },
  {
    key: "cybersec",
    icon: "mdi:security"
  },
  {
    key: "sql1",
    icon: "mdi:database-search-outline"
  },
  {
    key: "sql2",
    icon: "mdi:database-cog-outline"
  },
  {
    key: "reactnative",
    icon: "logos:react"
  },
  {
    key: "javascript",
    icon: "logos:javascript"
  },
  {
    key: "quality",
    icon: "mdi:check-decagram-outline"
  }
];
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
    <!-- Formación Académica -->
    <div class="card bg-neutral/10 backdrop-blur-md border border-neutral-content/10 shadow-xl p-6 rounded-2xl">
      <div class="flex items-center gap-3 mb-6 border-b border-neutral-content/10 pb-4">
        <Icon icon="mdi:school" class="w-8 h-8 text-blue-500" />
        <h3 class="font-bold text-xl text-base-content">
          {{ t("education.subsections.academic") }}
        </h3>
      </div>

      <div class="flex flex-col gap-6">
        <div
          v-for="degree in academicTimeline"
          :key="degree.key"
          class="flex items-start gap-4 p-3 bg-base-100/30 rounded-xl hover:bg-base-100/50 transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <Icon :icon="degree.icon" class="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h4 class="font-bold text-base-content">{{ t(`education.academicList.${degree.key}.title`) }}</h4>
            <p class="text-sm text-base-content/70 mt-1">{{ t(`education.academicList.${degree.key}.institution`) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Cursos y Certificaciones -->
    <div class="card bg-neutral/10 backdrop-blur-md border border-neutral-content/10 shadow-xl p-6 rounded-2xl">
      <div class="flex items-center gap-3 mb-6 border-b border-neutral-content/10 pb-4">
        <Icon icon="mdi:certificate" class="w-8 h-8 text-blue-500" />
        <h3 class="font-bold text-xl text-base-content">
          {{ t("education.subsections.certs") }}
        </h3>
      </div>

      <div class="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        <div
          v-for="cert in certifications"
          :key="cert.key"
          class="flex items-center gap-4 p-3 bg-base-100/30 rounded-xl hover:bg-base-100/50 transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 p-1">
            <Icon :icon="cert.icon" class="max-w-full max-h-full text-blue-500" />
          </div>
          <span class="text-sm font-semibold text-base-content/95">
            {{ t(`education.certsList.${cert.key}`) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.4);
}
</style>
