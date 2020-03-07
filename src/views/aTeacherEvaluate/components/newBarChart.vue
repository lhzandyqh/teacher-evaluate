<template>
  <div class="app-container">
    <el-row>
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;">请输入教师名称:</div>
        <div>
          <el-input v-model="teachername"/>
        </div>
        <div style="font-size: 14px;margin: 0 15px;">请选择教研组:</div>
        <div>
          <el-select v-model="jiaoyanzu" placeholder="请选择教研组">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
        <div>
          <el-date-picker
            v-model="value9"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            value-format="yyyy-MM-dd"
            end-placeholder="结束日期"/>
        </div>
        <div><el-button type="primary" style="margin-left:15px" @click="getKPIData">查询</el-button></div>
      </div>
    </el-row>
    <el-row>
      <div id="home_page_chart" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import echarts from 'echarts'
import { getAllTeachGroup } from '@/api/teacherEvaluate'
require('echarts/theme/macarons')
import { adminTeacherKPI } from '@/api/chartsGetData'
export default {
  name: 'NewBarChart',
  data() {
    return {
      token: getToken(),
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['教学成果', '发表论文个数', '资质获奖']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '教学成果',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '发表论文个数',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '资质获奖',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      teachername: '',
      value9: [],
      jiaoyanzu: '',
      optionstwo: []
    }
  },
  mounted() {
    this.initChart()
    this.getTeachGroupList()
    this.getKPIData()
  },
  methods: {
    getTeachGroupList: function() {
      getAllTeachGroup(this.token).then(response => {
        console.log('测试返回的教研组')
        console.log(response.data)
        // eslint-disable-next-line no-empty
        for (let i = 0; i < response.data.allDeptName.length; i++) {
          const obj = {
            value: response.data.allDeptName[i],
            label: response.data.allDeptName[i]
          }
          this.optionstwo.push(obj)
        }
      })
    },
    getKPIData: function() {
      console.log('检查时间')
      console.log(this.value9)
      const prams = {
        teachername: this.teachername,
        deptname: this.jiaoyanzu,
        startDate: this.value9[0],
        endDate: this.value9[1]
      }
      this.option.xAxis.data = []
      this.option.series[0].data = []
      this.option.series[1].data = []
      this.option.series[2].data = []
      adminTeacherKPI({ ...prams, token: this.token }).then(response => {
        console.log('新chart检查获取KPI数据')
        console.log(response.data)
        console.log(response.data.performWorkScoreByTec)
        // this.option.series[0].data[0] = 640
        for (let i = 0; i < response.data.performWorkScoreByTec.length; i++) {
          this.option.xAxis.data.push(response.data.performWorkScoreByTec[i].performanceScore.date)
          this.option.series[0].data.push(response.data.performWorkScoreByTec[i].performanceScore.adminAwardScore)
          this.option.series[1].data.push(response.data.performWorkScoreByTec[i].performanceScore.eduTeachScore)
          this.option.series[2].data.push(response.data.performWorkScoreByTec[i].performanceScore.schoolBasedTrainScore)
        }
        this.initChart()
      })
    },
    initChart: function() {
      this.chart = echarts.init(document.getElementById('home_page_chart'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
