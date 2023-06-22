<template>
  <form class="TaskForm" @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit" :disabled="!title">Add</button>
  </form>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
const title = ref()

const onSubmit = () => {
  store.dispatch(`addTask`, {title: title.value})
  title.value = undefined
}
</script>

<style lang="scss" scoped>
.TaskForm {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  input {
    flex-grow: 1;
    padding: 10px 16px;

    font: inherit;
  }
}
</style>
