<template>
  <div id="app">
    <div class="wrapper-column">
      <div>
        <h1>my Vue.js components🎉</h1>
      </div> 
      <section class="card">
        <h2 class="card__title">パラメータ</h2>
        <div class="card__item">
            <p class="m-1">min-value</p>
            <input class="m-1" type="number" v-model="minValue"></input>
            <p class="m-1">max-value</p>
            <input class="m-1" type="number" v-model="maxValue"></input>
        </div>
      </section>
      <section class="card">
        <h2 class="card__title">ドーナツグラフ(1値)</h2>
        <div class="wrapper-row">
          <DonutChart 
             ref="donutchart"
             class="m-1" 
             size=220 
             is-drum-roll
             :min-value="minValue"
             :max-value="maxValue"
             :stroke-width="donutChartStrokeWidth" 
             :value="v"
             :stroke-color="donutChartColor"
             :stroke-bg-color="donutChartBgColor"
             ></DonutChart>
          <div class="card__items">
            <button @click="donutChartAnimation">アニメーション</button>
            <p class="m-1">value {{v}}</p>
            <input class="m-1" type="range" :min="minValue" :max="maxValue" step=1 v-model="v"></input>
            <p class="m-1">stroke-width {{donutChartStrokeWidth}}</p>
            <input class="m-1" type="range" min=0 max=110 step=1 v-model="donutChartStrokeWidth"></input>
          </div>
          <div class="card__items">
            <p class="m-1">stroke-color {{donutChartColor}}</p>
            <input class="m-1" type="color" v-model="donutChartColor"></input>
            <p class="m-1">stroke-bg-color {{donutChartBgColor}}</p>
            <input class="m-1" type="color" v-model="donutChartBgColor"></input>
          </div>
        </div>
      </section>
      <section class="card">
        <h2 class="card__title">ゲージ</h2>
        <div class="wrapper-row">
          <Gauge 
             class="m-1" 
             size=220 
             :min-value="minValue"
             :max-value="maxValue"
             :stroke-width="gaugeStrokeWidth" 
             :value="v" 
             :caution-value="c" 
             :warning-value="w"
             :stroke-colors="gaugeColors"
             :stroke-bg-colors="gaugeBgColors" ></Gauge>
          <div class="card__items">
            <p class="m-1">value {{v}}</p>
            <input class="m-1" type="range" :min="minValue" :max="maxValue" step=1 v-model="v"></input>
            <p class="m-1">caution-value {{c}}</p>
            <input class="m-1" type="range" :min="minValue" :max="parseInt(maxValue,10) + 1" step=1 v-model="c"></input>
            <p class="m-1">warning-value {{w}}</p>
            <input class="m-1" type="range" :min="minValue" :max="parseInt(maxValue,10) + 1" step=1 v-model="w"></input>
            <p class="m-1">stroke-width {{gaugeStrokeWidth}}</p>
            <input class="m-1" type="range" min=0 max=110 step=1 v-model="gaugeStrokeWidth"></input>
          </div>
          <div class="card__items">
            <p class="m-1">stroke-colors</p>
            <p class="m-1">[0] (normal color) {{gaugeColors[0]}}</p>
            <input class="m-1" type="color" v-model="gaugeColors[0]"></input>
            <p class="m-1">[1] (caution color) {{gaugeColors[1]}}</p>
            <input class="m-1" type="color" v-model="gaugeColors[1]"></input>
            <p class="m-1">[2] (warning color) {{gaugeColors[2]}}</p>
            <input class="m-1" type="color" v-model="gaugeColors[2]"></input>
          </div>
          <div class="card__items">
            <p class="m-1">stroke-bg-colors</p>
            <p class="m-1">[0] (normal color) {{gaugeBgColors[0]}}</p>
            <input class="m-1" type="color" v-model="gaugeBgColors[0]"></input>
            <p class="m-1">[1] (caution color) {{gaugeBgColors[1]}}</p>
            <input class="m-1" type="color" v-model="gaugeBgColors[1]"></input>
            <p class="m-1">[2] (warning color) {{gaugeBgColors[2]}}</p>
            <input class="m-1" type="color" v-model="gaugeBgColors[2]"></input>
          </div>
        </div>
      </section>
      <section class="card">
        <h2 class="card__title">データバー(1値)</h2>
        <div class="wrapper-row">
          <DataBar 
             ref="databar"
             class="m-1" 
             width=220
             height=32
             is-drum-roll
             :min-value="minValue"
             :max-value="maxValue"
             :value="v"
             :color="dataBarColor"
             :bg-color="dataBarBgColor"></DataBar>
          <div class="card__items">
            <button @click="dataBarAnimation">アニメーション</button>
            <p class="m-1">value {{v}}</p>
            <input class="m-1" type="range" :min="minValue" :max="maxValue" step=1 v-model="v"></input>
            <p class="m-1">color {{dataBarColor}}</p>
            <input class="m-1" type="color" v-model="dataBarColor"></input>
            <p class="m-1">bg-color {{dataBarBgColor}}</p>
            <input class="m-1" type="color" v-model="dataBarBgColor"></input>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DonutChart from './components/DonutChart.vue'
import Gauge from './components/Gauge.vue'
import DataBar from './components/DataBar.vue'

export default {
  name: 'App',
  components: {
    DonutChart,
    Gauge,
    DataBar
  },
  data() {
    return {
      minValue:0,
      maxValue:100,
      v: 80,
      c: 101,
      w: 101,
      donutChartStrokeWidth: 20,
      donutChartColor: "#6fdb6f",
      donutChartBgColor: "#dddddd",
      gaugeStrokeWidth: 50,
      gaugeColors: ['#7fff7f','#ffb266','#ff7f7f'],
      gaugeBgColors: ['#ccffcc','#ffd8b2','#ffcccc'],
      dataBarColor: "#6fdb6f",
      dataBarBgColor: "#dddddd",
    }
  },
  methods: {
    donutChartAnimation() {
      this.$refs.donutchart.startAnimate();
    },
    dataBarAnimation() {
      this.$refs.databar.startAnimate();
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  background: #f2f4ff;
  padding: 1rem;
}

.wrapper-column {
  display: flex;
  flex-direction: column;
}
.wrapper-row {
  display: flex;
  flex-direction: row;
}

.card {
  width: auto;
  margin: 1rem;
  padding: 1rem;
  background: #f2f4ff;
  border-radius: 5px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
                3px 3px 5px rgba(0, 0, 0, 0.1);
}

.card__title {
  font-size: 2rem;
  margin: {
    bottom: 1rem;
  }
}

.card__items {
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  background: #f2f4ff;
  border-radius: 5px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
                -6px -6px 10px rgba(255, 255, 255, .5),
                6px 6px 8px rgba(255, 255, 255, .075),
                6px 6px 10px rgba(0, 0, 0, .15);
}
.card__items:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
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
