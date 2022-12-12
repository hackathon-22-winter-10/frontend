<script setup lang="ts">
import { format } from 'date-fns'
defineProps<{
  date: Date
  parsentage: number
}>()
const getDateString = (date: Date) => {
  if (date.getDate() === 1) {
    return format(date, 'MM/dd')
  }
  return format(date, 'dd')
}
</script>
<template>
  <div :class="$style.body">
    <span>{{ getDateString(date) }}</span>
  </div>
</template>
<style module>
.body {
  background-color: rgba(255, 100, 100, v-bind(parsentage));
  height: 100%;
  margin: -0.1rem;
  border: 0.1rem solid red;
}
</style>
