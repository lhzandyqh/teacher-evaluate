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

      <el-table-column width="180" align="center" label="申请时间">
        <template slot-scope="scope">
          <span>{{ scope.row.certIssuedTime }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==='-1'" type="primary" size="small" plain>审核待通过</el-button>
          <el-button v-if="scope.row.status==='1'" type="success" size="small" plain>审核通过</el-button>
          <el-button v-if="scope.row.status==='0'" type="danger" size="small" plain>审核未通过</el-button>
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
          <el-button type="primary" size="small" icon="el-icon-zoom-in">查看</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getAuditingList } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'

export default {
  name: 'InlineEditTable',
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
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      token: getToken()
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
