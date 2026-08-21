<script setup>
import { Icon } from "@iconify/vue";
import { Vue3Marquee } from "vue3-marquee";

const technologies = [
  { name: "Vue.js",       icon: "logos:vue" },
  { name: "React",        icon: "logos:react" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Bootstrap",    icon: "logos:bootstrap" },
  { name: "daisyUI",      icon: "logos:daisyui" },
  { name: "HTML5",        icon: "logos:html-5" },
  { name: "CSS3",         icon: "logos:css-3" },
  { name: "JavaScript",   icon: "logos:javascript" },
  { name: "PHP",          icon: "logos:php" },
  { name: "Laravel",      icon: "logos:laravel" },
  { name: "Firebase",     icon: "logos:firebase" },
  { name: "MySQL",        icon: "logos:mysql" },
  { name: "MariaDB",      icon: "logos:mariadb" },
  { name: "PostgreSQL",   icon: "logos:postgresql" },
  { name: "GitHub",       icon: "logos:github-icon" },
  { name: "Docker",       icon: "logos:docker" },
  { name: "AWS",          icon: "logos:aws" },
  { name: "Linux",        icon: "logos:linux-tux" },
];

const highlights = [
  {
    icon: "mdi:code-braces",
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
    titleKey: "about.highlights.dev.title",
    descKey: "about.highlights.dev.desc",
  },
  {
    icon: "mdi:cloud-sync",
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-400/10",
    titleKey: "about.highlights.cloud.title",
    descKey: "about.highlights.cloud.desc",
  },
  {
    icon: "mdi:shield-lock-outline",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-400/10",
    titleKey: "about.highlights.security.title",
    descKey: "about.highlights.security.desc",
  },
];
</script>

<template>
  <div class="mx-auto">
    <div class="flex flex-col md:flex-row gap-8 items-start">

      <!-- Texto principal -->
      <div class="flex-1 space-y-6">
        <!-- Intro -->
        <div class="mockup-code rounded-xl">
          <div class="p-4 m-2 space-y-3">
            <p class="font-bold text-base text-blue-300">{{ $t("about.me.1.p1") }}</p>
            <p class="text-sm leading-relaxed">{{ $t("about.me.1.p2") }}</p>
            <p class="text-sm leading-relaxed">{{ $t("about.me.1.p3") }}</p>
          </div>
        </div>

        <!-- Highlights con íconos -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="h in highlights"
            :key="h.titleKey"
            class="flex flex-col gap-2 p-4 rounded-xl border border-neutral-content/10 bg-neutral/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
          >
            <div :class="['w-9 h-9 rounded-lg flex items-center justify-center', h.bgClass]">
              <Icon :icon="h.icon" :class="['w-5 h-5', h.colorClass]" />
            </div>
            <h4 class="font-bold text-sm text-base-content">{{ $t(h.titleKey) }}</h4>
            <p class="text-xs text-base-content/70 leading-relaxed">{{ $t(h.descKey) }}</p>
          </div>
        </div>

        <!-- CTA final -->
        <p class="text-sm leading-relaxed text-base-content/80 italic border-l-2 border-blue-500/50 pl-4">
          {{ $t("about.me.1.p6") }}
        </p>
      </div>

      <!-- Foto -->
      <div class="md:w-2/5 flex-shrink-0">
        <img
          src="/imgs/me2.png"
          alt="Juan Esteban Restrepo Ossa"
          class="rounded-xl shadow-2xl w-full transition-all duration-300 hover:scale-105"
          width="384"
          height="384"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style="mask-image: linear-gradient(black 50%, transparent); content-visibility: auto;"
        />
      </div>
    </div>
  </div>

  <!-- Marquee de tecnologías -->
  <Vue3Marquee
    :gradient="true"
    gradient-color="#000000"
    :gradient-length="15"
    :pause-on-hover="true"
    :hover-pause="true"
    :duration="30"
    class="mt-10"
  >
    <div class="flex items-center gap-4 px-2 py-4">
      <div
        v-for="technology in technologies"
        :key="technology.name"
        class="group flex flex-col items-center justify-center gap-2"
      >
        <div class="flex items-center justify-center w-20 h-16 p-2 bg-white rounded-xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <Icon :icon="technology.icon" width="48" height="48" class="max-w-full max-h-full" />
        </div>
        <span class="text-xs font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
          {{ technology.name }}
        </span>
      </div>
    </div>
  </Vue3Marquee>
</template>
