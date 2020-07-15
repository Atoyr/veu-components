<template>
  <div class="donut-chart" :style="donutChartStyle">
    <h2>{{donutValue}}{{Unit}}</h2>
    <svg :width="Size" :height="Size" :viewBox="`0 0 ${donutSize} ${donutSize}`" xmlns="http://www.w3.org/2000/svg">
     <g>
      <circle class="donut-chart__background" r="226" :cy="center" :cx="center" :stroke-width="this.donutStrokeWidth" :stroke="StrokeBgColor" fill="none"/>
      <circle class="donut-chart__circle_animation" r="226" :cy="center" :cx="center" :stroke-width="this.donutStrokeWidth" :stroke="StrokeColor" fill="none"/>
     </g>
    </svg>
  </div>
</template>

<script>
export default {
  props:{
    Value:{
      type: Number,
      'default':100
    },
    MinValue: {
      type: Number,
      'default':0
    },
    MaxValue: {
      type: Number,
      'default':100
    },
    StrokeWidth: {
      type: Number,
      'default':50
    },
    StrokeColor: {
      type: String,
      'default': '#6fdb6f'
    },
    StrokeBgColor: {
      type: String,
      'default': '#dddddd'
    },
    Size: {
      type: Number,
      'default':500
    },
    FontSize: {
      type: Number,
      'default':128
    },
    Unit: {
      type: String,
      'default': ''
    }
  },
  computed:{
    mag() {
      return 452 / (this.Size - this.StrokeWidth);
    },
    donutStrokeWidth() {
      return this.StrokeWidth * this.mag;
    },
    donutSize() {
      return 452 + this.donutStrokeWidth;
    },
    center() {
      return this.donutSize / 2;
    },
    donutValue() {
      if (this.Value < this.MinValue) {
        return this.MinValue;
      }else if (this.MaxValue < this.Value) {
        return this.MaxValue;
      }
      return this.Value;
    },
    offset() {
      let percent = this.donutValue / (Math.abs(this.MinValue) + Math.abs(this.MaxValue)) * 100;
      return 1420 - (1420 / 100 * percent);
    },
    donutChartStyle() {
      return {
        "--offset": this.offset,
        "--line-height": `${this.Size}px`,
        "--font-size": `${this.FontSize / this.mag}px`
      }
    }
  }, 
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@mixin animation-keyframes($dashoffset:0) {
  @keyframes donut-chart {
    to {
      stroke-dashoffset: $dashoffset;
    }
  }
}

.donut-chart {
  --offset: 0;
  --line-height: 500px;
  --font-size: 128;
  position: relative;
  float: left;
  @include animation-keyframes(var(--offset))
  h2 {
    text-align:center;
    position: absolute;
    line-height: var(--line-height);
    margin: 0;
    width: 100%;
    font: {
      size: var(--font-size);
      family: Meiryo;
    }
  }
  svg {
      transform: rotate(-90deg);
  }
}

.donut-chart__circle_animation {
  stroke-dasharray: 1420;
  stroke-dashoffset: 1420;
  animation: donut-chart 1s ease-out forwards;
}

</style>
