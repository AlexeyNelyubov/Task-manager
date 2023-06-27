<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps<{
  newTask: string;
}>();

const emit = defineEmits<{
  (e: "replace-task-to-done-tasks", task: string): void;
}>();

const tasks = ref<string[]>([]);

watch(
  () => props.newTask,
  () => {
    tasks.value.push(props.newTask);
    // localStorage.setItem('tasksList', tasks.value);
  }
);

const deliteTask = (task: string): void => {
  tasks.value.splice(tasks.value.indexOf(task), 1);
};

const replaceTaskToDoneTasks = (task: string): void => {
  emit("replace-task-to-done-tasks", task);
  deliteTask(task);
};

const numberOfTasks = computed(() => {
  return tasks.value ? tasks.value.length : 0;
});
</script>

<template>
  <div>
    <p class="tasks-list__number-of-tasks">
      Поставленные задачи: {{ numberOfTasks }}
    </p>
    <ul v-for="task in tasks" :key="task.id">
      <div class="tasks-list__single-task">
        <li class="tasks-list__single-task-item">{{ task }}</li>
        <button
          class="tasks-list__single-task-delite"
          @click="replaceTaskToDoneTasks(task)"
        >
          ✔
        </button>
        <button
          class="tasks-list__single-task-delite"
          @click="deliteTask(task)"
        >
          x
        </button>
      </div>
    </ul>
  </div>
</template>

<style></style>

//style for component located in parent component AllTasks.vue
