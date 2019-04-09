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
      default: 'barchart'
    },
    id: {
      type: String,
      default: 'barchart'
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
          text: '中关村老师评分',
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
            data: ['陈老师', '杨老师', '楚老师', '叶老师', '江老师', '齐老师', '秦老师', '魏老师', '唐老师']
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
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6],
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
