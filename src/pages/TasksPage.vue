<template>
  <main class="TasksPage">
    <h1>Tasks</h1>
    <TaskForm/>
    <TasksList/>
  </main>
</template>

<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue'
import TasksList from '../components/TasksList.vue'
</script>

<style lang="scss" scoped>
.TasksPage {
  display: flex;
  flex-flow: column;
  gap: 30px;
}
</style>
