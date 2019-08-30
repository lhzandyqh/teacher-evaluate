<template>
  <div class="app-container">
    <div class="title">
      <span style="font-weight: bolder;font-size: 18px">工作分享点赞收藏统计图</span>
    </div>
    <div id="like" style="width:100%;height: 400px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getToken } from '@/utils/auth'
require('echarts/theme/macarons') // echarts theme
import { getChartShareCount, getChartCollectCount, getChartLikeCount } from '@/api/chartsGetData'
export default {
  name: 'TeacherGrowLikeChart',
  data() {
    return {
      token: getToken(),
      shareArray: [],
      collectArray: [],
      likeArray: [],
      option: {
        title: {
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['我分享的文章数', '我收藏的文章数', '我点赞的文章数', '我被点赞的文章数']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '我分享的文章数',
            type: 'bar',
            data: [], // 2, 3, 4, 2, 1, 4, 3, 1, 3, 2, 4, 3
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '我收藏的文章数',
            type: 'bar',
            data: [], // 2, 3, 4, 2, 1, 4, 3, 1, 3, 2, 4, 3
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '我点赞的文章数',
            type: 'bar',
            data: [], // 6, 5, 4, 3, 2, 7, 2, 4, 6, 8, 2, 3
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '我被点赞的文章数',
            type: 'bar',
            data: [3, 2, 4, 4, 1, 1, 3, 1, 2, 3, 1, 2],
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
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
      getChartShareCount(this.token).then(response => {
        this.shareArray = response.data.statisticSharingByMon
        console.log('我要看图里面的分享数据')
        console.log(this.shareArray)
        var k = ''
        for (k in this.shareArray) {
          this.option.series[0].data.push(this.shareArray[k].sharing_count)
        }
        this.chart = echarts.init(document.getElementById('like'), 'macarons')
        this.chart.setOption(this.option)
      })
      getChartCollectCount(this.token).then(response => {
        this.collectArray = response.data.statisticCollectByMon
        console.log('我要看图里面的收藏数据')
        console.log(this.collectArray)
        var k = ''
        for (k in this.collectArray) {
          this.option.series[1].data.push(this.collectArray[k].collect_count)
        }
        this.chart = echarts.init(document.getElementById('like'), 'macarons')
        this.chart.setOption(this.option)
      })
      getChartLikeCount(this.token).then(response => {
        this.likeArray = response.data.statisticLikeByMon
        console.log('我要看图里面的点赞数据')
        console.log(this.likeArray)
        var k = ''
        for (k in this.likeArray) {
          this.option.series[2].data.push(this.likeArray[k].like_count)
        }
        this.chart = echarts.init(document.getElementById('like'), 'macarons')
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
