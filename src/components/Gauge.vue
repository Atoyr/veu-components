<template>
  <div 
    class="guage" 
    :style="gaugeStyle">
    <svg 
      :width="size" 
      :height="size * 0.75" 
      :viewBox="`0 0 ${gaugeSize} ${gaugeSize * 0.75}`" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        :transform="`rotate(150,${center},${center})`">
      <circle 
        class="guage__background-warning" 
        r="226" 
        :cy="center" 
        :cx="center" 
        :stroke-width="this.gaugeStrokeWidth - 4" 
        :stroke="strokeWarningBgColor" 
        :style="gaugeBackgroundStyle" 
        fill="none" />
      <circle 
        class="guage__background-caution" 
        r="226" 
        :cy="center" 
        :cx="center" 
        :stroke-width="this.gaugeStrokeWidth - 2" 
        :stroke="strokeCautionBgColor" 
        :style="gaugeBackgroundStyle" 
        fill="none" />
      <circle 
        class="guage__background" 
        r="226" 
        :cy="center" 
        :cx="center" 
        :stroke-width="this.gaugeStrokeWidth" 
        :stroke="strokeBgColor" 
        :style="gaugeBackgroundStyle" 
        fill="none" />
      <circle 
        class="guage__circle_animation" 
        r="226" 
        :cy="center" 
        :cx="center" 
        :stroke-width="this.gaugeStrokeWidth" 
        :stroke="strokeColor" 
        fill="none" />
     </g>
     <g>
       <text 
        :x="center" 
        :y="center + 40" 
        text-anchor="middle" 
        stroke-width="1" 
        font-size="128" 
        font-family="Meiryo">
         {{gaugeValue}}
       </text>
     </g>
    </svg>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type: Number,
      default: 0
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 100
    },
    cautionValue: {
      type: Number,
      default: 101
    },
    warningValue: {
      type: Number,
      default: 101
    },
    strokeWidth: {
      type: Number,
      default: 50
    },
    strokeColors: {
      type: Array,
      default: () => ['#7fff7f','#ffb266','#ff7f7f']
    },
    strokeBgColors: {
      type: Array,
      default: () => ['#ccffcc','#ffd8b2','#ffcccc']
    },
    size: {
      type: Number,
      default: 500
    },
    fontSize: {
      type: Number,
      default: 128
    },
    unit: {
      type: String,
      default: ''
    }
  },
  computed:{
    mag() {
      return 452 / (this.size - this.strokeWidth);
    },
    gaugeStrokeWidth() {
      return this.strokeWidth * this.mag;
    },
    gaugeSize() {
      return 452 + this.gaugeStrokeWidth;
    },
    center() {
      return this.gaugeSize / 2;
    },
    gaugeValue() {
      let v = parseInt(this.value,10)
      let min = parseInt(this.minValue,10)
      let max = parseInt(this.maxValue,10)
      if (v < min) {
        return min;
      }else if (max < v) {
        return max;
      }
      return v;
    },
    gaugeCautionValue() {
      let c = parseInt(this.cautionValue,10)
      let min = parseInt(this.minValue,10)
      let max = parseInt(this.maxValue,10)
      if (c < min) {
        return min;
      }else if (max < c) {
        return max;
      }
      return c;
    },
    gaugeWarningValue() {
      let w = parseInt(this.warningValue,10)
      let min = parseInt(this.minValue,10)
      let max = parseInt(this.maxValue,10)
      if (w < min) {
        return min;
      }else if (max < w) {
        return max;
      }
      return w;
    },
    percent() {
      return this.gaugeValue / (Math.abs(this.minValue) + Math.abs(this.maxValue)) * 100;
    },
    offset() {
      return 1420 - (947 / 100 * this.percent);
    },
    cautionOffset() {
      return 1420 - (947 / 100 * this.gaugeCautionValue / (Math.abs(this.minValue) + Math.abs(this.maxValue)) * 100);
    },
    warningOffset() {
      return 1420 - (947 / 100 * this.gaugeWarningValue / (Math.abs(this.minValue) + Math.abs(this.maxValue)) * 100);
    },
    strokeColor() {
      let v = parseInt(this.value,10)
      let c = parseInt(this.cautionValue,10)
      let w = parseInt(this.warningValue,10)
      if (v < c) {
        return 0 < this.strokeColors.length ? this.strokeColors[0] : '#7fff7f';
      }else if (v < w) {
        return 1 < this.strokeColors.length ? this.strokeColors[1] : '#ffb266';
      }
      return 2 < this.strokeColors.length ? this.strokeColors[2] : '#ff7f7f';
    },
    strokeBgColor() {
      return 0 < this.strokeBgColors.length ? this.strokeBgColors[0] : '#ccffcc';
    },
    strokeCautionBgColor() {
      return 1 < this.strokeBgColors.length ? this.strokeBgColors[1] : '#ffd8b2';
    },
    strokeWarningBgColor() {
      return 2 < this.strokeBgColors.length ? this.strokeBgColors[2] : '#ffcccc';
    },
    gaugeStyle() {
      return {
        "--offset": this.offset,
        "--line-height": `${this.size * 0.75}px`,
        "--width": `${this.size}px`,
        "--font-padding": `${64 / this.mag}px`,
        "--font-size": `${this.fontSize / this.mag}px`
      }
    },
    gaugeBackgroundStyle() {
      return {
        "--caution-offset": this.cautionOffset,
        "--warning-offset": this.warningOffset,
      }
    },
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
  --line-height: 375px;
  --width: 500px;
  --font-size: 128px;
  --font-padding: 64px;
  position: relative;
  float: left;
  @include animation-keyframes(var(--offset))
  h2 {
    text-align:center;
    position: absolute;
    padding-top: var(--font-padding);
    line-height: var(--line-height);
    margin: 0;
    width: var(--width);
    font: {
      size: var(--font-size);
      family: Meiryo;
    }
  }
}

.guage__circle_animation {
  stroke-dasharray: 1420;
  stroke-dashoffset: 1420;
  animation: guage 1s ease-out forwards;
}

.guage__background {
  --caution-offset: 473.3;
  stroke-dasharray: 1420;
  stroke-dashoffset: var(--caution-offset)
}
.guage__background-caution {
  --warning-offset: 473.3;
  stroke-dasharray: 1420;
  stroke-dashoffset: var(--warning-offset)
}
.guage__background-warning {
  stroke-dasharray: 1420;
  stroke-dashoffset: 473.3;
}

</style>

