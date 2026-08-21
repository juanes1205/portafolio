<script setup>
import { computed, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const cvUrl = computed(() => {
  return locale.value === "es"
    ? "/resume/CV_Juan_Esteban_Restrepo_Ossa_ES.pdf"
    : "/resume/CV_Juan_Esteban_Restrepo_Ossa_EN.pdf";
});

// Animación de entrada
const visible = ref(false);
onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => { visible.value = true; }, 80);
  });
});
</script>

<template>
  <div class="hero min-h-screen p-10 pl-10 pr-10">
    <div
      class="hero-content flex-col lg:flex-row hero-animate"
      :class="{ 'hero-visible': visible }"
    >
      <!-- Imagen con animación desde la izquierda -->
      <div class="md:w-2/5 flex-shrink-0" :class="{ 'img-visible': visible }">
        <img
          src="/imgs/me.png"
          alt="Juan Esteban Restrepo Ossa - Ingeniero de Sistemas"
          class="w-full max-w-[220px] md:max-w-[260px] lg:max-w-[320px] h-auto"
          style="mask-image: linear-gradient(black 80%, transparent)"
        />
      </div>

      <!-- Contenido -->
      <div>
        <div class="md:text-center lg:text-start">
          <!-- Badge disponible -->
          <div class="indicator">
            <span class="indicator-item badge badge-xs badge-success rounded-xl"></span>
            <a
              href="https://www.linkedin.com/in/juan-esteban-restrepo-978a8b7b"
              target="_blank"
              class="btn btn-xs btn-block btn-success btn-outline mb-4 rounded-lg"
            >{{ $t("hero.available") }}</a>
          </div>

          <!-- Título -->
          <h1 class="text-5xl font-bold">
            {{ $t("hero.title") }}<span class="text-blue-500">Esteban</span>!
          </h1>

          <!-- Descripción -->
          <p class="py-6 text-xl">
            {{ $t("hero.description") }}
          </p>

          <!-- Botones con jerarquía visual -->
          <div class="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
            <!-- CV — botón principal (CTA primario) -->
            <a :href="cvUrl" download class="btn btn-primary rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-200">
              <Icon icon="pepicons-pop:cv" width="22" height="22" />
              {{ $t("hero.actions.cv") }}
            </a>

            <!-- Email — CTA secundario -->
            <a
              href="mailto:esteban.restrepo.11@gmail.com"
              class="btn btn-outline rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <Icon icon="mdi:email" width="22" height="22" />
              {{ $t("hero.actions.contact") }}
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/juan-esteban-restrepo-978a8b7b"
              target="_blank"
              class="btn btn-outline rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <Icon icon="uil:linkedin" width="22" height="22" />
              {{ $t("hero.actions.linkedin") }}
            </a>

            <!-- GitHub -->
            <a
              class="btn btn-outline rounded-lg hover:scale-105 transition-transform duration-200"
              href="https://github.com/juanes1205"
              target="_blank"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" width="22" height="22" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animación de contenido — slide-up + fade */
.hero-animate {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.hero-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animación de imagen — slide-in desde la izquierda */
.img-animate {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
}
.img-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
