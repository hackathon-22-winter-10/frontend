<script setup lang="ts">
import axios from 'axios'
import { addDays, addWeeks, subWeeks, startOfWeek, isBefore } from 'date-fns'
import { onMounted, ref } from 'vue'
import DayBlock from './calender/DayBlock.vue'
import type { DaySummary } from '../lib/graph/summaryListToPointList'

const firstDay = startOfWeek(subWeeks(new Date(), 4))
const DL = ref<DaySummary[]>([])
for (let i = 0; i < 35; i++) {
  DL.value.push({
    date: addDays(firstDay, 34 - i),
    calorie: isBefore(addDays(firstDay, 34 - i), new Date()) ? Math.random() : 0
  })
}
onMounted(async () => {
  await axios
    .get('/api/cal')
    .then(res => {
      if (
        Array.isArray(res.data) &&
        'date' in res.data[0] &&
        'calorie' in res.data[0]
      ) {
        for (let i = 1; 1 < 7 - new Date().getDay(); i++) {
          DL.value.push({
            date: addDays(new Date(), i),
            calorie: 0
          })
        }
        DL.value = DL.value.concat(
          res.data.slice(0, Math.min(35, res.data.length))
        )
      } else {
        alert('データの取得に失敗しました')
      }
    })
    .catch(() => alert('データの取得に失敗しました'))
})
</script>

<template>
  <div :class="$style.body">
    <div v-for="i in 5" :class="$style.week">
      <div v-for="j in 7" :class="$style.day">
        <DayBlock
          :date="DL[35 - (i - 1) * 7 - j].date"
          :parsentage="
            DL[35 - (i - 1) * 7 - j].calorie == 0
              ? 0
              : 0.3 + DL[35 - (i - 1) * 7 - j].calorie * 0.7
          "
          :isFirstDay="i === 1 && j === 1"
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
