<template>
  <div class="chart-container">
    <barchart height="100%" width="100%"/>
  </div>
</template>

<script>
import barChart from '@/components/Charts/barChart'

export default {
  name: 'MixChart',
  components: { barChart }
}
</script>

<style scoped>
  .chart-container{
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>

