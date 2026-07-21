<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/layout/Navbar.vue";
</script>

<template>
  <div
    class="bg-base-200 min-h-screen max-w-screen-lg mx-auto pl-4 pr-4 mt-5 mb-48 sm:mb-0"
  >
    <header>
      <Navbar />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
