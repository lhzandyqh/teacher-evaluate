<template>
  <div class="app-container">
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="审核编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher_edit_date }}</span>
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
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="beginAuditing(scope.row)">查看</el-button>
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
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="start_time" label="起始时间"/>
        <el-table-column prop="end_time" label="终止时间"/>
        <el-table-column prop="unit" label="工作单位"/>
        <el-table-column prop="post" label="担任职务"/>
        <el-table-column prop="witness" label="证明人"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="success" @click="auditingPass">审核通过</el-button>
          <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { adminGetWorkExperienceListData, adminBeginAuditingWorkExperience } from '@/api/adminAuditingInformation'
export default {
  name: 'PersonalWorkExperienceAuditingTable',
  data() {
    return {
      pvData: [],
      dialogVisible: false,
      tableData: [],
      remark: '',
      token: getToken(),
      currentPage: 1,
      pagesize: 10,
      auditingContent: {
        id: '',
        worktype: '',
        description: '',
        status: ''
      }
    }
  },
  mounted() {
    this.firstGetData()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    firstGetData: function() {
      adminGetWorkExperienceListData(this.token).then(response => {
        console.log('管理员获取工作经历审核列表')
        console.log(response.data.workExpSubmitAsk)
        this.tableData = response.data.workExpSubmitAsk
      })
    },
    beginAuditing: function(data) {
      this.pvData = []
      this.pvData.push(data)
      this.auditingContent.id = data.id
      this.auditingContent.worktype = '工作经历'
      this.dialogVisible = true
    },
    auditingNoPass: function() {
      const prams = {
        workid: this.auditingContent.id,
        worktype: this.auditingContent.worktype,
        description: this.remark,
        status: '审核不通过'
      }
      console.log('测试参数')
      console.log(prams)
      adminBeginAuditingWorkExperience({ ...prams, token: this.token }).then(response => {
        console.log('测试管理员审核工作经历,不通过')
        console.log(response.data)
        this.tableData = []
        this.firstGetData()
      })
      this.remark = ''
      this.dialogVisible = false
      this.$message({
        message: '审核完成',
        type: 'success'
      })
    },
    auditingPass: function() {
      const prams = {
        workid: this.auditingContent.id,
        worktype: this.auditingContent.worktype,
        description: this.remark,
        status: '审核通过'
      }
      console.log('测试参数')
      console.log(prams)
      adminBeginAuditingWorkExperience({ ...prams, token: this.token }).then(response => {
        console.log('测试管理员审核工作经历,通过')
        console.log(response.data)
        this.tableData = []
        this.firstGetData()
      })
      this.dialogVisible = false
      this.$message({
        message: '审核完成',
        type: 'success'
      })
    },
    closeAllDialog: function() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
  .single{
    display: inline-block;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
  .foot{
    padding-top: 20px;
    text-align: center;
  }
  .fenye{
    text-align: center;
  }

</style>
