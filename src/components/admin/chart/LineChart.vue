<template>
  <div class="py-3">
    <Line :data="chartData" :options="chartOptions" :height="280" />
  </div>
</template>

<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

export default {
  name: 'LineChart',
  components: { Line },
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
        },
        tension: 0.3,
        borderColor: '#2161D5',
        pointBackgroundColor: '#2161D5',
        pointBorderWidth: 4,
        borderWidth: 2
      }
    }
  }
}
</script>