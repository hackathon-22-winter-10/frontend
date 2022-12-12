<script setup lang="ts">
import { addDays, addWeeks, subWeeks, startOfWeek, format } from 'date-fns'
import DayBlock from './calender/DayBlock.vue'
const firstDay = startOfWeek(subWeeks(new Date(), 4))
</script>

<template>
  <div :class="$style.body">
    <div v-for="i in 5" :class="$style.week">
      <div v-for="j in 7" :class="$style.day">
        <DayBlock
          :date="addDays(addWeeks(firstDay, i - 1), j - 1)"
          :parsentage="0.3 + Math.random() * 0.7"
        />
      </div>
    </div>
  </div>
</template>
<style module>
.body {
  width: 100%;
  text-align: center;
}
.week {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.day {
  width: calc(100% / 7);
  height: 5rem;
  display: inline-block;
}
</style>
