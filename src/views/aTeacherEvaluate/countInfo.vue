<template>
  <div class="app-container">
    <el-row :gutter="50">
      <el-col :span="12" style="border-right: 1px solid #efefef;">
        <el-form ref="form" label-width="70px">
          <el-form-item label="教学组">
            <el-select v-model="sujectName" placeholder="请选择教学组" @change="changeType">
              <el-option label="全部" value="全部"/>
              <el-option label="语文" value="语文"/>
              <el-option label="数学" value="数学"/>
              <el-option label="英语" value="英语"/>
              <el-option label="物理" value="物理"/>
              <el-option label="化学" value="化学"/>
              <el-option label="生物" value="生物"/>
            </el-select>
          </el-form-item>
        </el-form>
        <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
          <el-table-column align="center" label="编号" >
            <template slot-scope="scope">
              <span>{{ scope.row.staff_number }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.tname }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="教学组">
            <template slot-scope="scope">
              <span>{{ scope.row.tsubject }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="积分">
            <template slot-scope="scope">
              <span>{{ scope.row.tscore }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <div class="jifenProTitle">积分概要统计</div>
        <div v-for="(item, index) in gaiList" :key="index" class="jifenli">
          <div class="jifenTiele">{{ item.tsubject }}</div>
          <el-row :gutter="20">
            <el-col :span="20">
              <el-progress :show-text="false" :stroke-width="16" :percentage="item.sumscore/maxNum*100" />
            </el-col>
            <el-col :span="4">{{ item.sumscore }}</el-col>
          </el-row>
        </div>
        <!--<el-progress :show-text="false" :stroke-width="18" :percentage="0"></el-progress>-->
        <!--<el-progress :show-text="false" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>-->
        <!--<el-progress :show-text="false" :stroke-width="18" :percentage="100"></el-progress>-->
        <!--<el-progress :show-text="false" :stroke-width="18" :percentage="50"></el-progress>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCountListAll, getCountList, getCountListGaiyao } from '@/api/teacherEvaluate'
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
      gaiList: [],
      maxNum: 100,
      sujectName: '',
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
    this.getGaiList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getCountListAll(this.token).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    getGaiList() {
      getCountListGaiyao(this.token).then(response => {
        const newArr = []
        this.gaiList = response.data
        if (response.data) {
          response.data.map((item) => {
            if (item.sumscore) {
              newArr.push(parseInt(item.sumscore))
            }
          })
        }
        this.maxNum = Math.max.apply(null, newArr) * 4 / 3
        console.log(this.maxNum)
      })
    },
    changeType() {
      if (this.sujectName === '全部') {
        this.getList()
      } else {
        this.listLoading = true
        getCountList({ sujectname: this.sujectName, token: this.token }).then(response => {
          this.list = response.data
          this.listLoading = false
        })
      }
    }
  }
}
</script>

<style scoped>
  .jifenProTitle{
    font-size: 18px;
    margin: 20px 0;
    color: #409EFF;
    font-weight: 600;
  }
  .jifenli{
    margin: 20px 0;
  }
  .jifenTiele{
    margin-bottom: 10px;
  }
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
