<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script  type="text/javascript">
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import resize from './mixins/resize'
import { getToken } from '@/utils/auth'
import { getAvgScoreGroupByGradeData } from '@/api/resultCountData'
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
      chart: null,
      token: getToken(),
      // gradeList: '',
      // gradeData: '',+
      option: {
        title: {
          text: '中关村年级组评分',
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
            data: []
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
            data: [],
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
      }
    }
  },
  mounted() {
    // this.firstGetData()
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
    // firstGetData() {
    //   getAvgScoreGroupByGradeData(this.token).then(response => {
    //     // if (response.data.code === 200) {
    //     //   console.log('获得数据成功')
    //     // } else {
    //     //   console.log('获得数据失败')
    //     // }
    //     var data = response.data.teamScore
    //     var arrayGradeList = []
    //     var arrayGradeData = []
    //     var i = 0
    //     while (i < data.length) {
    //       // arrayGradeList.push(data[i].teaching_area)
    //       // arrayGradeData.push(data[i].avg_score)
    //       arrayGradeList[i] = data[i].teaching_area
    //       arrayGradeData[i] = data[i].avg_score
    //       arrayGradeList
    //       i += 1
    //     }
    //     console.log(arrayGradeData)
    //     this.gradeList = arrayGradeList
    //     this.gradeData = arrayGradeData
    //     console.log(this.gradeList)
    //     console.log(this.gradeData)
    //     console.log(this.gradeData)
    //   })
    // },
    initChart() {
      // this.chart = echarts.init(document.getElementById(this.id), 'macarons')
      // this.chart.setOption(this.option)
      getAvgScoreGroupByGradeData(this.token).then(response => {
        // console.log(response.data.teamScore)
        // this.option.xAxis.data = []
        // _this.option.series[0].data = []
        var i = ''
        // const that = this
        // 数据分别展示
        for (i in response.data.teamScore) {
          // console.log(response.data.teamScore[i].teaching_area)
          // console.log(response.data.teamScore.teaching_area)
          this.option.xAxis[0].data.push(response.data.teamScore[i].teaching_area)
          // console.log(this.option.xAxis.data.push(i))
          this.option.series[0].data.push(response.data.teamScore[i].avg_score)
          console.log(this.option.xAxis[0].data)
          console.log(this.option.series[0].data)
          // console.log(this.option.series[0].data)
        }
        // 图表初始化在请求数据接口中完成
        this.chart = echarts.init(document.getElementById(this.id), 'macarons')
        // console.log('aaaaaaa')
        // setOption本质上要传一个数据，可以写在data中
        this.chart.setOption(this.option)
        window.onresize = this.chart.resize
      })
      // this.option.xAxis.data = ['a', 'b']
      // this.chart = echarts.init(document.getElementById(this.id), 'macarons')
      // // console.log('aaaaaaa')
      // this.chart.setOption(this.option)
      // window.onresize = this.chart.resize
    }
  }

}
</script>

<style scoped >

</style>
