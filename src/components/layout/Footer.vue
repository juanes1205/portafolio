<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <footer
    class="bg-neutral text-neutral-content mt-15 border-t border-base-300"
  >
    <div class="container mx-auto px-6 py-4">
      <!-- Contenido principal -->
      <div
        class="flex flex-col md:flex-row items-center md:items-center justify-between gap-8"
      >
        <!-- Logo + información -->
        <div
          class="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4"
        >
          <RouterLink to="/" aria-label="Ir al inicio">
            <img
              src="/logo-jero.jpg"
              alt="Logo JER - Juan Esteban Restrepo"
              class="w-20 h-14 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </RouterLink>

          <div>
            <h3 class="text-lg font-bold">
              {{ $t("footer.title") }}
            </h3>

            <p class="text-sm text-base-content/70">
              {{ $t("footer.role") }}
            </p>

            <div
              class="flex flex-wrap justify-center sm:justify-start gap-2 mt-2 text-xs"
            >
              <span class="badge badge-outline">
                {{ $t("footer.skill.web") }}
              </span>

              <span class="badge badge-outline">
                {{ $t("footer.skill.cloud") }}
              </span>

              <span class="badge badge-outline">
                {{ $t("footer.skill.devops") }}
              </span>
            </div>
          </div>
        </div>

        <!-- Redes sociales -->
        <nav>
          <h6 class="footer-title text-center md:text-right mb-3">
            {{ $t("footer.social") }}
          </h6>

          <div class="flex justify-center md:justify-end gap-2">
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
      <div class="divider opacity-30"></div>

      <!-- Copyright -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-base-content/60"
      >
        <p>
          {{ $t("footer.copyright") }}
        </p>
      </div>
    </div>
  </footer>
</template>