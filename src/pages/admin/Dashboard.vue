<template>
  <div class="col-12 px-4 py-2">
    <div class="d-flex gap-2 align-items-center mt-3 mb-4">
      <Icon icon="teenyicons:home-outline" />
      <Icon icon="ep:arrow-right" />
      <span>Statistik</span>
      <Icon icon="ep:arrow-right" />
      <span>Wilayah</span>
    </div>
    <div class="row gap-3 gap-lg-0 mb-4">
      <div class="col col-lg-6">
        <div class="card p-4 h-100 d-grid d-sm-block overflow-x-auto"><h6>Jumlah Penduduk</h6><LineChart :chart-data="dataPendudukLine" /></div>
      </div>
      <div class="col col-lg-6">
        <div class="card p-4 h-100 d-grid d-sm-block overflow-x-auto"><h6>Prasarana Air Bersih</h6><BarChart :chart-data="dataAirBersih" /></div>
      </div>
    </div>
    <div class="row gap-3 gap-lg-0 mb-4">
      <div class="col col-lg-4">
        <div class="card p-3 h-100"><h6>Jumlah Penduduk Tiap Dusun</h6><DoughnutChart :chart-data="dataPenduduk" /></div>
      </div>
      <div class="col col-lg-4">
        <div class="card p-3 h-100"><h6>Jumlah Penduduk Tiap Dusun</h6><RadarChart :chart-data="dataPendudukDusun" /></div>
      </div>
      <div class="col col-lg-4">
        <div class="card p-3 h-100"><h6>Jumlah KK Tiap Dusun</h6><DoughnutChart :chart-data="dataKK" /></div>
      </div>
    </div>
    <div class="row gap-3 gap-lg-0 mb-3">
      <div class="col col-lg-4">
        <div class="card p-3 h-100"><h6>Jumlah Prasarana Umum</h6><DoughnutChart :chart-data="dataPrasarana" /></div>
      </div>
      <div class="col col-lg-8">
        <div class="card p-3 h-100 d-grid d-sm-block overflow-x-auto"><h6>Jumlah Penduduk Berdasarkan Gender 2023</h6><BarChart :chart-data="dataPendudukGender" /></div>
      </div>
    </div>
  </div>

</template>

<script>
import { Icon } from '@iconify/vue'
import BarChart from '../../components/admin/chart/BarChart.vue'
import LineChart from '../../components/admin/chart/LineChart.vue'
import DoughnutChart from '../../components/admin/chart/DoughnutChart.vue'
import RadarChart from '../../components/admin/chart/RadarChart.vue'

export default {
  name: "DashboardPage",
  components: {
    Icon,
    BarChart,
    LineChart,
    DoughnutChart,
    RadarChart
  },
  data() {
    return {
      dataPendudukLine: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
        datasets: [{
          data: [40, 20, 12, 27, 35, 16]
        }],
      },
      dataAirBersih: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
        datasets: [{
          data: [40, 20, 12, 27, 35, 16],
          backgroundColor: '#2161D5'
        }],
      },
      dataPenduduk: {
        labels: [ 'Dusun 1', 'Dusun 2', 'Dusun 3' ],
        datasets: [{
          data: [80, 20, 40],
          backgroundColor: ['#2161D5', '#97ACD1', '#898BE7' ]
        }],
      },
      dataPendudukDusun: {
        labels: [ 'Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4', 'Dusun 5', 'Dusun 6', 'Dusun 7' ],
        datasets: [{
          label: 'Data 1',
          data: [88, 30, 25, 34, 79, 95, 85],
          fill: true,
          backgroundColor: 'rgba(151, 172, 209, 0.3)',
          pointBackgroundColor: 'rgb(151, 172, 209)',
          borderColor: 'rgb(151, 172, 209)',
          borderWidth: 1,
          pointRadius: 2,
        }, {
          label: 'Data 2',
          data: [65, 55, 29, 45, 30, 55, 77],
          fill: true,
          backgroundColor: 'rgba(151, 172, 209, 0.3)',
          pointBackgroundColor: 'rgb(151, 172, 209)',
          borderColor: 'rgb(151, 172, 209)',
          borderWidth: 1,
          pointRadius: 2,
        },{
          label: 'Data 3',
          data: [45, 45, 50, 55, 35, 40, 60],
          fill: true,
          backgroundColor: 'rgba(151, 172, 209, 0.3)',
          pointBackgroundColor: 'rgb(151, 172, 209)',
          borderColor: 'rgb(151, 172, 209)',
          borderWidth: 1,
          pointRadius: 2,
        },{
          label: 'Data 4',
          data: [54, 45, 33, 82, 38, 31, 53],
          fill: true,
          backgroundColor: 'rgba(151, 172, 209, 0.3)',
          pointBackgroundColor: 'rgb(151, 172, 209)',
          borderColor: 'rgb(151, 172, 209)',
          borderWidth: 1,
          pointRadius: 2,
        }],
      },
      dataKK: {
        labels: [ 'Dusun 1', 'Dusun 2', 'Dusun 3' ],
        datasets: [{
          data: [30, 70, 40],
          backgroundColor: ['#2161D5', '#97ACD1', '#898BE7' ]
        }],
      },
      dataPrasarana: {
        labels: [ 'Balai Pertemuan', 'Sumur Desa', 'Pasar Desa', 'Olahraga' ],
        datasets: [{
          data: [2, 8, 3, 5],
          backgroundColor: ['#2161D5', '#97ACD1', '#898BE7', '#89AFE7' ]
        }],
      },
      dataPendudukGender: {
        labels: [ 'Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4', 'Dusun 5', 'Dusun 6' ],
        datasets: [{
          label: 'Pria',
          data: [78, 107, 70, 140, 34, 95],
          backgroundColor: '#2161D5'
        }, {
          label: 'Wanita',
          data: [132, 88, 42, 102, 45, 24],
          backgroundColor: '#97ACD1'
        }],
      },
    }
  }
}
</script>