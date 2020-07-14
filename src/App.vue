<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DonutChart></DonutChart>
  </div>
</template>

<script>
import DonutChart from './components/DonutChart.vue'

export default {
  name: 'App',
  components: {
    DonutChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
