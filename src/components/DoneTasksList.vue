<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { deleteTask } from "@/composable/deleteTask";
import { checkLocalStorage } from "@/composable/checkLocalStorage";

const props = defineProps<{
  doneTask: string;
}>();

const doneTasks = ref<string[]>([]);

checkLocalStorage("doneTasks", doneTasks.value);

watch(
  () => props.doneTask,
  () => {
    doneTasks.value.push(props.doneTask);
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks.value));
  }
);

const numberOfDoneTasks = computed(() => {
  return doneTasks.value ? doneTasks.value.length : 0;
});
</script>

<template>
  <div>
    <p class="tasks-list__number-of-tasks">
      Выполненные задачи: {{ numberOfDoneTasks }}
    </p>
    <ul v-for="doneTask in doneTasks" :key="doneTask.id">
      <div class="tasks-list__single-task">
        <li class="tasks-list__single-task-item">{{ doneTask }}</li>
        <button
          class="tasks-list__single-task-delite"
          @click="deleteTask(doneTasks, doneTask, 'doneTasks')"
        >
          x
        </button>
      </div>
    </ul>
  </div>
</template>

<style></style>
//style for component located in parent component AllTasks.vue
