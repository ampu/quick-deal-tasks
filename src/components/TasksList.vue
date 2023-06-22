<template>
  <div v-if="store.getters.tasks.length === 0" class="TasksList">
    No tasks present... Please add one
  </div>
  <ul v-if="store.getters.tasks.length > 0" class="TasksList">
    <li
      v-for="task of sortedTasks"
      :key="task.id"
    >
      <TaskItem :task="task" @removeTask="onRemoveTask"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useStore} from 'vuex'

import TaskItem from './TaskItem.vue'

import {TaskModel} from '../utils/task-helpers.ts'

const store = useStore()

const sortedTasks = computed(() => store.getters.tasks.slice().reverse())

const onRemoveTask = (task: TaskModel) => {
  store.dispatch(`removeTask`, task)
}
</script>

<style lang="scss" scoped>
.TasksList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  gap: 20px;
}
</style>
