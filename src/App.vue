<template>
  <div id="app">
    <DonutChart Size=220 StrokeWidth=20 :Value="v" ></DonutChart>
  </div>
</template>

<script>
import DonutChart from './components/DonutChart.vue'

export default {
  name: 'App',
  components: {
    DonutChart
  },
  data() {
    return {
      v:100
    }
  }
}
</script>

