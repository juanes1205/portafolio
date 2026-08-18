<script setup>
//icons
import { Icon } from "@iconify/vue";
import { Vue3Marquee } from "vue3-marquee";

const technologies = [
  {
    name: "Vue.js",
    icon: "logos:vue",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
  {
    name: "daisyUI",
    icon: "logos:daisyui",
  },
  {
    name: "HTML5",
    icon: "logos:html-5",
  },
  {
    name: "CSS3",
    icon: "logos:css-3",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "MariaDB",
    icon: "logos:mariadb",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
  },
];
</script>

<template>
  <div class="mx-auto">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-1">
        <div class="mockup-code rounded-lg">
          <div class="space-y-4 p-2 m-3">
            <p>
              {{ $t("about.me.1.p1") }}
            </p>
            <p>
              {{ $t("about.me.1.p2") }}
            </p>
            <p>
              {{ $t("about.me.1.p3") }}
            </p>
            <p>
              {{ $t("about.me.1.p4") }}
            </p>
            <p>
              {{ $t("about.me.1.p5") }}
            </p>
            <p>
              {{ $t("about.me.1.p6") }}
            </p>
          </div>
        </div>
      </div>

      <div class="md:w-1/2">
        <img
          src="/imgs/me2.png"
          alt="about"
          class="rounded-lg shadow-2xl w-full transition-all duration-300 hover:scale-105"
          width="384"
          height="384"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style="
            mask-image: linear-gradient(black 50%, transparent);
            content-visibility: auto;
          "
        />
      </div>
    </div>
  </div>
  <!-- tecnologias -->
  <Vue3Marquee
    :gradient="true"
    gradient-color="#000000"
    :gradient-length="15"
    :pause-on-hover="true"
    :hover-pause="true"
    :duration="30"
  >
    <div class="flex items-center gap-4 px-2 py-4">
      <div
        v-for="technology in technologies"
        :key="technology.name"
        class="group flex flex-col items-center justify-center gap-2"
      >
        <!-- Logo -->
        <div
          class="flex items-center justify-center w-20 h-16 p-2 bg-white rounded-xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
        >
          <Icon
            :icon="technology.icon"
            width="48"
            height="48"
            class="max-w-full max-h-full"
          />
        </div>

        <!-- Nombre -->
        <span
          class="text-xs font-medium text-white/80 transition-colors duration-300 group-hover:text-white"
        >
          {{ technology.name }}
        </span>
      </div>
    </div>
  </Vue3Marquee>
</template>
