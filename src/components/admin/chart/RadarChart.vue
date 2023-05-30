<template>
  <Radar type="radar" :data="chartData" :options="chartOptions" />
</template>

<script>
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'vue-chartjs';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default {
  name: 'RadarChart',
  components: { Radar },
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
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          r: {
            max: 100,
            min: 0,
            ticks: {
              display: false,
              stepSize: 20
            },
          },
        }
      }
    }
  }
}
</script>