<template>
  <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">

    <el-table-column align="center" label="积分编号" width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="300" align="center" label="文章题目（专著名称）">
      <template slot-scope="scope">
        <span>{{ scope.row.academic_name }}</span>
      </template>
    </el-table-column>

    <el-table-column width="150" align="center" label="审核人">
      <template slot-scope="scope">
        <span>{{ scope.row.who_audit }}</span>
      </template>
    </el-table-column>

    <el-table-column width="60" align="center" label="积分">
      <template slot-scope="scope">
        <span>{{ scope.row.point }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180" align="center" label="提交时间">
      <template slot-scope="scope">
        <span>{{ scope.row.submit_time }}</span>
      </template>
    </el-table-column>
    <el-table-column width="180" align="center" label="审核时间">
      <template slot-scope="scope">
        <span>{{ scope.row.audit_time }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180" align="center" label="审核状态">
      <template slot-scope="scope">
        <el-button v-if="scope.row.audit_status==='审核待通过'" type="primary" size="small" plain>审核待通过</el-button>
        <el-button v-if="scope.row.audit_status==='审核通过'" type="success" size="small" plain>审核通过</el-button>
        <el-button v-if="scope.row.audit_status==='审核未通过'" type="danger" size="small" plain>审核未通过</el-button>
      </template>
    </el-table-column>

    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id)">查看</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getAchOutcome } from '@/api/getAuditingData'
export default {
  name: 'AcademicOutcomeTable',
  data() {
    return {
      dialogVisible: false,
      token: getToken(),
      tableData: [],
      AuditingReason: ''
    }
  },
  mounted() {
    this.getAuditingData()
  },
  methods: {
    getAuditingData: function() {
      getAchOutcome(this.token).then(response => {
        // // this.tableData = response.data
        console.log(response.data.acadeAchAuditResult)
        this.tableData = response.data.acadeAchAuditResult
      })
    },
    getAuditing: function(data) {
      console.log('测试审核结果的每一条数据')
      console.log(data)
      if (data.verify_status === '待审核') {
        this.$message({
          message: '正在审核，暂无信息，请等待',
          type: 'warning'
        })
      } else if (data.verify_status === '审核通过') {
        this.$message({
          message: '恭喜你，审核通过',
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

</style>
