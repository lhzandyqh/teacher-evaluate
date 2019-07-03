<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      const that = this
      this.chart = echarts.init(this.$el, 'macarons')
      const dataSt = []
      this.chartData.y.map((item) => {
        dataSt.push({
          name: item.name,
          type: 'bar',
          stack: '总量',
          selected: false,
          label: {
            normal: {
              show: true
            }
          },
          data: item.data
        })
      })
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: this.chartData.legend
          // selected: {'教学成果': false, '发表论文个数': true, '资质获奖': false}
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.chartData.x
        },
        yAxis: {
          type: 'value'
        },
        series: dataSt
      })
      this.chart.on('legendselectchanged', function(params) {
        console.log(that.chart, 999)
        // 获取点击图例的选中状态
        var isSelected = params.selected[params.name]
        // 在控制台中打印
        console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name)
        // 打印所有图例的状态
        console.log(params.selected)
      })
    }
  }
}
</script>
