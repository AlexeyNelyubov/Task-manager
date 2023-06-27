<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps<{
  doneTask: string;
}>();

// const emit = defineEmits<{
//   (e: "replace-task-to-done-tasks", task: string): void;
// }>();

const doneTasks = ref<string[]>([]);

watch(
  () => props.doneTask,
  () => {
    doneTasks.value.push(props.doneTask);
  }
);

const deliteDoneTask = (donetask: string): void => {
  doneTasks.value.splice(doneTasks.value.indexOf(donetask), 1);
};

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
          @click="deliteDoneTask(doneTask)"
        >
          x
        </button>
      </div>
    </ul>
  </div>
</template>

<style></style>
//style for component located in parent component AllTasks.vue
