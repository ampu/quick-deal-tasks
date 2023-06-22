<template>
  <div class="TaskItem">
    <span>{{ props.task.title }}</span>
    <button type="button" @click="emit(`removeTask`, props.task)">&times;</button>
  </div>
</template>

<script setup lang="ts">
import {TaskModel} from '../utils/task-helpers.ts'

const props = defineProps<{
  task: TaskModel,
}>()

const emit = defineEmits<{
  (type: `removeTask`, value: TaskModel): void,
}>()
</script>

<style lang="scss" scoped>
.TaskItem {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
</style>
