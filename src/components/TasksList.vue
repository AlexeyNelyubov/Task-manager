<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { deleteTask } from "@/composable/deleteTask.ts";
import { checkLocalStorage } from "@/composable/checkLocalStorage.ts";

const props = defineProps<{
  newTask: string;
}>();

const emit = defineEmits<{
  (e: "replace-task-to-done-tasks", task: string): void;
}>();

const tasks = ref<string[]>([]);

checkLocalStorage("tasksList", tasks.value);

watch(
  () => props.newTask,
  () => {
    tasks.value.push(props.newTask);
    localStorage.setItem("tasksList", tasks.value);
  }
);

const replaceTaskToDoneTasks = (task: string): void => {
  emit("replace-task-to-done-tasks", task);
  deleteTask(tasks.value, task, "tasksList");
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
          @click="deleteTask(tasks, task, 'tasksList')"
        >
          x
        </button>
      </div>
    </ul>
  </div>
</template>

<style></style>

//style for component located in parent component AllTasks.vue
@/composable/deleteTask
