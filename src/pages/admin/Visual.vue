<template>
  <div class="d-flex flex-column px-4 py-2">
    <div class="d-flex mt-3 mb-4">
      <h5>VISUAL COMP</h5>
    </div>
    <div class="d-flex flex-column flex-md-row gap-4">
      <div class="col">
        <BarChart :chart-data="chartData" />
      </div>
      <div class="col d-flex flex-column">
        <HandleInputComp @to-upper-case="getEmit"/>
        <span class="fst-italic text-success">---- Parent Component ----</span>
        <span class="text-dark">Data yang di input menjadi huruf kapital :</span>
        <span class="fs-3 text-primary">{{ upperCase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../../components/admin/chart/BarChart.vue';
import HandleInputComp from '../../components/admin/HandleInput.vue';

export default {
  name: "VisualComp",
  components: {
    BarChart,
    HandleInputComp
  },
  methods: {
    getEmit(e){
      this.upperCase = e
    }
  },
  data(){
    return{
      chartData: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
        datasets: [{
          data: [40, 20, 12, 27, 35, 16],
          backgroundColor: '#2161D5'
        }],
      },
      upperCase: ''
    }
  }
}
</script>