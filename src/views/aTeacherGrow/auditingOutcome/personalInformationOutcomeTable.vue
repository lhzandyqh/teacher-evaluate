<template>
  <div class="app-container">
    <el-table :data="tableData" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="审核编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="修改个人信息类别">
        <template slot-scope="scope">
          <span>{{ scope.row.classLabel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="审核人">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_person }}</span>
        </template>
      </el-table-column>

      <el-table-column width="250" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher_edit_date }}</span>
        </template>
      </el-table-column>
      <el-table-column width="250" align="center" label="审核时间">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.verify_status==='待审核'" type="primary" size="small" plain>审核待通过</el-button>
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
import { inquiryAuditingOutcomeList } from '@/api/teacherInformation'
export default {
  name: 'PersonalInformationOutcomeTable',
  data() {
    return {
      dialogVisible: false,
      token: getToken(),
      tableData: [],
      AuditingReason: ''
    }
  },
  mounted() {
    this.getAuditingList()
  },
  methods: {
    getAuditingList: function() {
      inquiryAuditingOutcomeList(this.token).then(response => {
        console.log('检查审核结果')
        console.log(response)
        this.tableData = response.data.teacherInfoAuditResult
      })
    },
    lookDetails: function(data) {
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
  .foot {
    padding-top: 20px;
    text-align: center;
  }

</style>
