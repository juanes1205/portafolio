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

// Valores destino para la animación
const stats = [
  { key: "experience", target: 9, prefix: "+", suffix: "", display: ref(0) },
  { key: "applications", target: 50, prefix: "+", suffix: "", display: ref(0) },
  { key: "technologies", target: 20, prefix: "+", suffix: "", display: ref(0) },
  { key: "availability", target: 99, prefix: "", suffix: ".9%", display: ref(0) },
];

// Animación countUp
const animateCount = (stat) => {
  const duration = 1800;
  const start = performance.now();
  const step = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    stat.display.value = Math.floor(eased * stat.target);
    if (progress < 1) requestAnimationFrame(step);
    else stat.display.value = stat.target;
  };
  requestAnimationFrame(step);
};

const visitasAnimated = ref(0);
const animateVisitas = (target) => {
  const duration = 1800;
  const start = performance.now();
  const step = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    visitasAnimated.value = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else visitasAnimated.value = target;
  };
  requestAnimationFrame(step);
};

onMounted(async () => {
  // Cargar visitas
  try {
    if (!contadorId) throw new Error("VITE_VISIT_COUNTER_ID no está definido");
    const storageKey = `portfolio_last_visit_${contadorId}`;
    const ultimaVisita = localStorage.getItem(storageKey);
    const ahora = Date.now();
    const debeContar = !ultimaVisita || ahora - Number(ultimaVisita) >= INTERVALO_VISITA;
    const visitasRef = doc(db, "visitas", contadorId);
    const docSnap = await getDoc(visitasRef);

    if (!docSnap.exists()) {
      await setDoc(visitasRef, { contador: 1 });
      visitas.value = 1;
      localStorage.setItem(storageKey, ahora.toString());
    } else {
      const contadorActual = docSnap.data().contador || 0;
      if (debeContar) {
        await updateDoc(visitasRef, { contador: increment(1) });
        visitas.value = contadorActual + 1;
        localStorage.setItem(storageKey, ahora.toString());
      } else {
        visitas.value = contadorActual;
      }
    }
  } catch (error) {
    console.error("Error actualizando visitas:", error);
  }

  // IntersectionObserver para disparar la animación al hacer scroll
  const statsEl = document.getElementById("stats-section");
  if (!statsEl) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach(animateCount);
          animateVisitas(visitas.value);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(statsEl);
});
</script>

<template>
  <div
    id="stats-section"
    class="stats stats-vertical lg:stats-horizontal shadow flex justify-center text-center items-center mx-5 border-2 my-5"
  >
    <!-- Visitas -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon icon="mdi:eye-outline" class="w-9 h-9 text-blue-500 transition duration-300 hover:scale-125" />
      </div>
      <div class="stat-title">{{ $t("stats.visits") }}</div>
      <div class="stat-value">{{ visitasAnimated }}</div>
      <div class="stat-desc">{{ $t("stats.since") }} 2026</div>
    </div>

    <!-- Experiencia -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon icon="mdi:briefcase-outline" class="w-9 h-9 text-amber-500 transition duration-300 hover:scale-125" />
      </div>
      <div class="stat-title">{{ $t("stats.experience") }}</div>
      <div class="stat-value">+{{ stats[0].display.value }}</div>
    </div>

    <!-- Aplicaciones -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon icon="mdi:application-brackets-outline" class="w-9 h-9 text-green-500 transition duration-300 hover:scale-125" />
      </div>
      <div class="stat-title">{{ $t("stats.applications") }}</div>
      <div class="stat-value">+{{ stats[1].display.value }}</div>
    </div>

    <!-- Tecnologías -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon icon="mdi:code-tags" class="w-9 h-9 text-purple-500 transition duration-300 hover:scale-125" />
      </div>
      <div class="stat-title">{{ $t("stats.technologies") }}</div>
      <div class="stat-value">+{{ stats[2].display.value }}</div>
    </div>

    <!-- Disponibilidad -->
    <div class="stat min-w-[180px]">
      <div class="stat-figure">
        <Icon icon="mdi:cloud-check-outline" class="w-9 h-9 text-cyan-500 transition duration-300 hover:scale-125" />
      </div>
      <div class="stat-title">{{ $t("stats.availability") }}</div>
      <div class="stat-value">{{ stats[3].display.value }}.9%</div>
    </div>
  </div>
</template>
