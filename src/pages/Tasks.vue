<script setup lang="ts">
import { ref } from "vue";

import AllTasks from "@/components/AllTasks.vue";

const task = ref("");
const newTask = ref("");

const addNewTask = () => {
  newTask.value = task.value;
  task.value = "";
};
</script>

<template>
  <Transition appear name="tasks">
    <main class="tasks-main">
      <h1 class="tasks-main__title">Определи свои цели!</h1>
      <input
        placeholder="Add a new task"
        v-model="task"
        class="tasks-main__task-field"
        @change="addNewTask"
      />
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
  margin-top: 10vh;
  font: var(--title-size) var(--text-style);
}

.tasks-enter-active {
  transition: opacity 1.5s ease;
}

.tasks-enter-from {
  opacity: 0;
}

.tasks-main__task-field {
  margin-top: 8vh;
  padding: 1vh 2vw;
  font-size: var(--text-size);
  border: none;
  outline: none;
}

.tasks-main__all-tasks {
  width: 100%;
  min-height: 50vh;
  padding: 2.4rem;
}
</style>
