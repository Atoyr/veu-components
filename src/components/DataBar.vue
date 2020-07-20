<template>
  <div class="data-bar">
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" xmlns="http://www.w3.org/2000/svg">
      <g class="bar">
        <rect :fill="bgColor" :width="width" :height="height"></rect>
        <rect :fill="color" :width="barWidth" :height="height"></rect>
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
    }
  },
  computed:{
    barWidth() {
      return this.value / (Math.abs(this.minValue) + Math.abs(this.maxValue)) * this.width;
    },
  }
}
</script>

<style lang="scss">
</style>
