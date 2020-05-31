<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择审核历史类别:</div>
        <div>
          <el-select v-model="value" placeholder="请选择审核历史类别" @change="changeData">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row>
      <div class="table_container">
        <el-table :data="tableData .slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

          <el-table-column align="center" label="审核编号" width="80">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column width="400" align="center" label="审核类型">
            <template slot-scope="scope">
              <span>{{ scope.row.classLabel }}</span>
            </template>
          </el-table-column>

          <el-table-column width="150" align="center" label="申请人">
            <template slot-scope="scope">
              <span>{{ scope.row.personnel_name }}</span>
            </template>
          </el-table-column>

          <el-table-column width="150" align="center" label="审核人">
            <template slot-scope="scope">
              <span>{{ scope.row.who_audit }}</span>
            </template>
          </el-table-column>

          <el-table-column width="250" align="center" label="提交时间">
            <template slot-scope="scope">
              <span>{{ scope.row.submit_time }}</span>
            </template>
          </el-table-column>

          <el-table-column width="250" align="center" label="审核时间">
            <template slot-scope="scope">
              <span>{{ scope.row.audit_time }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="审核状态">
            <template slot-scope="scope">
              <el-button v-if="scope.row.audit_status==='审核通过'" type="success" size="small" plain>审核通过</el-button>
              <el-button v-if="scope.row.audit_status==='审核不通过'" type="danger" size="small" plain>审核不通过</el-button>
            </template>
          </el-table-column>

          <!--          <el-table-column align="center" label="操作">-->
          <!--            <template slot-scope="scope">-->
          <!--              <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="beginAuditing(scope.row)">查看</el-button>-->
          <!--            </template>-->
          <!--          </el-table-column>-->

        </el-table>
      </div>
      <div class="fenye">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="tableData.length"
          style="margin-top:20px;"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-row>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { nianjizhurenGetAuditingHistoryListData, jiaoshizuzhangGetBasicWorkAuditingHistoryData } from '@/api/nianjizhurenAuditing'
import auditingHistoryTable from '@/views/aTeacherGrow/nianjizhurenAuditingHistoryTable/auditingHistoryTable'
export default {
  name: 'InlineEditTable',
  components: {
    auditingHistoryTable
  },
  data() {
    return {
      options: [{
        value: '基本工作',
        label: '基本工作'
      }, {
        value: '学术成果',
        label: '学术成果'
      }, {
        value: '项目课题',
        label: '项目课题'
      }, {
        value: '学术讲座与经验分享',
        label: '学术讲座与经验分享'
      }, {
        value: '教育教学评比竞赛',
        label: '教育教学评比竞赛'
      }, {
        value: '研究课',
        label: '研究课'
      }, {
        value: '教育教学成果获奖',
        label: '教育教学成果获奖'
      }, {
        value: '教师指导学生参加学科比赛获奖情况',
        label: '教师指导学生参加学科比赛获奖情况'
      }, {
        value: '艺科体社团',
        label: '艺科体社团'
      }, {
        value: '行政获奖',
        label: '行政获奖'
      }, {
        value: '校本培训',
        label: '校本培训'
      }],
      value: '学术成果',
      token: getToken(),
      type_select_value: 'jiben',
      tableData: [],
      currentPage: 1,
      pagesize: 10
    }
  },
  mounted() {
    this.fitstGetListData()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    fitstGetListData: function() {
      const prams = {
        project_name: this.value
      }
      nianjizhurenGetAuditingHistoryListData({ ...prams, token: this.token }).then(response => {
        console.log('测试年级主任测试审核历史列表')
        console.log(response.data)
        this.tableData = response.data.acadeAchieveAuditHistory
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    changeData: function(value) {
      console.log(value)
      let obj = {}
      obj = this.options.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      if (this.value === '基本工作') {
        console.log('调用基本工作审核历史接口')
        const pramsa = {
          project_name: '完成教学工作情况'
        }
        jiaoshizuzhangGetBasicWorkAuditingHistoryData({ ...pramsa, token: this.token }).then(response => {
          console.log('测试年级组长获取审核历史教学工作情况数据泽泽泽')
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.tableData.push(response.data[i])
          }
        })
        const pramsb = {
          project_name: '完成教育工作情况'
        }
        jiaoshizuzhangGetBasicWorkAuditingHistoryData({ ...pramsb, token: this.token }).then(response => {
          console.log('测试年级组长获取审核历史教育工作情况数据泽泽泽')
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.tableData.push(response.data[i])
          }
        })
        const pramsc = {
          project_name: '汇报课观摩课研究课情况' // 参数有问题
        }
        jiaoshizuzhangGetBasicWorkAuditingHistoryData({ ...pramsc, token: this.token }).then(response => {
          console.log('测试年级组长获取审核历史汇报课 观摩课 研究课情况情况数据泽泽泽')
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.tableData.push(response.data[i])
          }
        })
        const pramsd = {
          project_name: '组织指导课外活动情况' // 参数有问题
        }
        jiaoshizuzhangGetBasicWorkAuditingHistoryData({ ...pramsd, token: this.token }).then(response => {
          console.log('测试年级组长获取审核历史组织指导课外活动情况数据泽泽泽')
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.tableData.push(response.data[i])
          }
        })
        const pramse = {
          project_name: '参加系统进修或继续教育情况'
        }
        jiaoshizuzhangGetBasicWorkAuditingHistoryData({ ...pramse, token: this.token }).then(response => {
          console.log('测试年级组长获取审核历史参加系统进修或继续教育情况数据泽泽泽')
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.tableData.push(response.data[i])
          }
        })
        const pramsf = {
          project_name: '指导培养教师情况' // 参数有问题
        }
        jiaoshizuzhangGetBasicWorkAuditingHistoryData({ ...pramsf, token: this.token }).then(response => {
          console.log('测试年级组长获取审核历史指导培养教师情况数据泽泽泽')
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.tableData.push(response.data[i])
          }
        })
      } else {
        console.log('调用绩效工作审核历史接口')
        const prams = {
          project_name: this.value
        }
        nianjizhurenGetAuditingHistoryListData({ ...prams, token: this.token }).then(response => {
          console.log('变化年级主任审核历史列表')
          console.log(response.data)
          switch (prams.project_name) {
            case '学术成果':
              this.tableData = response.data.acadeAchieveAuditHistory
              break
            case '项目课题':
              this.tableData = response.data.proTopicsAuditHistory
              break
            case '学术讲座与经验分享':
              this.tableData = response.data.lecExpAuditHistory
              break
            case '教育教学评比竞赛':
              this.tableData = response.data.teaEduCmpAuditHistory
              break
            case '研究课':
              this.tableData = response.data.resCourseCmpAuditHistory
              break
            case '教育教学成果获奖':
              this.tableData = response.data.teaEduCmpAuditHistory
              break
            case '教师指导学生参加学科比赛获奖情况':
              this.tableData = response.data.guideStuSubCmpAchiCmpAuditHistory
              break
            case '艺科体社团':
              this.tableData = response.data.artAssoicAuditHistory
              break
            case '行政获奖':
              this.tableData = response.data.adminAwardAuditHistory
              break
            case '校本培训':
              this.tableData = response.data.schoolTrainAuditHistory
              break
          }
          // this.tableData = response.data.acadeAchieveAuditHistory
        })
      }
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }

</style>
