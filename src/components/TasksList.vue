<script setup lang="ts">
import { ref, computed, watch } from "vue";
import InputForGetTask from "@/components/InputForGetTask.vue";
import { deleteTask } from "@/composable/deleteTask.ts";
import { checkLocalStorage } from "@/composable/checkLocalStorage.ts";

const props = defineProps<{
  newTask: string;
}>();

const emit = defineEmits<{
  (e: "replace-task-to-done-tasks", task: string): void;
}>();

const tasks = ref<string[]>([]);
const indexTaskForChange = ref<number>();
const isChangeTask = ref(false);
const taskForChange = ref("");

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

const getCurrentTask = (currentTask: string): void => {
  console.log(currentTask);
  taskForChange.value = currentTask;
  indexTaskForChange.value = tasks.value.indexOf(currentTask);
  isChangeTask.value = true;
};

const changeTask = (newTask: string): void => {
  tasks.value[indexTaskForChange.value] = newTask;
  localStorage.setItem("tasksList", tasks.value);
};
</script>

<template>
  <div>
    <p class="tasks-list__number-of-tasks">
      Поставленные задачи: {{ numberOfTasks }}
    </p>
    <ul v-for="task in tasks" :key="task.id">
      <div class="tasks-list__single-task">
        <li class="tasks-list__single-task-item" @click="getCurrentTask(task)">
          {{ task }}
        </li>
        <InputForGetTask
          v-if="isChangeTask && taskForChange === task"
          :currentTask="taskForChange"
          @add-task="changeTask"
          class="changed-task"
        ></InputForGetTask>
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

<style>
.changed-task {
  position: absolute;
}
</style>

//style for component located in parent component AllTasks.vue
