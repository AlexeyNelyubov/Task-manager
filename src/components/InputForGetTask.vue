<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  currentTask?: string;
}>();

const task = ref("");
if (props.currentTask) {
  task.value = props.currentTask;
}
</script>

<template>
  <input
    placeholder="Добавить задачу"
    class="input-for-change"
    v-model="task"
    @change="$emit('add-task', task), (task = '')"
    autofocus
  />
</template>

<style>
.input-for-change {
  width: 45%;
  padding: 1vh 2vw;
  font-size: var(--text-size);
  border: none;
  outline: none;
}
</style>
