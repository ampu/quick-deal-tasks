<template>
  <div class="AppHeader">
    <RouterLink :to="RoutePath.INDEX">Home</RouterLink>
    <RouterLink :to="RoutePath.TASKS">Tasks</RouterLink>
  </div>
</template>

<script setup lang="ts">
import {RoutePath} from "../utils/path-helpers.ts";
</script>

<style lang="scss" scoped>
.AppHeader {
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
