<script setup>
import { RouterLink, RouterView } from "vue-router";
// Componentes
import Navbar from "./components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen max-w-screen-lg mx-auto pl-4 pr-4 mt-5 mb-48 sm:mb-0"
  >
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
  <Footer />
</template>

<style scoped></style>
