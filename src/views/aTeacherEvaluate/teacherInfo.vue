<template>
  <div class="app-container">
    <el-row :gutter="50">
      <el-col :span="8">
        <div class="userInfoContent">
          <div class="headimg"><img src="http://58.119.112.11:11001/img/avatar.jpg" alt=""></div>
          <div class="uName">{{ thecherBase.nickname }}</div>
          <div class="zhigong">职工号: {{ thecherBase.staff_number }}</div>
          <div class="jifen">积分: {{ thecherBase.tscore }}</div>
          <div class="tongNet">通讯信息</div>
          <div class="tongMCon">
            <div class="tongli">
              <div class="tongtitle">手机:</div>
              <div class="tongcenttn">{{ thecherBase.mobile }}</div>
            </div>
            <div class="tongli">
              <div class="tongtitle">电子邮件:</div>
              <div class="tongcenttn">{{ thecherBase.email }}</div>
            </div>
            <div class="tongli">
              <div class="tongtitle">地址:</div>
              <div class="tongcenttn">{{ thecherBase.country }}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <el-form ref="form" label-width="75px">
          <el-form-item label="信息类型">
            <el-select v-model="infoType" placeholder="请选择信息类型" @change="changeType">
              <el-option label="基础信息" value="基础信息"/>
              <el-option label="学习经历" value="学习经历"/>
              <el-option label="工作经历" value="工作经历"/>
              <el-option label="专业能力" value="专业能力"/>
            </el-select>
          </el-form-item>
        </el-form>
        <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
          <el-table-column align="center" label="类别" >
            <template slot-scope="scope">
              <span>{{ scope.row.key }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="内容">
            <template slot-scope="scope">
              <span>{{ scope.row.value }}</span>
            </template>
          </el-table-column>
          <!--<el-table-column min-width="300px" label="Title">-->
          <!--<template slot-scope="scope">-->
          <!--<template v-if="scope.row.edit">-->
          <!--<el-input v-model="scope.row.title" class="edit-input" size="small"/>-->
          <!--<el-button class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button>-->
          <!--</template>-->
          <!--<span v-else>{{ scope.row.title }}</span>-->
          <!--</template>-->
          <!--</el-table-column>-->

          <!--<el-table-column align="center" label="Actions" width="120">-->
          <!--<template slot-scope="scope">-->
          <!--<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="confirmEdit(scope.row)">Ok</el-button>-->
          <!--<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">Edit</el-button>-->
          <!--</template>-->
          <!--</el-table-column>-->
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTeacherInfo, getTeacherBase } from '@/api/teacherEvaluate'
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
      infoType: '',
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      token: getToken(),
      thecherBase: {}
    }
  },
  created() {
    this.getList()
    this.getbaseList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getTeacherInfo({ token: this.token }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    changeType() {
      console.log(this.infoType)
      this.listLoading = true
      getTeacherInfo({ infotype: this.infoType, token: this.token }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    getbaseList() {
      getTeacherBase(this.token).then(response => {
        this.thecherBase = response.data
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
  .userInfoContent{
    border: 1px solid #efefef;
    padding: 20px;
    text-align: center;
  }
  .headimg{
    width: 150px;
    margin: 0 auto;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .headimg img{
    width: 100%;
    height: auto;
  }
  .uName{
    font-size: 20px;
    font-weight: 600;
    margin: 15px 0;
  }
  .zhigong{
    color: #999;
  }
  .jifen{
    color: #167495;
    margin: 15px 0;
  }
  .tongli{
    width: 80%;
    margin: 10px auto;
    text-align: left;
    display: flex;
    color: #999;
  }
  .tongtitle{
    width: 80px;
    text-align: right;
    margin-right: 10px;
  }
  .tongNet{
    text-align: left;
    width: 100%;
    font-size: 16px;
    color: #409EFF;
    margin-bottom: 10px;
  }
  .tongMCon{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid #409EFF;
  }
</style>
