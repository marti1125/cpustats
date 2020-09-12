<template>
  <apexchart type="radialBar" :options="options" :series="series"></apexchart>
</template>

<script>

import Wails from '@wailsapp/runtime';

export default {
  data() {
    return {
      series: [0],
      options: {
        labels: ['CPU Usage']
      }
    }
  },
  mounted: function () {
    Wails.Events.On("cpu_usage", cpu_usage => {
      if (cpu_usage) {
        console.log(cpu_usage.avg)
        this.series = [cpu_usage.avg]
      }
    })
  },
};
</script>