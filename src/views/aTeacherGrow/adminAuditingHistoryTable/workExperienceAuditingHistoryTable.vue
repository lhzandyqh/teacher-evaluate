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
          <span>{{ scope.row.askPersonName }}</span>
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
            <div v-if="scope.row.verify_status==='待通过'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核不通过'">审核未通过</div>
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
            disabled="true"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { adminGetWorkExperienceHistoryData } from '@/api/adminAuditingInformation'
export default {
  name: 'WorkExperienceAuditingHistoryTable',
  data() {
    return {
      dialogVisible: false,
      pvData: [],
      remark: '',
      token: getToken(),
      currentPage: 1,
      pagesize: 10,
      tableData: []
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
      adminGetWorkExperienceHistoryData(this.token).then(response => {
        console.log('管理员获取工作经历审核历史列表')
        console.log(response.data.workExpSubmitAsk)
        this.tableData = response.data.workExpSubmitAsk
      })
    },
    beginAuditing: function(data) {
      this.pvData = []
      this.pvData.push(data)
      this.remark = data.verify_desc
      this.dialogVisible = true
    },
    closeAllDialog: function() {
      this.dialogVisible = false
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
