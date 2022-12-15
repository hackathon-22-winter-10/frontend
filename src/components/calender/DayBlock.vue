<script setup lang="ts">
import { format } from 'date-fns'
defineProps<{
  date: Date
  parsentage: number
  isFirstDay: boolean
}>()
const getDateString = (date: Date, isFirstDay: boolean) => {
  if (isFirstDay) {
    return format(date, 'MM/d')
  }
  if (date.getDate() === 1) {
    return format(date, 'MM/d')
  }
  return format(date, 'd')
}
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.body">
      <span>{{ getDateString(date, isFirstDay) }}</span>
    </div>
  </div>
</template>
<style module>
.body {
  background-color: rgba(255, 100, 100, v-bind(parsentage));
  height: calc(100% - 0.2rem);
  width: calc(100% - 0.2rem);
  margin: auto;
}
.wrapper {
  height: 100%;
}
</style>
