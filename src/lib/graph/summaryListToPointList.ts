type summaryKey = 'calorie' | 'something'
export type daySummary = {
  [key in summaryKey]: number
} & {
  day: string
}
export const summaryListToPointList = (
  summarys: daySummary[],
  key: summaryKey
) => {
  const days: string[] = []
  const list: number[] = []
  for (const summary of summarys) {
    days.push(summary.day)
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
