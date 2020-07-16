<template>
  <div id="app">
    <DonutChart size=220 stroke-width=20 :value="v" ></DonutChart>
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
      v:80
    }
  }
}
</script>

