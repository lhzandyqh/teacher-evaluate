<template>
  <div class="app-container">
    <el-form ref="form" label-width="75px">
      <el-form-item label="积分类型">
        <el-select v-model="infoType" placeholder="请选择积分类型" @change="changeType">
          <el-option label="全部类型" value="全部类型"/>
          <el-option label="学术科研(论文发表)" value="学术科研(论文发表)"/>
          <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>
          <el-option label="学术科研(会议活动)" value="学术科研(会议活动)"/>
          <el-option label="教育教学(教学成果)" value="教育教学(教学成果)"/>
          <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>
          <el-option label="行政获奖" value="行政获奖"/>
          <el-option label="其他" value="其他"/>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="积分名称">
        <template slot-scope="scope">
          <span>{{ scope.row.tQualificationName }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="积分类型">
        <template slot-scope="scope">
          <span>{{ scope.row.certType }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="隶属等级">
        <template slot-scope="scope">
          <span>{{ scope.row.deptLevel }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="积分等级">
        <template slot-scope="scope">
          <span>{{ scope.row.certLevel }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="积分分值">
        <template slot-scope="scope">
          <span>{{ scope.row.point }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="获得时间">
        <template slot-scope="scope">
          <span>{{ scope.row.certIssuedTime }}</span>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { integrationInfoList, integrationSearch } from '@/api/teacherEvaluate'
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
      infoType: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      integrationInfoList(this.token).then(response => {
        this.list = response.data.qualification
        this.listLoading = false
      })
    },
    changeType() {
      this.listLoading = true
      if (this.infoType === '全部类型') {
        integrationInfoList(this.token).then(response => {
          this.list = response.data.qualification
          this.listLoading = false
        })
      } else {
        integrationSearch({ certtype: this.infoType, token: this.token }).then(response => {
          this.list = response.data.qualification
          this.listLoading = false
        })
      }
    },
    cancelEdit(row) {
      row.score = row.originalScore
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalScore = row.score
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
