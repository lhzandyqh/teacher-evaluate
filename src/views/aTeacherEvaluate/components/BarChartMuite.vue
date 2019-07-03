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
  watch: {
    chartData(val) {
      this.initChart(val)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart(this.chartData)
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
    setOptions(val) {
      const dataY = []
      val.y.map((item) => {
        dataY.push({
          name: item.name,
          type: 'bar',
          data: item.data
        })
      })
      this.chart.setOption({
        legend: {},
        tooltip: {},
        xAxis: [
          {
            type: 'category',
            data: val.x
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
      // this.chart.on('legendselectchanged', function (params) {
      //   console.log(that.chart, 999)
      //   // 获取点击图例的选中状态
      //   var isSelected = params.selected[params.name];
      //   // 在控制台中打印
      //   console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
      //   // 打印所有图例的状态
      //   console.log(params.selected);
      // });
    },
    initChart(val) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.clear()
      this.setOptions(val)
    }
  }
}
</script>
