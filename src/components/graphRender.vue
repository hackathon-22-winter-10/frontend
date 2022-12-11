<template>
  <Line :data="chartData" />
  <button @click="DL[0].calorie += 10"></button>
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
import type { daySummary } from '../lib/graph/summaryListToPointList'
import { computed, ref } from 'vue'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
)
const dataList: daySummary[] = [
  {
    day: '12-11',
    calorie: 20,
    something: 3
  },
  {
    day: '12-12',
    calorie: 40,
    something: 3
  },
  {
    day: '12-13',
    calorie: 50,
    something: 3
  },
  {
    day: '12-14',
    calorie: 0,
    something: 3
  }
]
export default {
  components: {
    Line
  },
  setup() {
    const DL = ref(dataList)
    const chartData = computed(() =>
      summaryListToPointList(DL.value, 'calorie')
    )
    return { DL, chartData }
  }
}
</script>
