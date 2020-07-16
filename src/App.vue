<template>
  <div id="app">
    <DonutChart class="m-1" size=220 stroke-width=20 :value="v"></DonutChart>
    <Gauge class="m-1" size=220 stroke-width=50 :value="v" :caution-value="c" :warning-value="w"></Gauge>
    <p>Value {{v}}</p>
    <input class="m-1" type="range" min=0 max=100 step=1 v-model="v"></input>
    <p>Caution {{c}}</p>
    <input class="m-1" type="range" min=0 max=101 step=1 v-model="c"></input>
    <p>Warning {{w}}</p>
    <input class="m-1" type="range" min=0 max=101 step=1 v-model="w"></input>
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
      v: 80,
      c: 101,
      w: 101,
    }
  }
}
</script>

<style>
.m-1 {
  margin: 0.25rem;
}
</style>
