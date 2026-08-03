<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const cvUrl = computed(() => {
  return locale.value === "es"
    ? "/resume/CV_Juan_Esteban_Restrepo_Ossa_ES.pdf"
    : "/resume/CV_Juan_Esteban_Restrepo_Ossa_EN.pdf";
});
</script>
<template>
  <div class="hero min-h-screen p-10 pl-10 pr-10">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="/imgs/me.png"
        alt="me"
        class="w-full max-w-[220px] md:max-w-[260px] lg:max-w-[320px] h-auto"
        style="mask-image: linear-gradient(black 80%, transparent)"
      />
      <div>
        <div class="md:text-center lg:text-start">
          <div class="indicator">
            <span
              class="indicator-item badge badge-xs badge-success rounded-xl"
            ></span>
            <a
              href="https://www.linkedin.com/in/juan-esteban-restrepo-978a8b7b"
              target="_blank"
              class="btn btn-xs btn-block btn-success btn-outline mb-4 rounded-lg"
              >{{ $t("hero.available") }}</a
            >
          </div>
          <h1 class="text-5xl font-bold">
            {{ $t("hero.title") }}<span class="text-blue-500">Esteban</span>!
          </h1>
          <!-- presentacion -->
          <p class="py-6 text-xl">
            {{ $t("hero.description") }}
          </p>
          <!-- btns -->
          <div class="flex flex-wrap gap-2 mt-4 justify-center">
            <a
              href="mailto:esteban.restrepo.11@gmail.com"
              class="btn btn-outline rounded"
            >
              <Icon icon="mdi:email" width="24" height="24" />
              {{ $t("hero.actions.contact") }}
            </a>
            <a :href="cvUrl" download class="btn btn-outline rounded">
              <Icon icon="pepicons-pop:cv" width="24" height="24" />
              {{ $t("hero.actions.cv") }}
            </a>
            <a
              class="btn btn-outline rounded"
              href="https://github.com/juanes1205"
              target="_blank"
            >
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
