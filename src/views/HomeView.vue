<script setup>
import { Icon } from "@iconify/vue";
import HeroSection from "@/components/layout/HeroSection.vue";
import StatsSection from "@/components/Stats.vue";
import TimeLine from "@/components/TimeLine.vue";
import Sections from "@/components/Sections.vue";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Skills from "@/components/Skills.vue";
import Certifications from "@/components/Certifications.vue";
</script>

<template>
  <main>
    <!-- hero section -->
    <HeroSection />
    <!-- stats section -->
    <StatsSection />
    <!-- sections -->
    <!-- timeline -->
    <Sections id="timeline" icon="pajamas:work" title="Timeline">
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
            :current="true"
            :tags="['JavaScript','HTML','CSS','Vue.js', 'PHP', 'Laravel','AWS', 'Docker', 'Linux', 'Nginx' , 'DevOps']"
          />
          <TimeLine
            :title="$t('timeline.experience.2.title')"
            :company="$t('timeline.experience.2.company')"
            :date="$t('timeline.experience.2.date')"
            :description="$t('timeline.experience.2.description')"
            :current="false"
            :tags="['PowerShell', 'VMware', 'Hyper-V', 'Active Directory', 'Windows Server', 'Linux']"
          />
        </ol>
      </div>
    </Sections>
    <!-- projects -->
    <Sections id="projects" icon="pajamas:work" title="Projects">
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
                :images="['/proyectos/Sistema_CVI/01.jpg']"
                altText="Sistema_CVI"
                url=""
                type="web"
                githubUrl="https://github.com/juanes1205/sistema_cvi"
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
                :images="['/proyectos/MSN/01.jpg']"
                altText="MSN"
                url=""
                type="web"
                githubUrl="https://github.com/juanes1205/msn"
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

    <!-- Habilidades -->
    <Sections id="skills" icon="mdi:tools" title="Habilidades">
      <template #title>
        <h2>{{ $t("skills.section.title") }}</h2>
      </template>
      <Skills />
    </Sections>
    
    <!-- About me -->
    <Sections id="about" icon="heroicons:user-circle-solid" title="About me">
      <template #title>
        <h2>{{ $t("about.section.title") }}</h2>
      </template>
      <About />
    </Sections>

    <!-- Educación y Certificaciones -->
    <Sections id="education" icon="mdi:school" title="Educación y Certificaciones">
      <template #title>
        <h2>{{ $t("education.section.title") }}</h2>
      </template>
      <Certifications />
    </Sections>

    <!-- Contact me -->
    <Sections id="contact" icon="heroicons:chat-bubble-left-right-solid" title="Contact">
      <template #title>
        <h2>{{ $t("contact.section.title") }}</h2>
      </template>
      <ContactForm />
    </Sections>
  </main>
</template>
