import { format } from 'date-fns'
type summaryKey = 'calorie'
export type DaySummary = {
  [key in summaryKey]: number
} & {
  date: Date
}
export const summaryListToPointList = (
  summarys: DaySummary[],
  key: summaryKey
) => {
  const days: string[] = []
  const list: number[] = []
  for (const summary of summarys) {
    if (format(summary.date, 'd') === '1') {
      days.push(format(summary.date, 'M/d'))
    } else {
      days.push('')
    }
    list.push(summary[key])
  }
  return {
    labels: days,
    datasets: [
      {
        data: list,
        label: key,
        backgroundColor: '#f87979'
      }
    ]
  }
}
