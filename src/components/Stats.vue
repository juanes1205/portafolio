<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const visitas = ref(0);

onMounted(async () => {
  try {
    const response = await fetch("/api/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No se pudo registrar la visita");
    }

    const data = await response.json();

    visitas.value = data.total ?? 0;
  } catch (error) {
    console.error("Error registrando visita:", error);
  }
});
</script>

<template>
  <div
    class="stats stats-vertical lg:stats-horizontal shadow flex justify-center text-center items-center mx-5 border-2 my-5"
  >
    <!-- Visitas -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon
          icon="mdi:eye-outline"
          class="w-9 h-9 text-blue-500 transition duration-300 hover:scale-125"
        />
      </div>

      <div class="stat-title">
        {{ $t("stats.visits") }}
      </div>

      <div class="stat-value">
        {{ visitas }}
      </div>

      <div class="stat-desc">{{ $t("stats.since") }} 2026</div>
    </div>

    <!-- Experiencia -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon
          icon="mdi:briefcase-outline"
          class="w-9 h-9 text-amber-500 transition duration-300 hover:scale-125"
        />
      </div>

      <div class="stat-title">
        {{ $t("stats.experience") }}
      </div>

      <div class="stat-value">+9</div>
    </div>

    <!-- Aplicaciones -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon
          icon="mdi:application-brackets-outline"
          class="w-9 h-9 text-green-500 transition duration-300 hover:scale-125"
        />
      </div>

      <div class="stat-title">
        {{ $t("stats.applications") }}
      </div>

      <div class="stat-value">+50</div>
    </div>

    <!-- Tecnologías -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon
          icon="mdi:code-tags"
          class="w-9 h-9 text-purple-500 transition duration-300 hover:scale-125"
        />
      </div>

      <div class="stat-title">
        {{ $t("stats.technologies") }}
      </div>

      <div class="stat-value">+20</div>
    </div>

    <!-- Disponibilidad -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon
          icon="mdi:cloud-check-outline"
          class="w-9 h-9 text-cyan-500 transition duration-300 hover:scale-125"
        />
      </div>

      <div class="stat-title">
        {{ $t("stats.availability") }}
      </div>

      <div class="stat-value">99.9%</div>
    </div>
  </div>
</template>
