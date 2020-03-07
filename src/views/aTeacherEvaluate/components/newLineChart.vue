<template>
  <div class="app-container">
    <el-row>
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;">请选择指标:</div>
        <div>
          <el-select v-model="listQuery" clearable class="filter-item" @change="setList">
            <el-option v-for="item in list" :label="item" :value="item" :key="item"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;">请选择教研组:</div>
        <div>
          <el-select v-model="listQuery1" clearable class="filter-item" @change="setList">
            <el-option
              v-for="item in list2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
        <div>
          <el-date-picker
            v-model="datevalue"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            value-format="yyyy-MM-dd"
            end-placeholder="结束日期"/>
        </div>
        <div><el-button type="primary" style="margin-left:15px" @click="getCompareData" >查询</el-button></div>
      </div>
    </el-row>
    <el-row>
      <div id="new_line_chart" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import echarts from 'echarts'
require('echarts/theme/macarons')
import { getAllTeachGroup } from '@/api/teacherEvaluate'
import { adminCompare, adminCompareNoPrams } from '@/api/chartsGetData'
export default {
  name: 'NewLineChart',
  data() {
    return {
      datevalue: [],
      token: getToken(),
      listQuery: '',
      listQuery1: '',
      list: ['教育教学', '行政获奖', '校本培训'],
      list2: [],
      option: {
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['教研组平均', '教研组最高', '全校平均', '全校最高']
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '教研组平均',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '教研组最高',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '全校平均',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '全校最高',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      }
    }
  },
  mounted() {
    this.getTeachGroupList()
    this.initChart()
    this.getCompareData()
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
          this.list2.push(obj)
        }
      })
    },
    initChart: function() {
      this.chart = echarts.init(document.getElementById('new_line_chart'), 'macarons')
      this.chart.setOption(this.option)
    },
    getCompareData: function() {
      console.log('教研组对比检查时间')
      console.log(this.datevalue)
      const prams = {
        quota: this.listQuery,
        dept: this.listQuery1,
        startdate: this.datevalue[0],
        enddate: this.datevalue[1]
      }
      this.option.xAxis.data = []
      this.option.series[0].data = []
      this.option.series[1].data = []
      this.option.series[2].data = []
      this.option.series[3].data = []
      if (prams.quota === '' || prams.dept === '') {
        adminCompareNoPrams(this.token).then(response => {
          console.log('教研组对比测试无参')
          console.log(response.data)
          for (let i = 0; i < response.data.deptCompareToAll.length; i++) {
            this.option.xAxis.data.push(response.data.deptCompareToAll[i].deptCompareToSchool.date)
            this.option.series[0].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.allTecHighestScore)
            this.option.series[1].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.allTecAvgScore)
            this.option.series[2].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.deptTecAvgScore)
            this.option.series[3].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.deptTecHighestScore)
          }
          this.initChart()
        })
      } else {
        adminCompare({ ...prams, token: this.token }).then(response => {
          console.log('教研组对比测试')
          console.log(response.data)
          for (let i = 0; i < response.data.deptCompareToAll.length; i++) {
            this.option.xAxis.data.push(response.data.deptCompareToAll[i].deptCompareToSchool.date)
            this.option.series[0].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.allTecHighestScore)
            this.option.series[1].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.allTecAvgScore)
            this.option.series[2].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.deptTecAvgScore)
            this.option.series[3].data.push(response.data.deptCompareToAll[i].deptCompareToSchool.deptTecHighestScore)
          }
          this.initChart()
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
