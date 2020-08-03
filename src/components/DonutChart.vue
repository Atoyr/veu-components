<template>
  <div class="donut-chart" :style="donutChartStyle">
    <svg 
      :width="size" 
      :height="size" 
      :viewBox="`0 0 ${donutSize} ${donutSize}`" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        :transform="`rotate(-90,${center},${center})`">
        <circle 
          r="226" 
          :cx="center" 
          :cy="center" 
          :stroke-width="this.donutStrokeWidth - 3" 
          :stroke="strokeBgColor" 
          fill="none" />
      </g>
      <g 
        :transform="`rotate(-90,${center},${center})`">
        <circle 
          r="226" 
          :cx="center" 
          :cy="center" 
          :stroke-width="this.donutStrokeWidth" 
          :stroke="strokeColor" 
          :stroke-dasharray="1420"
          :stroke-dashoffset="offset"
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
         {{visualValue}}
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
      'default':100
    },
    minValue: {
      type: Number,
      'default':0
    },
    maxValue: {
      type: Number,
      'default':100
    },
    strokeWidth: {
      type: Number,
      'default':50
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
      'default':500
    },
    fontSize: {
      type: Number,
      'default':128
    },
    unit: {
      type: String,
      'default': ''
    },
    isDrumRoll: {
      type: Boolean,
      default: false
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
    percent() {
      return (this.minValue + this.donutValue) / (Math.abs(this.minValue) + Math.abs(this.maxValue));
    },
    visualPercent() {
      return this.isAnimating ? this.speedEaseoutPercent : this.percent;
    },
    visualValue() {
      return parseInt((this.isDrumRoll ? this.visualPercent : this.percent) * (Math.abs(this.minValue) + Math.abs(this.maxValue)));
    },
    offset() {
      return 1420 - (1420 * this.visualPercent);
    },
    donutChartStyle() {
      return {
        "--offset": this.offset,
        "--line-height": `${this.size}px`,
        "--width": `${this.size}px`,
      }
    }
  }, 
  mounted() {
    this.startAnimate();
  },
  methods: {
    startAnimate: function() {
      this.isAnimating = true;
      this.speedEaseoutPercent = 0;
      this.animate();
    },
    animate: function() {
      if (this.isAnimating) {
        this.speedEaseoutPercent += (this.percent - this.speedEaseoutPercent) * 0.1; //フレーム更新毎に加算
         
        if(this.speedEaseoutPercent > this.percent - this.percent * 0.005){
          this.isAnimating = false;
        }else {
          this.animation = requestAnimationFrame(this.animate);
        }
      }
    }
  },
  data() {
    return {
      animation: {},
      isAnimating: false,
      speedEaseoutPercent: 0,
    }
  }
}
</script>

<style lang="scss">
.donut-chart {
  position: relative;
  float: left;
}
</style>
