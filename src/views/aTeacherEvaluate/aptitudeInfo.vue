<template>
  <div class="app-container">
    <div style="margin-bottom: 20px;">
      <router-link to="/aptitudeInfo/aptitudeInfoAdd"><el-button type="primary" >新增</el-button></router-link>
      <el-button v-if="false" type="primary" >批量新增</el-button>
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

      <el-table-column width="80" align="center" label="扩展信息">
        <template slot-scope="scope">
          <span>{{ scope.row.deptLevel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="80" align="center" label="资质等级">
        <template slot-scope="scope">
          <span>{{ scope.row.certLevel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==='-1'" type="primary" size="small" plain>待审核</el-button>
          <el-button v-if="scope.row.status==='1'" type="success" size="small" plain>审核通过</el-button>
          <el-button v-if="scope.row.status==='0'" type="danger" size="small" plain>审核未通过</el-button>
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

      <el-table-column width="180px" align="center" label="审核时间">
        <template slot-scope="scope">
          <span>{{ scope.row.regularRegistTime }}</span>
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

      <el-table-column align="center" label="操作" width="290">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getApitiude(scope.row.id)">查看</el-button>
          <el-button type="primary" size="small" icon="el-icon-edit" @click="goEdit(scope.row.id)">修改</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteApitiude(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--查看弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="资质详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="cert_issued_time" label="申请时间"/>
        <el-table-column prop="cert_level" label="资质等级"/>
        <el-table-column prop="cert_type" label="资质类型"/>
        <el-table-column prop="comment" label="审核状态"/>
        <el-table-column prop="dept_level" label="扩展信息"/>
      </el-table>
      <el-table :data="pvData" fit highlight-current-row style="width: 100%;margin-top: 40px;">
        <el-table-column prop="issuing_agency" label="代理机构"/>
        <el-table-column prop="point" label="积分"/>
        <el-table-column prop="reason" label="结果"/>
        <el-table-column prop="t_qualification_name" label="授权类别"/>
        <el-table-column prop="t_qualification_num" label="授权编号"/>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">确定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getAptitudeInfo, getAptitudeDelete, getAptitude } from '@/api/teacherEvaluate'
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
      pvData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getAptitudeInfo(this.token).then(response => {
        this.list = response.data.qualification
        this.listLoading = false
      })
    },
    deleteApitiude(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        getAptitudeDelete({ token: this.token, id: id }).then(response => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getApitiude(id) {
      getAptitude({ token: this.token, id: id }).then(response => {
        this.dialogPvVisible = true
        this.pvData = [response.data]
      })
    },
    goEdit(id) {
      this.$router.push({ path: '/aptitudeInfo/aptitudeInfoAdd', query: { id: id }})
    }
    // cancelEdit(row) {
    //   row.title = row.originalTitle
    //   row.edit = false
    //   this.$message({
    //     message: 'The title has been restored to the original value',
    //     type: 'warning'
    //   })
    // },
    // confirmEdit(row) {
    //   row.edit = false
    //   row.originalTitle = row.title
    //   this.$message({
    //     message: 'The title has been edited',
    //     type: 'success'
    //   })
    // }
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
