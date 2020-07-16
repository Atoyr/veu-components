<template>
  <div class="guage" :style="donutChartStyle">
    <h2>{{donutValue}}{{unit}}</h2>
    <svg :width="size" :height="size" :viewBox="`0 0 ${donutSize} ${donutSize}`" xmlns="http://www.w3.org/2000/svg">
     <g>
      <circle class="guage__background" r="226" :cy="center" :cx="center" :stroke-width="this.donutStrokeWidth" :stroke="strokeBgColor" fill="none" />
      <circle class="guage__circle_animation" r="226" :cy="center" :cx="center" :stroke-width="this.donutStrokeWidth" :stroke="strokeColor" fill="none" />
     </g>
    </svg>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type: Number,
      'default':100
    },
    minValue: {
      type: Number,
      'default': 0
    },
    maxValue: {
      type: Number,
      'default': 100
    },
    strokeWidth: {
      type: Number,
      'default': 50
    },
    strokeColor: {
      type: String,
      'default': '#6fdb6f'
    },
    strokeBgColor: {
      type: String,
      'default': '#dddddd'
    },
    size: {
      type: Number,
      'default': 500
    },
    fontSize: {
      type: Number,
      'default': 128
    },
    unit: {
      type: String,
      'default': ''
    }
  },
  computed:{
    mag() {
      return 452 / (this.size - this.strokeWidth);
    },
    donutStrokeWidth() {
      return this.strokeWidth * this.mag;
    },
    donutSize() {
      return 452 + this.donutStrokeWidth;
    },
    center() {
      return this.donutSize / 2;
    },
    donutValue() {
      if (this.value < this.minValue) {
        return this.minValue;
      }else if (this.maxValue < this.value) {
        return this.maxValue;
      }
      return this.value;
    },
    offset() {
      let percent = this.donutValue / (Math.abs(this.minValue) + Math.abs(this.maxValue)) * 100;
      return 1420 - (947 / 100 * percent);
    },
    donutChartStyle() {
      return {
        "--offset": this.offset,
        "--line-height": `${this.size}px`,
        "--font-size": `${this.fontSize / this.mag}px`
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
  @keyframes guage {
    to {
      stroke-dashoffset: $dashoffset;
    }
  }
}

.guage {
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
      transform: rotate(150deg);
  }
}

.guage__circle_animation {
  stroke-dasharray: 1420;
  stroke-dashoffset: 1420;
  animation: guage 1s ease-out forwards;
}

.guage__background {
  stroke-dasharray: 1420;
  stroke-dashoffset: 473.3;
}

</style>

