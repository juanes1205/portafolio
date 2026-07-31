<script setup>
import { ref, onMounted } from "vue";
import { db } from "../config/firebaseConfig";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

const visitas = ref(0);

onMounted(async () => {
  //referencia al doc visitasç
  const visitasRef = doc(db, "visitas", "ovN2pswqc9CRlx3Ur17P");
  //obtener el doc
  const docSnap = await getDoc(visitasRef);

  if (docSnap.exists()) {
    //actualziar contador
    await updateDoc(visitasRef, { contador: increment(1) });
    console.log("Visita actualizada");
    visitas.value = docSnap.data().contador;
  } else {
    await updateDoc(visitasRef, { visitas: 800 });
    visitas.value = 1;
  }
});
</script>
<template>
  <div>
    <div
      class="stats shadow flex justify-center text-center items-center mx-5 border-2 my-5"
    >
      <div class="stat flex-1 min-w-[200px] m-2">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">{{ $t("stats.visits") }}</div>
        <div class="stat-value">{{ visitas }}</div>
        <div class="stat-desc">{{ $t("stats.since") }} 2026</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div class="stat-title">{{ $t("stats.projects") }}</div>
        <div class="stat-value">45</div>
        <div class="stat-desc">↗︎10(85%)</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div class="stat-title">{{ $t("stats.frameworks") }}</div>
        <div class="stat-value">+15</div>
        <div class="stat-desc">↗︎15(30%)</div>
      </div>
    </div>
  </div>
</template>
