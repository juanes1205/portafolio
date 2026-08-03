<script setup>
import HeroSection from "@/components/layout/HeroSection.vue";
import StatsSection from "@/components/Stats.vue";
import TimeLine from "@/components/TimeLine.vue";
import Sections from "@/components/Sections.vue";
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
  </main>
</template>
