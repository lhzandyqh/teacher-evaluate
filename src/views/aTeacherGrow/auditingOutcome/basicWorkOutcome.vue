<template>
  <div class="app-container">
    <el-table :data="tableData .slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="审核编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="基本工作审核类型">
        <template slot-scope="scope">
          <span>{{ scope.row.classLabel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="审核人">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_person }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher_edit_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核时间">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.verify_status==='审核通过'" type="success" size="small" plain>审核通过</el-button>
          <el-button v-if="scope.row.verify_status==='审核不通过'" type="danger" size="small" plain>审核未通过</el-button>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="lookDetails(scope.row)">查看</el-button>
        </template>
      </el-table-column>

    </el-table>
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
    <el-dialog :visible.sync="dialogVisible" title="审核详情">
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            :disabled="true"
            v-model="AuditingReason"
            type="textarea"
            placeholder="审核人未填写审核原因"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getTeacherSituationOutcome, getEducationSituationOutcome, getHuibaoClassSituationOutcome, getActivitySituationOutcome,
  getContinueEducationSituationOutcome, getTrainTeacherSituationOutcome } from '@/api/getAuditingData'
export default {
  name: 'BasicWorkOutcome',
  data() {
    return {
      token: getToken(),
      dialogVisible: false,
      AuditingReason: '',
      tableData: [
        // {
        //   id: '1',
        //   classLabel: '教育工作',
        //   verify_person: '小明',
        //   teacher_edit_date: '2019-10-08',
        //   verify_date: '2019-10-10',
        //   verify_status: '审核通过'
        // }
      ],
      currentPage: 1,
      pagesize: 10
    }
  },
  mounted() {
    this.firstGetListData()
  },
  methods: {
    firstGetListData: function() {
      getTeacherSituationOutcome(this.token).then(response => {
        console.log('教师测试教学工作审核列表泽泽泽')
        console.log(response.data.teacher)
        // this.tableData.push(response.data.teacher)
        for (let i = 0; i < response.data.teacher.length; i++) {
          this.tableData.push(response.data.teacher[i])
        }
      })
      getEducationSituationOutcome(this.token).then(response => {
        console.log('教师测试教育工作审核列表泽泽泽')
        console.log(response.data)
        this.tableData.push(response.data.eduWork)
        for (let i = 0; i < response.data.eduWork.length; i++) {
          this.tableData.push(response.data.eduWork[i])
        }
      })
      getHuibaoClassSituationOutcome(this.token).then(response => {
        console.log('教师测试汇报课观摩课审核列表泽泽泽')
        console.log(response.data)
        this.tableData.push(response.data.reportObserRes)
        for (let i = 0; i < response.data.reportObserRes.length; i++) {
          this.tableData.push(response.data.reportObserRes[i])
        }
      })
      getActivitySituationOutcome(this.token).then(response => {
        console.log('教师测试课外活动审核列表泽泽泽')
        console.log(response.data)
        this.tableData.push(response.data.organExtActi)
        for (let i = 0; i < response.data.organExtActi.length; i++) {
          this.tableData.push(response.data.organExtActi[i])
        }
      })
      getContinueEducationSituationOutcome(this.token).then(response => {
        console.log('教师测试继续教育审核列表泽泽泽')
        console.log(response.data)
        this.tableData.push(response.data.furLeaContinueEdu)
        for (let i = 0; i < response.data.furLeaContinueEdu.length; i++) {
          this.tableData.push(response.data.furLeaContinueEdu[i])
        }
      })
      getTrainTeacherSituationOutcome(this.token).then(response => {
        console.log('教师测试培养教师审核列表泽泽泽')
        console.log(response.data)
        this.tableData.push(response.data.guidanceTrainTec)
        for (let i = 0; i < response.data.guidanceTrainTec.length; i++) {
          this.tableData.push(response.data.guidanceTrainTec[i])
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    lookDetails: function(data) {
      console.log('基本工作审核测试审核结果的每一条数据')
      console.log(data)
      if (data.verify_status === '待审核') {
        this.$message({
          message: '正在审核，暂无信息，请等待',
          type: 'warning'
        })
      } else if (data.verify_status === '审核通过') {
        this.$message({
          message: '恭喜你，审核已通过',
          type: 'success'
        })
      } else {
        this.AuditingReason = data.verify_desc
        this.dialogVisible = true
      }
    }
  }
}
</script>

<style scoped>
  .foot{
    padding-top: 20px;
    text-align: center;
  }
  .fenye{
    text-align: center;
  }

</style>
