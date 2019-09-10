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
import { getToken } from '@/utils/auth'
require('echarts/theme/macarons') // echarts theme
import { getReportObsResearchCount, getOrganizeExtraActivityCount, getFurLearnContinueEduCount, getGuidTrainTeacCount } from '@/api/chartsGetData'
export default {
  name: 'TeacherGrowStatistics',
  data() {
    return {
      huibaoData: [],
      zuzhiData: [],
      canjiaData: [],
      zhidaoData: [],
      token: getToken(),
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
            data: [] // 1, 4, 5, 5, 3, 2, 0, 3, 3, 2, 4, 1
          },
          {
            name: '组织指导课外活动情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [] // 2, 4, 1, 1, 3, 2, 2, 3, 2, 2, 2, 4
          },
          {
            name: '参加系统进修或继续教育情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [] // 2, 4, 5, 1, 3, 6, 2, 3, 1, 1, 2, 1
          },
          {
            name: '指导 培养教师情况',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [] // 3, 4, 1, 3, 3, 2, 1, 3, 0, 2, 1, 1
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
      getReportObsResearchCount(this.token).then(response => {
        this.huibaoData = response.data.reportObserRes
        console.log('我要看图里面的汇报数据')
        console.log(this.huibaoData)
        var k = ''
        for (k in this.huibaoData) {
          this.option.series[0].data.push(this.huibaoData[k].count)
        }
        this.chart = echarts.init(document.getElementById('statistics'), 'macarons')
        this.chart.setOption(this.option)
      })
      getOrganizeExtraActivityCount(this.token).then(response => {
        this.zuzhiData = response.data.organizeExtraActivity
        console.log('我要看图里面的组织数据')
        console.log(this.zuzhiData)
        var k = ''
        for (k in this.zuzhiData) {
          this.option.series[1].data.push(this.zuzhiData[k].count)
        }
        this.chart = echarts.init(document.getElementById('statistics'), 'macarons')
        this.chart.setOption(this.option)
      })
      getFurLearnContinueEduCount(this.token).then(response => {
        this.canjiaData = response.data.furLeaContinueEdu
        console.log('我要看图里面的参加数据')
        console.log(this.canjiaData)
        var k = ''
        for (k in this.canjiaData) {
          this.option.series[2].data.push(this.canjiaData[k].count)
        }
        this.chart = echarts.init(document.getElementById('statistics'), 'macarons')
        this.chart.setOption(this.option)
      })
      getGuidTrainTeacCount(this.token).then(response => {
        this.zhidaoData = response.data.guidTrainTeac
        console.log('我要看图里面的指导数据')
        console.log(this.zhidaoData)
        var k = ''
        for (k in this.zhidaoData) {
          this.option.series[3].data.push(this.zhidaoData[k].count)
        }
        this.chart = echarts.init(document.getElementById('statistics'), 'macarons')
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
