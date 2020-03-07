<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择年级组:</div>
        <div>
          <el-select v-model="valuea" placeholder="请选择年级组">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">请输入教师姓名:</div>
        <div>
          <el-input v-model="input" placeholder="请输入姓名"/>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px" @click="findTeacher">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row>
      <el-table v-loading="listLoading" :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

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

        <el-table-column align="center" label="权限展示">
          <!--          <template slot-scope="scope">-->
          <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
          <!--              <el-option label="教师" value="教师"/>-->
          <!--              <el-option label="审核员" value="审核员"/>-->
          <!--              <el-option label="系统管理员" value="系统管理员"/>-->
          <!--            </el-select>-->
          <!--          </template>-->
          <template slot-scope="scope">
            <div v-for="(item,i) in scope.row.userrole" :key="i">
              <span>{{ item }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column align="center" label="权限设置">
          <!--          <template slot-scope="scope">-->
          <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
          <!--              <el-option label="教师" value="教师"/>-->
          <!--              <el-option label="审核员" value="审核员"/>-->
          <!--              <el-option label="系统管理员" value="系统管理员"/>-->
          <!--            </el-select>-->
          <!--          </template>-->
          <template slot-scope="scope">
            <el-select v-model="scope.row.edit" multiple placeholder="请选择权限">
              <el-option label="教师" value="教师"/>
              <el-option label="教师组长" value="教师组长"/>
              <el-option label="系统管理员" value="系统管理员"/>
            </el-select>
            <el-button type="primary" style="margin-top: 10px" @click="editRoles(scope.row.userid, scope.row.edit)">确认修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="fenye">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="list.length"
          style="margin-top:20px;"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-row>

  </div>
</template>

<script>
import { getAuthorityList, editAuthority, getAllTeachGroup, getAuthorityListWithPrams, setManyRoles } from '@/api/teacherEvaluate'
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
      pagesize: 10,
      currentPage: 1,
      value1: [],
      input: '',
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
      optionstwo: [],
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
    this.getTeachGroupList()
  },
  methods: {
    editRoles: function(id, roles) {
      // console.log(roles[6])
      if (roles.length < 1) {
        this.$message({
          showClose: true,
          message: '未选择权限！',
          type: 'warning'
        })
      } else {
        var roleString = ''
        for (let i = 0; i < roles.length; i++) {
          roleString = roleString + roles[i]
          if (roles[i + 1] !== 'undefined') {
            roleString = roleString + ','
          } else {
            break
          }
        }
        console.log('测试roleString')
        console.log(roleString)
        setManyRoles({ token: this.token, userid: id, rolename: roleString }).then(response => {
          if (response.data.code === 200) {
            this.$message({
              showClose: true,
              message: '用户角色编辑成功！',
              type: 'success'
            })
          } else {
            this.$message({
              showClose: true,
              message: '用户角色编辑失败！',
              type: 'warning'
            })
          }
          this.getList()
        })
      }
    },
    findTeacher: function() {
      console.log('我要根据参数找老师了')
      if (this.valuea === '') {
        // this.$message({
        //   message: ' 请选择年级组',
        //   type: 'warning'
        // })
        const prams = {
          username: this.input
          // dept: this.valuea
        }
        console.log('测试参数')
        console.log(prams)
        getAuthorityListWithPrams({ ...prams, token: this.token }).then(response => {
          console.log('测试根据姓名和年级组获取权限列表data带名字不带教研组')
          console.log(response.data)
          if (response.data.teacherRoleInfo === '暂无教师角色信息!') {
            this.$message({
              message: '暂无教师角色信息',
              type: 'warning'
            })
          } else {
            this.list = response.data.teacherRoleInfo
          }
          this.listLoading = false
        })
      } else if (this.input === '') {
        const prams = {
          // username: this.input,
          dept: this.valuea
        }
        console.log('测试参数')
        console.log(prams)
        getAuthorityListWithPrams({ ...prams, token: this.token }).then(response => {
          console.log('测试根据姓名和年级组获取权限列表data不带名字')
          console.log(response.data)
          if (response.data.teacherRoleInfo === '暂无教师角色信息!') {
            this.$message({
              message: '暂无教师角色信息',
              type: 'warning'
            })
          } else {
            this.list = response.data.teacherRoleInfo
          }
          this.listLoading = false
        })
      } else {
        const prams = {
          username: this.input,
          dept: this.valuea
        }
        console.log('测试参数')
        console.log(prams)
        getAuthorityListWithPrams({ ...prams, token: this.token }).then(response => {
          console.log('测试根据姓名和年级组获取权限列表data带名字')
          console.log(response.data)
          if (response.data.teacherRoleInfo === '暂无教师角色信息!') {
            this.$message({
              message: '暂无教师角色信息',
              type: 'warning'
            })
          } else {
            this.list = response.data.teacherRoleInfo
          }
          this.listLoading = false
        })
      }
    },
    getTeachGroupList: function() {
      getAllTeachGroup(this.token).then(response => {
        console.log('测试返回的教研组')
        console.log(response.data)
        // eslint-disable-next-line no-empty
        for (let i = 0; i < response.data.allDeptName.length; i++) {
          const obj = {
            value: response.data.allDeptName[i],
            label: response.data.allDeptName[i]
          }
          this.optionstwo.push(obj)
        }
      })
    },
    getList() {
      this.listLoading = true
      getAuthorityList(this.token).then(response => {
        console.log('测试1权限列表data')
        console.log(response.data)
        this.list = response.data.teacherRoleInfo
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
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
  .fenye {
    text-align: center;
  }
</style>
