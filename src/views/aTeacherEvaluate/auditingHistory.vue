<template>
  <div class="app-container">
    <div style="margin-bottom: 20px;">
      <el-button type="primary" >自动审核</el-button>
    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="资质编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="80" align="center" label="资质名称">
        <template slot-scope="scope">
          <span>{{ scope.row.tQualificationName }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="资质类型">
        <template slot-scope="scope">
          <span>{{ scope.row.certType }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="隶属级别">
        <template slot-scope="scope">
          <span>{{ scope.row.deptLevel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="资质等级">
        <template slot-scope="scope">
          <span>{{ scope.row.certLevel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="60" align="center" label="积分">
        <template slot-scope="scope">
          <span>{{ scope.row.point }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status==='-1'" type="primary">审核待通过</el-tag>
          <el-tag v-if="scope.row.status==='1'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.status==='0'" type="danger">审核未通过</el-tag>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="终审状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status==='-1'" type="primary">审核待通过</el-tag>
          <el-tag v-if="scope.row.status==='1'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.status==='0'" type="danger">审核未通过</el-tag>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核反馈">
        <template slot-scope="scope">
          <span>{{ scope.row.comment }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核人">
        <template slot-scope="scope">
          <span>{{ scope.row.auditor }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="申请时间">
        <template slot-scope="scope">
          <span>{{ scope.row.certIssuedTime }}</span>
        </template>
      </el-table-column>

      <!--<el-table-column class-name="status-col" label="审核状态" width="110">-->
      <!--<template slot-scope="scope">-->
      <!--<el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>-->
      <!--</template>-->
      <!--</el-table-column>-->

      <!--<el-table-column min-width="300px" label="Title">-->
      <!--<template slot-scope="scope">-->
      <!--<template v-if="scope.row.edit">-->
      <!--<el-input v-model="scope.row.title" class="edit-input" size="small"/>-->
      <!--<el-button class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button>-->
      <!--</template>-->
      <!--<span v-else>{{ scope.row.title }}</span>-->
      <!--</template>-->
      <!--</el-table-column>-->

      <el-table-column align="center" label="操作" width="220">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id)">查看</el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--查看弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="审核详情">
      审核历史详情
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
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">审核通过</el-button>
        <el-button type="danger" @click="editAuditing(0)">审核不通过</el-button>
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getAuditingHistory, editAuditingHistory, getAuditing } from '@/api/teacherEvaluate'
// import { getAuditingHistory, getAuditingListHistory, editAuditingHistory } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'

export default {
  name: 'InlineEditTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      token: getToken(),
      dialogPvVisible: false,
      thisId: '',
      pvData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getAuditingHistory(this.token).then(response => {
        this.list = response.data.qualification
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
      editAuditingHistory({ token: this.token, id: this.thisId, data: onStatus }).then(response => {
        this.dialogPvVisible = false
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
</style>
