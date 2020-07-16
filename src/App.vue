<template>
  <div id="app">
    <DonutChart class="m-1" size=220 stroke-width=20 :value="v"></DonutChart>
    <Gauge class="m-1" size=220 stroke-width=50 :value="v"></Gauge>
    <input class="m-1" type="range" min=0 max=100 step=1 v-model="v"></input>
  </div>
</template>

<script>
import DonutChart from './components/DonutChart.vue'
import Gauge from './components/Gauge.vue'

export default {
  name: 'App',
  components: {
    DonutChart,
    Gauge
  },
  data() {
    return {
      v:80
    }
  }
}
</script>

<style>
.m-1 {
  margin: 0.25rem;
}
</style>
