<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="积分编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="成果名称">
        <template slot-scope="scope">
          <span>{{ scope.row.outcome_name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{ scope.row.personnel_name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="60" align="center" label="积分">
        <template slot-scope="scope">
          <span>{{ scope.row.point }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="申请时间">
        <template slot-scope="scope">
          <span>{{ scope.row.certIssuedTime }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.audit_status==='待审核'" type="primary" size="small" plain>审核待通过</el-button>
          <el-button v-if="scope.row.status==='1'" type="success" size="small" plain>审核通过</el-button>
          <el-button v-if="scope.row.status==='0'" type="danger" size="small" plain>审核未通过</el-button>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id)">查看</el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--查看弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="审核详情">
      审核详情
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="outcome_name" label="成果名称"/>
        <el-table-column prop="award_time" label="获奖时间"/>
        <el-table-column prop="award_level" label="获奖级别"/>
        <!--<el-table-column prop="certType" label="证书颁发日期"/>-->
        <el-table-column prop="award_grade" label="获奖等级"/>
        <el-table-column prop="person_role" label="个人角色"/>
        <el-table-column prop="submit_time" label="提交审核时间"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.audit_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.status==='1'">审核通过</div>
            <div v-if="scope.row.status==='0'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <!--      <el-table fit highlight-current-row style="width: 100%;margin-top: 40px;">-->
      <!--        <el-table-column align="center" label="审核原因">-->
      <!--          <el-input-->
      <!--            :rows="2"-->
      <!--            v-model="textarea"-->
      <!--            type="textarea"-->
      <!--            placeholder="请输入内容"/>-->
      <!--        </el-table-column>-->
      <!--      </el-table>-->
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="myStatus.remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">审核通过</el-button>
        <el-button type="danger" @click="editAuditing(0)">审核不通过</el-button>
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getAuditingListData, getEduTeachAchieceDetail, auditingEduTeachAchiece } from '@/api/getAuditingData'
export default {
  name: 'EducationAuditingTable',
  data() {
    return {
      token: getToken(),
      tableData: [],
      dialogPvVisible: false,
      pvData: [],
      myStatus: {
        id: '',
        status: '',
        remark: ''
      }
    }
  },
  mounted() {
    this.getListData()
  },
  methods: {
    getListData: function() {
      const prams = {
        project_name: '教育教学成果'
      }
      getAuditingListData({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.eduTeaAchiAuditList
        console.log(this.tableData)
      })
    },
    getAuditing(id) {
      this.myStatus.id = id

      this.dialogPvVisible = true
      const prams = {
        id: id
      }
      getEduTeachAchieceDetail({ ...prams, token: this.token }).then(response => {
        this.pvData = response.data.eduTeachAchieve
        console.log('输出PV数据')
        console.log(this.pvData)
      })

      // this.thisId = id
      // const that = this
      // getAuditing({ token: this.token, id: id }).then(response => {
      //   console.log(response.data)
      //   this.dialogPvVisible = true
      //   that.pvData = [response.data]
      // })
    },
    editAuditing: function(num) {
      if (num === '0') {
        this.myStatus.status = '审核不通过'
      } else {
        this.myStatus.status = '审核通过'
      }
      const prams = {
        qualification_id: this.myStatus.id,
        status: this.myStatus.status,
        remark: this.myStatus.remark
      }
      auditingEduTeachAchiece({ ...prams, token: this.token }).then(response => {
        this.$message({
          message: '审核完成',
          type: 'success'
        })
        const prams = {
          project_name: '教育教学成果'
        }
        getAuditingListData({ ...prams, token: this.token }).then(response => {
          this.tableData = response.data.eduTeaAchiAuditList
          console.log(this.tableData)
        })
        // const prams = {
        //   project_name: '学术成果'
        // }
        // getAuditingListData({ ...prams, token: this.token }).then(response => {
        //   this.tableData = response.data.acadeAchieveAuditList
        //   console.log('刷新数据')
        // })
      })
      this.dialogPvVisible = false
    }
  }
}
</script>

<style scoped>

</style>
