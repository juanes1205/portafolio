<script setup>
import { ref, onMounted } from "vue";
import { db } from "../config/firebaseConfig";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { Icon } from "@iconify/vue";

const visitas = ref(0);

onMounted(async () => {
  try {
    const visitasRef = doc(db, "visitas", "ovN2pswqc9CRlx3Ur17P");
    const docSnap = await getDoc(visitasRef);

    if (docSnap.exists()) {
      await updateDoc(visitasRef, {
        contador: increment(1),
      });

      visitas.value = docSnap.data().contador + 1;
    } else {
      await setDoc(visitasRef, {
        contador: 1,
      });

      visitas.value = 1;
    }
  } catch (error) {
    console.error("Error actualizando visitas:", error);
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
         
        </div>
        <div class="stat-title">{{ $t("stats.visits") }}</div>
        <div class="stat-value">{{ visitas }}</div>
        <div class="stat-desc">{{ $t("stats.since") }} 2026</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <Icon
            icon="mdi:trophy-outline"
            class="w-9 h-9 text-amber-500 transition duration-300 hover:scale-125"
          />
        </div>
        <div class="stat-title">{{ $t("stats.experience") }}</div>
        <div class="stat-value">+9</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <Icon
            icon="mdi:laptop"
            class="w-9 h-9 text-green-500 transition duration-300 hover:scale-125"
          />
        </div>
        <div class="stat-title">{{ $t("stats.applications") }}</div>
        <div class="stat-value">+50</div>
      </div>
    </div>
  </div>
  <div>
    <div
      class="stats shadow flex justify-center text-center items-center mx-5 border-2 my-5"
    >
      <div class="stat">
        <div class="stat-figure text-secondary">
          <Icon
            icon="mdi:cog-outline"
            class="w-9 h-9 text-purple-500 transition duration-300 hover:scale-125"
          />
        </div>
        <div class="stat-title">{{ $t("stats.technologies") }}</div>
        <div class="stat-value">+20</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-secondary">
          <Icon
            icon="mdi:cloud-check-outline"
            class="w-9 h-9 text-cyan-500 transition duration-300 hover:scale-125"
          />
        </div>
        <div class="stat-title">{{ $t("stats.availability") }}</div>
        <div class="stat-value">99.9%</div>
      </div>
    </div>
  </div>
</template>
