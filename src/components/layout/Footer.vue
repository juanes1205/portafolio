<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <footer
    class="bg-neutral text-neutral-content mt-15 border-t border-base-300"
  >
    <div class="container mx-auto px-6 py-8">
      <!-- Contenido principal -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start"
      >
        <!-- Columna 1: Logo + información -->
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
        >
          <RouterLink to="/" aria-label="Ir al inicio" class="flex-shrink-0">
            <img
              src="/logo-jero.jpg"
              alt="Logo JER - Juan Esteban Restrepo"
              class="w-20 h-14 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </RouterLink>
          <div>
            <h3 class="text-lg font-bold">{{ $t("footer.title") }}</h3>
            <p class="text-sm text-base-content/70 mt-0.5">
              {{ $t("footer.role") }}
            </p>
            <div
              class="flex flex-wrap justify-center sm:justify-start gap-2 mt-2 text-xs"
            >
              <span class="badge badge-outline">{{
                $t("footer.skill.web")
              }}</span>
              <span class="badge badge-outline">{{
                $t("footer.skill.cloud")
              }}</span>
              <span class="badge badge-outline">{{
                $t("footer.skill.devops")
              }}</span>
            </div>
          </div>
        </div>

        <!-- Columna 2: Navegación rápida -->
        <div class="flex flex-col items-center sm:items-start gap-2">
          <h6 class="footer-title text-center sm:text-left mb-1">
            {{ $t("footer.nav.title") }}
          </h6>
          <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-center sm:text-left">
            <RouterLink to="/" class="link link-hover text-sm">{{
              $t("footer.nav.home")
            }}</RouterLink>
            <RouterLink
              :to="{ path: '/', hash: '#timeline' }"
              class="link link-hover text-sm"
              >{{ $t("footer.nav.experience") }}</RouterLink
            >
            <RouterLink to="/Projects" class="link link-hover text-sm">{{
              $t("footer.nav.projects")
            }}</RouterLink>
            <RouterLink
              :to="{ path: '/', hash: '#skills' }"
              class="link link-hover text-sm"
              >{{ $t("footer.nav.skills") }}</RouterLink
            >
            <RouterLink
              :to="{ path: '/', hash: '#education' }"
              class="link link-hover text-sm"
              >{{ $t("footer.nav.education") }}</RouterLink
            >
            <RouterLink
              :to="{ path: '/', hash: '#contact' }"
              class="link link-hover text-sm"
              >{{ $t("footer.nav.contact") }}</RouterLink
            >
          </div>
        </div>

        <!-- Columna 3: Redes sociales -->
        <nav class="flex flex-col items-center sm:items-start gap-2">
          <h6 class="footer-title text-center sm:text-left mb-1">
            {{ $t("footer.social") }}
          </h6>
          <div class="flex gap-2">
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/juan-esteban-restrepo-978a8b7b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="btn btn-ghost btn-circle hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Icon icon="uil:linkedin" width="25" height="25" />
            </a>
            <!-- GitHub -->
            <a
              href="https://github.com/juanes1205"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="btn btn-ghost btn-circle hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              <Icon icon="mdi:github" width="25" height="25" />
            </a>
            <!-- Email -->
            <a
              href="mailto:esteban.restrepo.11@gmail.com"
              aria-label="Correo electrónico"
              class="btn btn-ghost btn-circle hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <Icon icon="mdi:email-outline" width="25" height="25" />
            </a>
          </div>
        </nav>
      </div>

      <!-- Separador -->
      <div class="divider opacity-30 my-4"></div>

      <!-- Copyright -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-base-content/60"
      >
        <p>{{ $t("footer.copyright") }}</p>
        <p class="text-xs">
          {{ $t("footer.made") }}
        </p>
      </div>
    </div>
  </footer>
</template>
