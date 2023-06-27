<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

setTimeout(() => {
  router.push({ name: "TasksPage" });
}, 1500);
</script>

<template>
  <Transition appear name="index">
    <main class="index-main">
      <h1 class="index-main__title">Будь в фокусе своих планов!</h1>
    </main>
  </Transition>
</template>

<style>
.index-main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.index-main__title {
  margin-top: 10vh;
  font: var(--text-size) var(--text-style);
  color: var(--text-color);
}

.index-enter-active {
  transition: opacity 0.5s ease;
}

.index-enter-from {
  opacity: 0;
}
</style>
