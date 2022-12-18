<template>
  <Line :data="chartData" />
  <button @click="DL[0].calorie += 10">+10</button>
</template>

<script lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { summaryListToPointList } from '../lib/graph/summaryListToPointList'
import type { DaySummary } from '../lib/graph/summaryListToPointList'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { addDays, isBefore, startOfWeek, subDays, subWeeks } from 'date-fns'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
)
const dataList: DaySummary[] = []
for (let i = 0; i < 30; i++) {
  dataList.push({
    date: subDays(new Date(), 30 - i),
    calorie: Math.random() * 1000
  })
}
export default {
  components: {
    Line
  },
  setup() {
    const DL = ref(dataList)
    const chartData = computed(() =>
      summaryListToPointList(DL.value, 'calorie')
    )
    onMounted(async () => {
      await axios
        .get('/api/cal')
        .then(res => {
          if (
            Array.isArray(res.data) &&
            'date' in res.data[0] &&
            'calorie' in res.data[0]
          ) {
            DL.value = res.data.slice(0, Math.min(30, res.data.length))
          } else {
            //alert('データの取得に失敗しました')
          }
        })
        .catch(() => {
          //alert('データの取得に失敗しました')
        })
    })
    return { DL, chartData }
  }
}
</script>
