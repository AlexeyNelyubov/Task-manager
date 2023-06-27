<template>
  <Transition appear name="tasks">
    <main class="tasks-main">
      <h1 class="tasks-main__title">Определи свои цели!</h1>
    </main>
  </Transition>
</template>

<style>
.tasks-main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.tasks-main__title {
  margin-top: 10vh;
  font: var(--text-size) var(--text-style);
  color: var(--text-color);
}

.tasks-enter-active {
  transition: opacity 1.5s ease;
}

.tasks-enter-from {
  opacity: 0;
}
</style>
