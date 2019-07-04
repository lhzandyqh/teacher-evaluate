<template>
  <div class="app-container">
    <div v-if="role === '教师'">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">{{ barChartData.title }}</div>
        <div style="display: flex;justify-content: space-between;align-items: center">
          <div style="display: flex;align-items: center;margin: 15px 0;">
            <div style="font-size: 14px;margin-right: 15px;">请选择时间:</div>
            <div>
              <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"/>
            </div>
          </div>
          <div><el-button type="primary" @click="initData">生成个人详情表格</el-button></div>
        </div>
        <bar-chart :chart-data="barChartData"/>
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">{{ lineChartData1.title }}</div>
        <div style="display: flex;">
          <div style="display: flex;align-items: center;margin: 15px 0;">
            <div style="font-size: 14px;margin-right: 15px;">请选择指标:</div>
            <div>
              <el-select v-model="listQuery" clearable class="filter-item" @change="setList">
                <el-option v-for="item in list" :label="item" :value="item" :key="item"/>
              </el-select>
            </div>
          </div>
          <div style="display: flex;align-items: center;margin: 15px;">
            <div style="font-size: 14px;margin-right: 15px;">请选择时间:</div>
            <div>
              <el-date-picker
                v-model="value7"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"/>
            </div>
          </div>
        </div>
        <line-chart :chart-data="lineChartData" />
      </el-row>
    </div>
    <div v-if="role === '教师组长'">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">组内各教师比较</div>
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;">请选择教师:</div>
          <div>
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </div>
          <div style="font-size: 14px;margin: 0 15px;">请选择指标:</div>
          <div>
            <el-select v-model="listQuery" clearable class="filter-item" @change="setList">
              <el-option v-for="item in list" :label="item" :value="item" :key="item"/>
            </el-select>
          </div>
          <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
          <div>
            <el-date-picker
              v-model="value8"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </div>
          <div><el-button type="primary" style="margin-left:15px" @click="seaech">查询</el-button></div>
        </div>
        <bar-chart-muite :chart-data="barChartDataChange"/>
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">{{ barChartData1.title }}</div>
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;">请选择时间:</div>
          <div>
            <el-date-picker
              v-model="value12"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </div>
        </div>
        <bar-chart-muite :chart-data="barChartData1"/>
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">{{ lineChartData1.title }}</div>
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;">请选择指标:</div>
          <div>
            <el-select v-model="listQuery" clearable class="filter-item" @change="setList1">
              <el-option v-for="item in list1" :label="item" :value="item" :key="item"/>
            </el-select>
          </div>
          <div style="font-size: 14px;margin-right: 15px;">请选择时间:</div>
          <div>
            <el-date-picker
              v-model="value13"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </div>
        </div>
        <line-chart :chart-data="lineChartData1" />
      </el-row>
    </div>
    <div v-if="role === '系统管理员'">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">{{ barChartData.title }}</div>
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin: 0 15px;">请输入教师名称:</div>
          <div>
            <el-input/>
          </div>
          <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
          <div>
            <el-date-picker
              v-model="value9"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </div>
          <div><el-button type="primary" style="margin-left:15px" @click="seaech">查询</el-button></div>
        </div>
        <bar-chart :chart-data="barChartData"/>
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">{{ lineChartData1.title }}</div>
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;">请选择指标:</div>
          <div>
            <el-select v-model="listQuery" clearable class="filter-item" @change="setList">
              <el-option v-for="item in list" :label="item" :value="item" :key="item"/>
            </el-select>
          </div>
          <div style="font-size: 14px;margin: 0 15px;">请选择部门:</div>
          <div>
            <el-select v-model="listQuery1" clearable class="filter-item" @change="setList">
              <el-option v-for="item in list2" :label="item" :value="item" :key="item"/>
            </el-select>
          </div>
          <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
          <div>
            <el-date-picker
              v-model="value10"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </div>
        </div>
        <line-chart :chart-data="lineChartData1" />
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="title">全校教师详情展示</div>
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
          <div>
            <el-date-picker
              v-model="value11"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </div>
          <div style="margin-left: 15px;"><el-button type="primary" @click="handleDownload1">导出Excel</el-button></div>
        </div>
        <el-table
          :data="tableData1"
          style="width: 100%"
          border>
          <el-table-column
            align="center"
            prop="name"
            label="教师"/>
          <el-table-column
            align="center"
            prop="date"
            label="教学成果"/>
          <el-table-column
            align="center"
            prop="count"
            label="发表论文个数"/>
          <el-table-column
            align="center"
            prop="address"
            label="资质获奖"/>
          <el-table-column
            align="center"
            prop="all"
            label="总数"/>
        </el-table>
        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
      </el-row>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="个人详情"
      width="50%">
      <el-table
        :data="tableData"
        style="width: 100%"
        border>
        <el-table-column
          align="center"
          prop="time"
          label="时间"/>
        <el-table-column
          align="center"
          prop="date"
          label="教学成果"/>
        <el-table-column
          align="center"
          prop="name"
          label="发表论文个数"/>
        <el-table-column
          align="center"
          prop="address"
          label="资质获奖"/>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDownload">导出Excel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCountListAll, getCountList, getCountListGaiyao } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import BarChartMuite from './components/BarChartMuite'
import Pagination from '@/components/Pagination'
/* eslint-disable */
export default {
  name: 'CountInfo',
  data() {
    return {
      total: 4,
      listQuery: {
        page: 1,
        limit: 20
      },
      value1: '',
      tableData: [],
      dialogVisible: false,
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value5: ['李二奎'],
      barChartDataChange: {
        x: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        y: [{name: '李二奎', data: [10, 30, 40, 30, 20, 43]}],
      },
      barChartData1: {
        x: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        y: [{name: '发表论文个数', data: [10, 30, 40, 30, 20, 43]},
          {name: '教学成果', data: [10, 30, 40, 30, 20, 43]},
          {name: '资质获奖', data: [10, 30, 40, 30, 20, 43]},
          {name: '总数', data: [10, 30, 40, 30, 20, 43]}],
        title: '组内各项指标平均'
      },
      list2: ['管理岗', '语文组', '数学组'],
      options: [{label: '赵玉梅', value: '赵玉梅'}, {label: '张海', value: '张海'}, {label: '刘海柱', value: '刘海柱'}, {label: '李二奎', value: '李二奎'}],
      barChartData: {
        x: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        y: [{name: '教学成果', data: [10, 30, 40, 30, 20, 43]},
          {name: '发表论文个数', data: [15, 20, 45, 70, 10, 63]},
          {name: '资质获奖', data: [40, 20, 45, 37, 40, 49]}],
        legend: ['教学成果', '发表论文个数', '资质获奖'],
        title: '教师各类绩效指标展示'
      },
      lineChartData: {
        x: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        y: [{name: '教师教学成果', data: [10, 30, 40, 30, 20, 43]},
          {name: '教研组平均', data: [15, 20, 45, 70, 10, 63]},
          {name: '教研组最高', data: [40, 20, 25, 37, 30, 49]},
          {name: '全校平均', data: [40, 20, 45, 35, 40, 49]},
          {name: '全校最高', data: [20, 20, 45, 87, 40, 39]}],
        legend: ['教师教学成果', '教研组平均', '教研组最高', '全校平均', '全校最高'],
        title: '教师各类绩效指标与教研组，全校比较'
      },
      lineChartData1: {
        x: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        y: [
          {name: '教研组平均', data: [15, 20, 45, 70, 10, 63]},
          {name: '教研组最高', data: [40, 20, 25, 37, 30, 49]},
          {name: '全校平均', data: [40, 20, 45, 35, 40, 49]},
          {name: '全校最高', data: [20, 20, 45, 87, 40, 39]}],
        legend: [ '教研组平均', '教研组最高', '全校平均', '全校最高'],
        title: '教研组，全校比较各项指标'
      },
      listQuery: '教学成果',
      listQuery1: '管理岗',
      list: ['总数', '教学成果', '发表论文个数', '资质获奖'],
      list1: ['教学成果', '发表论文个数', '资质获奖'],
      role: window.localStorage.getItem('userRole'),
      tableData1: [
        {name: '李二奎', date: 85, count: 50, address: 35, all: 150},
        {name: '赵玉梅', date: 35, count: 57, address: 25, all: 145},
        {name: '张海', date: 45, count: 20, address: 39, all: 140},
        {name: '刘海柱', date: 25, count: 20, address: 45, all: 120},
      ]
    }
  },
  components: {
    LineChart,
    BarChart,
    BarChartMuite,
    Pagination
  },
  created() {
    console.log(this.role)
  },
  methods: {
    getList() {
    },
    seaech() {
      const that = this
      this.barChartDataChange = {}
      this.barChartDataChange.y = []
      this.barChartDataChange.x = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06']
      this.value5.map(item => {
        this.barChartDataChange.y.push({name: item, data: [10, 30, 40, 30, 20, 43]})
      })
    },
    initData() {
      this.tableData = []
      const that = this
      this.dialogVisible = true
      this.barChartData.x.map((item, index) => {
        that.tableData.push({time: item, date: that.barChartData.y[0].data[index], name: that.barChartData.y[1].data[index], address: that.barChartData.y[2].data[index]})
      })
    },
    handleClose() {
      this.tableData = []
    },
    setList() {
      if (this.listQuery === '教学成果') {
        this.lineChartData1.y = [{name:'教师教学成果', data: [10,30,40,30,20,43]},
          {name:'教研组平均', data: [15,20,45,70,10,63]},
          {name:'教研组最高', data: [40,20,25,37,30,49]},
          {name:'全校平均', data: [40,20,45,35,40,49]},
          {name:'全校最高', data: [20,20,45,87,40,39]}]
        this.lineChartData1.legend[0] = '教师教学成果'
      }
      if (this.listQuery === '发表论文个数') {
        this.lineChartData1.y = [{name:'教师发表论文个数', data: [20,50,20,30,25,49]},
          {name:'教研组平均', data: [15,50,45,70,10,63]},
          {name:'教研组最高', data: [40,30,25,37,30,49]},
          {name:'全校平均', data: [20,30,15,35,40,49]},
          {name:'全校最高', data: [20,20,25,87,70,79]}]
        this.lineChartData1.legend[0] = '教师发表论文个数'
      }
      if (this.listQuery === '资质获奖') {
        this.lineChartData1.y = [{name:'教师资质获奖', data: [15,30,40,30,20,46]},
          {name:'教研组平均', data: [15,60,41,70,10,63]},
          {name:'教研组最高', data: [40,30,25,37,30,49]},
          {name:'全校平均', data: [10,20,25,45,20,43]},
          {name:'全校最高', data: [20,10,45,27,42,39]}]
        this.lineChartData1.legend[0] = '教师资质获奖'
      }
      if (this.listQuery === '总数') {
        this.lineChartData1.y = [{name:'教师总数', data: [10,30,40,30,20,43]},
          {name:'教研组平均', data: [15,60,41,70,10,63]},
          {name:'教研组最高', data: [40,30,25,37,30,49]},
          {name:'全校平均', data: [10,20,25,45,20,43]},
          {name:'全校最高', data: [20,10,45,27,42,39]}]
        this.lineChartData1.legend[0] = '教师总数'
      }
    },
    setList1() {
      if (this.listQuery === '教学成果') {
        this.lineChartData1.y = [
          {name:'教研组平均', data: [15,20,45,70,10,63]},
          {name:'教研组最高', data: [40,20,25,37,30,49]},
          {name:'全校平均', data: [40,20,45,35,40,49]},
          {name:'全校最高', data: [20,20,45,87,40,39]}]
      }
      if (this.listQuery === '发表论文个数') {
        this.lineChartData1.y = [
          {name:'教研组平均', data: [15,50,45,70,10,63]},
          {name:'教研组最高', data: [40,30,25,37,30,49]},
          {name:'全校平均', data: [20,30,15,35,40,49]},
          {name:'全校最高', data: [20,20,25,87,70,79]}]
      }
      if (this.listQuery === '资质获奖') {
        this.lineChartData1.y = [
          {name:'教研组平均', data: [15,60,41,70,10,63]},
          {name:'教研组最高', data: [40,30,25,37,30,49]},
          {name:'全校平均', data: [10,20,25,45,20,43]},
          {name:'全校最高', data: [20,10,45,27,42,39]}]
      }
    },
    handleDownload() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['时间', '教学成果', '发表论文个数', '资质获奖']
        const filterVal = ['time', 'date', 'name', 'address']
        const data = this.formatJson(filterVal, this.tableData)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '个人详情'
        })
      })
    },
    handleDownload1() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['教师', '教学成果', '发表论文个数', '资质获奖', '总数']
        const filterVal = ['name', 'date', 'count', 'address', 'all']
        const data = this.formatJson(filterVal, this.tableData1)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '全校教师详情'
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 17px;
    color: #2a394c;
    font-weight: 600;
  }
</style>
