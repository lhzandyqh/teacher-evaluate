<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <span style="font-weight: bolder;font-size: 18px">个人工作对比图</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <el-select v-model="value" placeholder="请选择月份查询">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
    </el-row>
    <el-row style="padding-top: 20px">
      <div id="bijiao" style="width:100%;height: 400px"/>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'TeacherGrowCompared',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '一月'
      }, {
        value: '选项2',
        label: '二月'
      }, {
        value: '选项3',
        label: '三月'
      }, {
        value: '选项4',
        label: '四月'
      }, {
        value: '选项5',
        label: '五月'
      }, {
        value: '选项6',
        label: '六月'
      },
      {
        value: '选项7',
        label: '七月'
      }, {
        value: '选项8',
        label: '八月'
      }, {
        value: '选项9',
        label: '九月'
      }, {
        value: '选项10',
        label: '十月'
      }, {
        value: '选项11',
        label: '十一月'
      }, {
        value: '选项12',
        label: '十二月'
      }],
      value: '',
      option: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['年级组平均数', '我的次数', '年级组最低数', '年级组最高', '全校平均数']
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
          data: ['汇报课、观摩课、研究课情况', '组织指导课外活动情况', '参加系统进修或继续教学情况', '指导、培养教师情况']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '年级组平均数',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '我的次数',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '年级组最低数',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '年级组最高',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '全校平均数',
            type: 'line',
            stack: '总量',
            data: [820, 4, 901, 934, 1290, 1330, 1320]
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
      this.chart = echarts.init(document.getElementById('bijiao'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
