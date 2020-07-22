<template>
  <div class="data-bar">
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" xmlns="http://www.w3.org/2000/svg">
      <g class="bar">
        <rect :fill="bgColor" :width="width" :height="height"></rect>
        <rect :fill="color" :width="barWidth" :height="height"></rect>
     </g>
     <g>
       <text :x="fontPosition.x" :y="fontPosition.y" text-anchor="end" stroke-width="1" :font-size="fontSize">{{visualValue}}</text>
     </g>
    </svg>
  </div>
</template>

<script>

export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 32
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue:{
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "#6fdb6f"
    },
    bgColor: {
      type: String,
      default: "#dddddd"
    },
    isDrumRoll: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    percent() {
      return this.value / (Math.abs(this.minValue) + Math.abs(this.maxValue));
    },
    visualPercent() {
      return this.isAnimating ? this.speedEaseoutPercent : this.percent;
    },
    visualValue() {
      return parseInt((this.isDrumRoll ? this.visualPercent : this.percent) * (Math.abs(this.minValue) + Math.abs(this.maxValue)));
    },
    barWidth() {
      return this.visualPercent * this.width;
    },
    fontSize() {
      return this.height * 0.75;
    },
    fontPosition() {
      return {x: this.width - 4, y: this.height * 0.8 }
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
</style>
