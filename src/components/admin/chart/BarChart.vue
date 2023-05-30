<template>
  <div class="py-3">
    <Bar id="bar-air-bersih" :options="chartOptions" :data="chartData" :height="280" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
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
        barThickness: 30,
        borderSkipped: false,
        borderRadius: 5,
        scales: {
          x: {
            grid: {
              color: '#fff',
            }
          }
        }
      }
    }
  }
}
</script>