<script setup lang="ts">
import { ref } from "vue";

import AllTasks from "@/components/AllTasks.vue";
import InputForGetTask from "@/components/InputForGetTask.vue";

const newTask = ref("");

const addNewTask = (task: string): void => {
  console.log(task);
  newTask.value = task;
};
</script>

<template>
  <Transition appear name="tasks">
    <main class="tasks-main">
      <h1 class="tasks-main__title">Определи свои цели!</h1>
      <InputForGetTask @add-task="addNewTask"></InputForGetTask>
      <div class="tasks-main__all-tasks">
        <AllTasks :newTask="newTask"></AllTasks>
      </div>
    </main>
  </Transition>
</template>

<style>
.tasks-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-color);
}

.tasks-main__title {
  margin: 10vh 0 8vh 0;
  font: var(--title-size) var(--text-style);
}

.tasks-enter-active {
  transition: opacity 1.5s ease;
}

.tasks-enter-from {
  opacity: 0;
}

.tasks-main__all-tasks {
  width: 100%;
  min-height: 50vh;
  padding: 2.4rem;
}
</style>
