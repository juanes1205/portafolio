<script setup>
import { ref, onMounted } from "vue";
import { db } from "../config/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { Icon } from "@iconify/vue";

const visitas = ref(0);

// ID diferente para desarrollo y producción
const contadorId = import.meta.env.VITE_VISIT_COUNTER_ID;

// Tiempo durante el cual el navegador no vuelve a contar
const INTERVALO_VISITA = 24 * 60 * 60 * 1000;

onMounted(async () => {
  try {
    if (!contadorId) {
      throw new Error("VITE_VISIT_COUNTER_ID no está definido");
    }

    // Utilizamos un storageKey diferente para desarrollo y producción.
    const storageKey = `portfolio_last_visit_${contadorId}`;

    const ultimaVisita = localStorage.getItem(storageKey);

    const ahora = Date.now();

    // Determinar si debe contabilizarse una nueva visita.
    const debeContar =
      !ultimaVisita || ahora - Number(ultimaVisita) >= INTERVALO_VISITA;

    const visitasRef = doc(db, "visitas", contadorId);

    const docSnap = await getDoc(visitasRef);

    // El documento todavía no existe.
    if (!docSnap.exists()) {
      await setDoc(visitasRef, {
        contador: 1,
      });

      visitas.value = 1;

      // Guardamos el momento de la visita
      localStorage.setItem(storageKey, ahora.toString());
      return;
    }

    // El documento existe.
    const contadorActual = docSnap.data().contador || 0;

    // Solo incrementamos si: 1. Es la primera visita del navegador o 2. Han pasado 24 horas.
    if (debeContar) {
      await updateDoc(visitasRef, {
        contador: increment(1),
      });

      visitas.value = contadorActual + 1;

      // Actualizamos la fecha de la última visita contabilizada
      localStorage.setItem(storageKey, ahora.toString());
    } else {
      // El usuario ya fue contabilizado durante las últimas 24 horas.
      visitas.value = contadorActual;
    }
  } catch (error) {
    console.error("Error actualizando visitas:", error);
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
