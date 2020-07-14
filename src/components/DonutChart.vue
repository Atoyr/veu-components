<template>
  <div class="donut-chart">
    <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
     <g>
      <circle class="donut-chart__circle_animation" r="69.85699" cy="81" cx="81" stroke-width="20" stroke="#6fdb6f" fill="none"/>
     </g>
    </svg>
  </div>
</template>

<script>

export default {
  props:{
    Value:{
      type: Number,
      'default':0
    }

  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.donut-chart {
    position: relative;
    float: left;
}

.donut-chart h2 {
    text-align:center;
    position: absolute;
    line-height: 125px;
    width: 100%;
}

svg {
    transform: rotate(-90deg);
}

.donut-chart__circle_animation {
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
}

.donut-chart__circle_animation {
    animation: donut-chart 1 ease-out forwards;
}

@keyframes donut-chart  {
  to {
    stroke-dashoffset: 30;
  }
}
</style>
