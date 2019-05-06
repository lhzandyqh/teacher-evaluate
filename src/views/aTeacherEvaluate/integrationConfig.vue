<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.qualification_type" placeholder="资质类型" clearable class="filter-item">
        <el-option label="行政获奖" value="行政获奖"/>
        <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>
        <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>
      </el-select>
      <el-select v-model="listQuery.department_level" placeholder="隶属级别" clearable class="filter-item" >
        <el-option label="国际级" value="国际级"/>
        <el-option label="国家级" value="国家级"/>
        <el-option label="省部级" value="省部级"/>
        <el-option label="区县级" value="区县级"/>
        <el-option label="其他" value="其他"/>
      </el-select>
      <el-select v-model="listQuery.qualification_level" placeholder="资质等级" clearable class="filter-item" >
        <el-option label="一等奖" value="一等奖"/>
        <el-option label="二等奖" value="二等奖"/>
        <el-option label="三等奖" value="三等奖"/>
        <el-option label="其他" value="其他"/>
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="dialogPvVisible = true">新增积分</el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="资质类型">
        <template slot-scope="scope">
          <span>{{ scope.row.qualification_type }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="隶属级别">
        <template slot-scope="scope">
          <span>{{ scope.row.department_level }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="资质等级">
        <template slot-scope="scope">
          <span>{{ scope.row.qualification_level }}</span>
        </template>
      </el-table-column>

      <el-table-column label="积分额度">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input v-model="scope.row.score" class="edit-input" size="small"/>
            <el-button class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">取消</el-button>
          </template>
          <span v-else>{{ scope.row.score }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="confirmEdit(scope.row)">完成</el-button>
          <el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">修改</el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--新增弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="新增积分">
      <el-form ref="form" :model="listCreate" label-width="100px">
        <el-form-item label="资质类型">
          <el-select v-model="listCreate.qualification_type" placeholder="资质类型" clearable class="filter-item">
            <el-option label="行政获奖" value="行政获奖"/>
            <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>
            <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>
          </el-select>
        </el-form-item>
        <el-form-item label="隶属级别">
          <el-select v-model="listCreate.department_level" placeholder="隶属级别" clearable class="filter-item" >
            <el-option label="国际级" value="国际级"/>
            <el-option label="国家级" value="国家级"/>
            <el-option label="省部级" value="省部级"/>
            <el-option label="区县级" value="区县级"/>
            <el-option label="其他" value="其他"/>
          </el-select>
        </el-form-item>
        <el-form-item label="资质等级">
          <el-select v-model="listCreate.qualification_level" placeholder="资质等级" clearable class="filter-item" >
            <el-option label="一等奖" value="一等奖"/>
            <el-option label="二等奖" value="二等奖"/>
            <el-option label="三等奖" value="三等奖"/>
            <el-option label="其他" value="其他"/>
          </el-select>
        </el-form-item>
        <el-form-item label="积分">
          <el-input v-model="listCreate.score" style="width: 200px;"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
        <el-button type="success" @click="handleCreate">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { integrationConfigList, integrationSearch, creatIntegration, updateIntegration } from '@/api/teacherEvaluate'
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
      token: getToken(),
      listQuery: {
        qualification_type: '',
        department_level: '',
        qualification_level: ''
      },
      listCreate: {},
      dialogPvVisible: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      integrationConfigList(this.token).then(response => {
        const items = response.data
        this.list = items.map(v => {
          this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
          v.originalScore = v.score //  will be used when user click the cancel botton
          return v
        })
        this.listLoading = false
      })
    },
    cancelEdit(row) {
      row.score = row.originalScore
      row.edit = false
      this.$message({
        message: '取消修改',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      updateIntegration({ ...row, token: this.token }).then(response => {
        if (response.data.code === 200) {
          row.edit = false
          row.originalScore = row.score
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        } else {
          row.edit = false
          this.$message({
            message: '修改失败',
            type: 'warning'
          })
        }
      })
    },
    handleFilter() {
      // this.listLoading = true
      integrationSearch({ ...this.listQuery, token: this.token }).then(response => {
        const items = response.data
        this.list = items.map(v => {
          this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
          v.originalScore = v.score //  will be used when user click the cancel botton
          return v
        })
        this.listLoading = false
      })
    },
    handleCreate() {
      creatIntegration({ ...this.listCreate, token: this.token }).then(response => {
        this.dialogPvVisible = false
        if (response.data.code === 200) {
          this.$message({
            showClose: true,
            message: '积分插入成功！',
            type: 'success'
          })
        } else {
          this.$message({
            showClose: true,
            message: '积分插入失败！',
            type: 'warning'
          })
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
</style>
