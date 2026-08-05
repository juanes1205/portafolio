<script setup>
import { Icon } from "@iconify/vue";
import HeroSection from "@/components/layout/HeroSection.vue";
import StatsSection from "@/components/Stats.vue";
import TimeLine from "@/components/TimeLine.vue";
import Sections from "@/components/Sections.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <main>
    <!-- hero section -->
    <HeroSection />
    <!-- stats section -->
    <StatsSection />
    <!-- sections -->
    <!-- timeline -->
    <Sections icon="pajamas:work" title="Timeline">
      <template #title>
        <h2>{{ $t("timeline.section.title") }}</h2>
      </template>
      <div class="pl-4 pr-4 p-5">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <TimeLine
            :title="$t('timeline.experience.1.title')"
            :company="$t('timeline.experience.1.company')"
            :date="$t('timeline.experience.1.date')"
            :description="$t('timeline.experience.1.description')"
          />
          <TimeLine
            :title="$t('timeline.experience.2.title')"
            :company="$t('timeline.experience.2.company')"
            :date="$t('timeline.experience.2.date')"
            :description="$t('timeline.experience.2.description')"
          />
        </ol>
      </div>
    </Sections>
    <!-- projects -->
    <Sections icon="pajamas:work" title="Projects">
      <template #title>
        <h2>{{ $t("projects.section.title") }}</h2>
      </template>

      <section>
        <div class="stack-cards">
          <div class="card">
            <div class="container">
              <Projects
                :title="$t('projects.proy.0.title')"
                :description="$t('projects.proy.0.description')"
                :technologies="['Laravel', 'PHP', 'VueJs', 'MariaDB']"
                imgUrl="/proyectos/Sistema_CVI/01.jpg"
                altText="Sistema_CVI"
                url=""
                type="web"
                githubUrl=""
                previewUrl=""
              />
            </div>
          </div>

          <div class="card">
            <div class="container">
              <Projects
                :title="$t('projects.proy.1.title')"
                :description="$t('projects.proy.1.description')"
               :technologies="['Laravel', 'PHP', 'VueJs', 'MariaDB']"
                imgUrl="/proyectos/MSN/01.jpg"
                altText="MSN"
                url=""
                type="web"
                githubUrl=""
                previewUrl=""
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ver mas -->
      <div class="flex justify-center">
        <RouterLink to="/Projects" class="btn btn-secondary rounded">
          {{ $t("more.text") }} <Icon icon="pajamas:arrow-right" />
        </RouterLink>
      </div>
    </Sections>
  </main>
</template>
