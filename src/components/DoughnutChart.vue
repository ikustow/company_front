<template>
  <div class="chart">
    <Doughnut id="my-doughnut-id"
              :options="chartDoughnutOptions"
              :data="chartDoughnutData"/>
  </div>
</template>

<script>

import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: "DoughnutChart",
  components: {
    Doughnut
  },
  data() {
    return {
      chartDoughnutData: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      chartDoughnutOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style scoped>
.chart{
  width: 30%;
}
</style>