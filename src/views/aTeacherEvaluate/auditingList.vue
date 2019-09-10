<template>
  <div class="app-container">
    <div style="margin-bottom: 20px;">
      <!--      <el-button type="primary" >自动审核</el-button>-->
      <div class="select">
        <el-row :gutter="5">
          <el-col :span="3">
            <div class="title">
              <span style="font-size: 14px;font-weight: bolder">选择积分项目类型</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="select">
              <el-select v-model="type_select_value" placeholder="请选择您的积分项目类型" @change="changeZiZhi">
                <el-option label="学术成果" value="xueshu"/>
                <el-option label="项目课题" value="yanjiuke"/>
                <el-option label="学术讲座与经验分享" value="jinyan"/>
                <el-option label="教育教学评比竞赛" value="jingsai"/>
                <el-option label="研究课" value="yanjiu"/>
                <el-option label="教育教学成果获奖" value="jiaoyu"/>
                <el-option label="教师指导学生参加学科比赛获奖情况" value="xueke"/>
                <el-option label="艺科体社团" value="yike"/>
                <el-option label="行政获奖" value="xinzheng"/>
                <el-option label="校本培训" value="xiaoben"/>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-divider/>
    <el-row v-if="type_select_value === 'jingsai'">
      <apprasial-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xueshu'">
      <academic-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'yanjiu'">
      <research-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'jinyan'">
      <experience-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'jiaoyu'">
      <education-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'yanjiuke'">
      <project-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xiaoben'">
      <school-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xinzheng'">
      <administrative-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'yike'">
      <art-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xueke'">
      <student-auditing-table/>
    </el-row>
    <!--    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">-->

    <!--      <el-table-column align="center" label="积分编号" width="80">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.id }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="80" align="center" label="资质名称">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.tQualificationName }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="150" align="center" label="资质类型">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.certType }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="150" align="center" label="隶属级别">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.deptLevel }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="150" align="center" label="资质等级">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.certLevel }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="60" align="center" label="积分">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.point }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="180" align="center" label="申请时间">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.certIssuedTime }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column width="180" align="center" label="审核状态">-->
    <!--        <template slot-scope="scope">-->
    <!--          <el-button v-if="scope.row.status==='-1'" type="primary" size="small" plain>审核待通过</el-button>-->
    <!--          <el-button v-if="scope.row.status==='1'" type="success" size="small" plain>审核通过</el-button>-->
    <!--          <el-button v-if="scope.row.status==='0'" type="danger" size="small" plain>审核未通过</el-button>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      &lt;!&ndash;<el-table-column class-name="status-col" label="审核状态" width="110">&ndash;&gt;-->
    <!--      &lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
    <!--      &lt;!&ndash;<el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>&ndash;&gt;-->
    <!--      &lt;!&ndash;</template>&ndash;&gt;-->
    <!--      &lt;!&ndash;</el-table-column>&ndash;&gt;-->

    <!--      &lt;!&ndash;<el-table-column min-width="300px" label="Title">&ndash;&gt;-->
    <!--      &lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
    <!--      &lt;!&ndash;<template v-if="scope.row.edit">&ndash;&gt;-->
    <!--      &lt;!&ndash;<el-input v-model="scope.row.title" class="edit-input" size="small"/>&ndash;&gt;-->
    <!--      &lt;!&ndash;<el-button class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button>&ndash;&gt;-->
    <!--      &lt;!&ndash;</template>&ndash;&gt;-->
    <!--      &lt;!&ndash;<span v-else>{{ scope.row.title }}</span>&ndash;&gt;-->
    <!--      &lt;!&ndash;</template>&ndash;&gt;-->
    <!--      &lt;!&ndash;</el-table-column>&ndash;&gt;-->

    <!--      <el-table-column align="center" label="操作" width="220">-->
    <!--        <template slot-scope="scope">-->
    <!--          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id)">查看</el-button>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--    </el-table>-->

    <!--查看弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="审核详情">
      审核详情
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="tQualificationName" label="资质名称"/>
        <el-table-column prop="certLevel" label="资质等级"/>
        <el-table-column prop="certType" label="资质类型"/>
        <el-table-column prop="deptLevel" label="隶属级别"/>
        <!--<el-table-column prop="certType" label="证书颁发日期"/>-->
        <el-table-column prop="issuingAgency" label="颁发机构"/>
        <el-table-column prop="tQualificationNum" label="证书编号"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.status==='-1'">审核待通过</div>
            <div v-if="scope.row.status==='1'">审核通过</div>
            <div v-if="scope.row.status==='0'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="formAuditing" fit highlight-current-row style="width: 100%;margin-top: 40px;">
        <el-table-column align="center" label="审核原因">
          <template slot-scope="scope">
            <textarea id="" v-model="scope.row.auditingReson" name="" style="width: 100%;" rows="10"/>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">审核通过</el-button>
        <el-button type="danger" @click="editAuditing(0)">审核不通过</el-button>
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { getAuditingList, getAuditing, editAuditing } from '@/api/teacherEvaluate'
import { getAuditingList, editAuditing, getAuditing } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'
import academicAuditingTable from '@/views/aTeacherGrow/auditingListTable/academicAuditingTable'
import projectAuditingTable from '@/views/aTeacherGrow/auditingListTable/projectAuditingTable'
import experienceAuditingTable from '@/views/aTeacherGrow/auditingListTable/experienceAuditingTable'
import apprasialAuditingTable from '@/views/aTeacherGrow/auditingListTable/apprasialAuditingTable'
import researchAuditingTable from '@/views/aTeacherGrow/auditingListTable/researchAuditingTable'
import educationAuditingTable from '@/views/aTeacherGrow/auditingListTable/educationAuditingTable'
import studentAuditingTable from '@/views/aTeacherGrow/auditingListTable/studentAuditingTable'
import artAuditingTable from '@/views/aTeacherGrow/auditingListTable/artAuditingTable'
import administrativeAuditingTable from '@/views/aTeacherGrow/auditingListTable/administrativeAuditingTable'
import schoolAuditingTable from '@/views/aTeacherGrow/auditingListTable/schoolAuditingTable'

export default {
  name: 'InlineEditTable',
  components: { academicAuditingTable, projectAuditingTable, experienceAuditingTable, apprasialAuditingTable,
    researchAuditingTable, educationAuditingTable, studentAuditingTable, artAuditingTable, administrativeAuditingTable,
    schoolAuditingTable },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: '待审核',
        draft: '审核未通过',
        deleted: '审核通过'
      }
      return statusMap[status + 1]
    }
  },
  data() {
    return {
      type_select_value: 'xueshu',
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      token: getToken(),
      dialogPvVisible: false,
      thisId: '',
      formAuditing: [{ auditingReson: '' }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getAuditingList(this.token).then(response => {
        this.list = response.data.qualification
        // this.list = items.map(v => {
        //   this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        //   v.originalTitle = v.title //  will be used when user click the cancel botton
        //   return v
        // })
        this.listLoading = false
      })
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    getAuditing(id) {
      this.thisId = id
      const that = this
      getAuditing({ token: this.token, id: id }).then(response => {
        console.log(response.data)
        this.dialogPvVisible = true
        that.pvData = [response.data]
      })
    },
    editAuditing(onStatus) {
      console.log(this.formAuditing[0].auditingReson)
      editAuditing({ token: this.token, id: parseInt(this.thisId), comment: this.formAuditing[0].auditingReson, data: onStatus }).then(response => {
        this.dialogPvVisible = false
        if (response.data.code === 200) {
          if (response.data.msg === '审核通过') {
            this.$message({
              message: response.data.msg,
              type: 'success'
            })
          } else {
            this.$message({
              message: response.data.msg,
              type: 'error'
            })
          }
          this.getList()
        }
      })
    }
  }
}
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .title{
    margin-top: 10px;
  }
</style>
