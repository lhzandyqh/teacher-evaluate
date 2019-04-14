<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import resize from './mixins/resize'
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'groupBarChart'
    },
    id: {
      type: String,
      default: 'groupBarChart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '100px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id), 'macarons')
      this.chart.setOption({
        title: {
          text: '中关村教研组评分',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['评分']
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 80,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '地理', '历史']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: ' 评分 ',
            type: 'bar',
            data: [73, 67, 88, 85, 79, 76, 69, 78, 83],
            markPoint: {
              data: [
                { type: 'max', name: '最高分' },
                { type: 'min', name: '最低分' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均分' }
              ]
            }
          }
        ]
      })
      window.onresize = this.chart.resize
    }
  }
}
</script>

<style scoped>

</style>
