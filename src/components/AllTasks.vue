<script setup lang="ts">
import { ref } from "vue";

import TasksList from "@/components/TasksList.vue";
import DoneTasksList from "@/components/DoneTasksList.vue";

const props = defineProps<{
  newTask: string;
}>();

const doneTask = ref("");
</script>

<template>
  <div class="all-tasks">
    <div
      class="all-tasks__tasks-list"
      style="border-right: 2px solid var(--text-color)"
    >
      <TasksList
        :newTask="props.newTask"
        @replace-task-to-done-tasks="(newDoneTask) => (doneTask = newDoneTask)"
      />
    </div>
    <div class="all-tasks__tasks-list">
      <DoneTasksList :doneTask="doneTask" />
    </div>
  </div>
</template>

<style>
.all-tasks {
  display: flex;
}

.all-tasks__tasks-list {
  width: 50%;
  min-height: 50vh;
  padding: 2rem;
}
.tasks-list__number-of-tasks {
  margin-bottom: 5vh;
  font: var(--text-size) var(--text-style);
}

.tasks-list__single-task {
  display: flex;
  align-items: flex-end;
  margin-bottom: 2vh;
  font: var(--text-size) var(--text-style);
}

.tasks-list__single-task-item {
  max-width: 80%;
  margin-left: 3rem;
  word-wrap: break-word;
}

.tasks-list__single-task-delite {
  width: var(--text-size);
  height: var(--text-size);
  margin-left: 1vh;
}
</style>
