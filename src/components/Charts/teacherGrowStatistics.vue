<template>
  <div class="app-container">
    <div class="title">
      <span style="font-weight: bolder;font-size: 18px">个人工作统计详情图</span>
    </div>
    <div id="statistics" style="width:100%;height: 400px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'TeacherGrowStatistics',
  data() {
    return {
      option: {
        title: {
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['汇报课 观摩课 研究课情况', '组织指导课外活动情况', '参加系统进修或继续教育情况', '指导 培养教师情况']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '汇报课 观摩课 研究课情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [1, 4, 5, 5, 3, 2, 0, 3, 3, 2, 4, 1]
          },
          {
            name: '组织指导课外活动情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [2, 4, 1, 1, 3, 2, 2, 3, 2, 2, 2, 4]
          },
          {
            name: '参加系统进修或继续教育情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [2, 4, 5, 1, 3, 6, 2, 3, 1, 1, 2, 1]
          },
          {
            name: '指导 培养教师情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [3, 4, 1, 3, 3, 2, 1, 3, 0, 2, 1, 1]
          }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('statistics'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
