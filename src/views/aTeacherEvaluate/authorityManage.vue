<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择年级:</div>
        <div>
          <el-select v-model="value" placeholder="请选择年级">
            <el-option
              v-for="item in optionsone"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择教研组:</div>
        <div>
          <el-select v-model="valuea" placeholder="请选择教研组">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row>
      <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

        <el-table-column align="center" label="序号">
          <template slot-scope="scope">
            <span>{{ scope.row.userid }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="编号">
          <template slot-scope="scope">
            <span>{{ scope.row.userid }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.personnel_name }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.gender }}</span>
          </template>
        </el-table-column>

        <!--        <el-table-column align="center" label="年龄">-->
        <!--          <template slot-scope="scope">-->
        <!--            <span>{{ scope.row.certLevel }}</span>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <el-table-column align="center" label="学科">
          <template slot-scope="scope">
            <span>{{ scope.row.post }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="级别">
          <template slot-scope="scope">
            <span>{{ scope.row.position_level }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="权限设置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">
              <el-option label="教师" value="教师"/>
              <el-option label="审核员" value="审核员"/>
              <el-option label="系统管理员" value="系统管理员"/>
            </el-select>
          </template>
        </el-table-column>

      </el-table>
    </el-row>

  </div>
</template>

<script>
import { getAuthorityList, editAuthority } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'

export default {
  name: 'AuthorityManage',
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
      optionsone: [{
        value: '一',
        label: '高一'
      }, {
        value: '二',
        label: '高二'
      }, {
        value: '三',
        label: '高三'
      }],
      optionstwo: [{
        value: '选项1',
        label: '语文教研组'
      }, {
        value: '选项2',
        label: '数学教研组'
      }, {
        value: '选项3',
        label: '英语教研组'
      },
      {
        value: '选项4',
        label: '物理教研组'
      }, {
        value: '选项5',
        label: '化学教研组'
      }, {
        value: '选项6',
        label: '生物教研组'
      }, {
        value: '选项7',
        label: '历史教研组'
      }, {
        value: '选项8',
        label: '政治教研组'
      }, {
        value: '选项9',
        label: '地理教研组'
      }],
      value: '',
      valuea: '',
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      token: getToken(),
      dialogPvVisible: false,
      thisId: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getAuthorityList(this.token).then(response => {
        this.list = response.data
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
    eidtAuthority(id, role) {
      // this.thisId = id
      // let that = this
      editAuthority({ token: this.token, userid: id, rolename: role }).then(response => {
        if (response.data.code === 200) {
          this.$message({
            showClose: true,
            message: '用户角色更换成功！',
            type: 'success'
          })
        } else {
          this.$message({
            showClose: true,
            message: '用户角色更换失败！',
            type: 'warning'
          })
        }
        //   that.pvData[0] = response.data
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
