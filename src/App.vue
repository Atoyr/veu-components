<template>
  <div id="app">
    <div class="wrapper-column">
      <div>
        <h1>my Vue.js components🎉</h1>
      </div> 
      <div>
        <h2>ドーナツグラフ(1値)</h2>
        <div class="wrapper-row">
          <DonutChart class="m-1" 
            size=220 
            :stroke-width="donutChartsiStrokeWidth" 
            :value="v" 
            :stroke-color="donutChartColor"
            :stroke-bg-color="donutChartBgColor"></DonutChart>
          <div class="mx-1">
            <p class="m-1">value {{v}}</p>
            <input class="m-1" type="range" min=0 max=100 step=1 v-model="v"></input>
            <p class="m-1">stroke-width {{donutChartStrokeWidth}}</p>
            <input class="m-1" type="range" min=0 max=110 step=1 v-model="donutChartStrokeWidth"></input>
          </div>
          <div class="mx-1">
            <p class="m-1">stroke-color {{donutChartColor}}</p>
            <input class="m-1" type="color" v-model="donutChartColor"></input>
            <p class="m-1">stroke-bg-color {{donutChartBgColor}}</p>
            <input class="m-1" type="color" v-model="donutChartBgColor"></input>
          </div>
        </div>
      </div>
      <div>
        <h2>ゲージ</h2>
        <div class="wrapper-row">
          <Gauge class="m-1" 
                 size=220 
                 :stroke-width="gaugeStrokeWidth" 
                 :value="v" 
                 :caution-value="c" 
                 :warning-value="w"
                 :stroke-colors="gaugeColors"
                 :stroke-bg-colors="gaugeBgColors" ></Gauge>
          <div class="mx-1">
            <p class="m-1">value {{v}}</p>
            <input class="m-1" type="range" min=0 max=100 step=1 v-model="v"></input>
            <p class="m-1">caution-value {{c}}</p>
            <input class="m-1" type="range" min=0 max=101 step=1 v-model="c"></input>
            <p class="m-1">warning-value {{w}}</p>
            <input class="m-1" type="range" min=0 max=101 step=1 v-model="w"></input>
            <p class="m-1">stroke-width {{gaugeStrokeWidth}}</p>
            <input class="m-1" type="range" min=0 max=110 step=1 v-model="gaugeStrokeWidth"></input>
          </div>
          <div class="mx-1">
            <p class="m-1">stroke-colors</p>
            <p class="m-1">stroke-colors[0] (normal color) {{gaugeColors[0]}}</p>
            <input class="m-1" type="color" v-model="gaugeColors[0]"></input>
            <p class="m-1">stroke-colors[1] (caution color) {{gaugeColors[1]}}</p>
            <input class="m-1" type="color" v-model="gaugeColors[1]"></input>
            <p class="m-1">stroke-colors[2] (warning color) {{gaugeColors[2]}}</p>
            <input class="m-1" type="color" v-model="gaugeColors[2]"></input>
          </div>
          <div class="mx-1">
            <p class="m-1">stroke-bg-colors</p>
            <p class="m-1">stroke-bg-colors[0] (normal color) {{gaugeBgColors[0]}}</p>
            <input class="m-1" type="color" v-model="gaugeBgColors[0]"></input>
            <p class="m-1">stroke-bg-colors[1] (caution color) {{gaugeBgColors[1]}}</p>
            <input class="m-1" type="color" v-model="gaugeBgColors[1]"></input>
            <p class="m-1">stroke-bg-colors[2] (warning color) {{gaugeBgColors[2]}}</p>
            <input class="m-1" type="color" v-model="gaugeBgColors[2]"></input>
          </div>
        </div>
      </div>
    </div>
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
      donutChartStrokeWidth: 20,
      donutChartColor: "#6fdb6f",
      donutChartBgColor: "#dddddd",
      gaugeStrokeWidth: 50,
      gaugeColors: ['#7fff7f','#ffb266','#ff7f7f'],
      gaugeBgColors: ['#ccffcc','#ffd8b2','#ffcccc'],
    }
  }
}
</script>

<style lang="scss">
.wrapper-column {
  display: flex;
  flex-direction: column;
}
.wrapper-row {
  display: flex;
  flex-direction: row;
}

.m-1 {
  margin: 0.25rem;
}
.mx-1 {
   margin: {
   left: 0.25rem;
   right: 0.25rem;
 }
}
</style>
