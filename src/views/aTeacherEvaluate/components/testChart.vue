<template>
  <div id="main" style="width: 100%;height: 300px;"/>
</template>

<script>
var echarts = require('echarts')
export default {
  name: 'TestChart',
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  watch: {
    chartData(val) {
      this.initChart(val)
    }
  },
  mounted() {
    this.initChart(this.chartData)
  },
  methods: {
    setOptions(val) {
      const dataY = []
      val.map(item => {
        dataY.push({ name: item, type: 'bar', data: [10, 30, 40, 30, 20, 43] })
      })
      this.chart.setOption({
        legend: {},
        tooltip: {},
        xAxis: [
          {
            type: 'category',
            data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: dataY
      })
    },
    initChart(val) {
      this.chart = echarts.init(document.getElementById('main'))
      this.chart.clear()
      this.setOptions(val)
    }
  }
}
</script>

<style scoped>

</style>
