<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.qualification_type" placeholder="积分类型" clearable class="filter-item">
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
      <!--      <el-form ref="form" :model="listCreate" label-width="100px">-->
      <!--        <el-form-item label="资质类型">-->
      <!--          <el-select v-model="listCreate.qualification_type" placeholder="资质类型" clearable class="filter-item">-->
      <!--            <el-option label="行政获奖" value="行政获奖"/>-->
      <!--            <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>-->
      <!--            <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="隶属级别">-->
      <!--          <el-select v-model="listCreate.department_level" placeholder="隶属级别" clearable class="filter-item" >-->
      <!--            <el-option label="国际级" value="国际级"/>-->
      <!--            <el-option label="国家级" value="国家级"/>-->
      <!--            <el-option label="省部级" value="省部级"/>-->
      <!--            <el-option label="区县级" value="区县级"/>-->
      <!--            <el-option label="其他" value="其他"/>-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="资质等级">-->
      <!--          <el-select v-model="listCreate.qualification_level" placeholder="资质等级" clearable class="filter-item" >-->
      <!--            <el-option label="一等奖" value="一等奖"/>-->
      <!--            <el-option label="二等奖" value="二等奖"/>-->
      <!--            <el-option label="三等奖" value="三等奖"/>-->
      <!--            <el-option label="其他" value="其他"/>-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="积分">-->
      <!--          <el-input v-model="listCreate.score" style="width: 200px;"/>-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->
      <el-form ref="form" label-width="150px" style="margin: 20px 0;">
        <el-form-item label="请选择您的积分项目">
          <el-select v-model="t_qualification_name" placeholder="请选择您的积分项目" @change="changeZiZhi">
            <el-option label="学术成果积分配置" value="xueshu"/>
            <el-option label="研究课题积分配置" value="yanjiuke"/>
            <el-option label="学术讲座与经验分享积分配置" value="jinyan"/>
            <el-option label="教育教学评比竞赛积分配置" value="jingsai"/>
            <el-option label="研究课积分配置" value="yanjiu"/>
            <el-option label="教育教学成果获奖积分配置" value="jiaoyu"/>
            <el-option label="教师指导学生参加学科比赛获奖情况积分配置" value="xueke"/>
            <el-option label="艺科体社团积分配置" value="yike"/>
            <el-option label="行政获奖积分配置" value="xinzheng"/>
            <el-option label="校本培训积分配置" value="xiaoben"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-divider/>
      <el-row v-if="t_qualification_name==='xueshu'">
        <el-form ref="xueshuform" :model="xueshuform" label-width="200px">
          <el-form-item label="学术成果载体类型">
            <el-select v-model="xueshuform.type" placeholder="请选择学术成果载体类型" style="width: 60%;">
              <el-option label="论文" value="shangrgrgrmhai"/>
              <el-option label="专著" value="hunbgrgrgan"/>
            </el-select>
          </el-form-item>
          <el-form-item label="是否第一作者">
            <el-select v-model="xueshuform.first" placeholder="请选择是否第一作者">
              <el-option label="是" value="shanrhgsgai"/>
              <el-option label="否" value="hunsangagr"/>
            </el-select>
          </el-form-item>
          <el-form-item label="刊物等级（出版社等级）">
            <el-select v-model="xueshuform.rank" placeholder="请选择刊物等级（出版社等级）">
              <el-option label="核心期刊" value="shankhzzai"/>
              <el-option label="一般期刊" value="hunrrrban"/>
              <el-option label="区级" value="shantghaggi"/>
              <el-option label="校级" value="shanggghayi"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xueshuform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='yanjiuke'">
        <el-form ref="yanjiukeform" :model="yanjiukeform" label-width="100px">
          <el-form-item label="课题级别">
            <el-select v-model="yanjiukeform.rank" placeholder="请选择课题级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="yanjiukeform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='jinyan'">
        <el-form ref="jinyanform" :model="jinyanform" label-width="100px">
          <el-form-item label="活动类型">
            <el-select v-model="jinyanform.type" placeholder="请选择活动类型">
              <el-option label="论文案例" value="lunwen"/>
              <el-option label="现场课" value="xianchang"/>
              <el-option label="说课" value="shuoke"/>
              <el-option label="基本课" value="jiben"/>
              <el-option label="其他" value="qita"/>
            </el-select>
          </el-form-item>
          <el-form-item label="课题级别">
            <el-select v-model="jinyanform.rank" placeholder="请选择课题级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
              <el-option label="教研组" value="shanghai"/>
              <el-option label="年级组" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jinyanform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='jingsai'">
        <el-form ref="jinsaiform" :model="jinsaiform" label-width="100px">
          <el-form-item label="竞赛类型">
            <el-select v-model="jinsaiform.type" placeholder="请选择获奖级别">
              <el-option label="论文案例" value="shanhai"/>
              <el-option label="现场课" value="hunan"/>
              <el-option label="说课" value="shanghai"/>
              <el-option label="基本功" value="hengyang"/>
              <el-option label="其他" value="hengsyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="jinsaiform.rank" placeholder="请选择获奖级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="jinsaiform.denji" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="shanhai"/>
              <el-option label="二等奖" value="hunan"/>
              <el-option label="三等奖" value="shanghai"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jinsaiform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='yanjiu'">
        <el-form ref="yanjiuform" :model="yanjiuform" label-width="100px">
          <el-form-item label="研究课类型">
            <el-select v-model="jinsaiform.type" placeholder="研究课类型">
              <el-option label="公开课" value="shanhai"/>
              <el-option label="主题课" value="hunan"/>
              <el-option label="观摩课" value="shanghai"/>
              <el-option label="班会展示" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="展示级别">
            <el-select v-model="jinsaiform.rank" placeholder="请选择展示级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jinsaiform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='jiaoyu'">
        <el-form ref="jiaoyuform" :model="jiaoyuform" label-width="100px">
          <el-form-item label="获奖级别">
            <el-select v-model="jiaoyuform.region" placeholder="请选择获奖级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="jiaoyuform.rank" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="shanhai"/>
              <el-option label="二等奖" value="hunan"/>
              <el-option label="三等奖" value="shanghai"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jiaoyuform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xueke'">
        <el-form ref="xuekeform" :model="xuekeform" label-width="100px">
          <el-form-item label="学科" style="width: 200px">
            <el-input v-model="xuekeform.subject"/>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="xuekeform.region" placeholder="请选择获奖级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="xuekeform.region" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="shanhai"/>
              <el-option label="二等奖" value="hunan"/>
              <el-option label="三等奖" value="shanghai"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xuekeform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='yike'">
        <el-form ref="yikeform" :model="yikeform" label-width="100px">
          <el-form-item label="比赛类别">
            <el-select v-model="yikeform.type" placeholder="请选择比赛类别">
              <el-option label="艺术" value="shanhai"/>
              <el-option label="科技" value="hunan"/>
              <el-option label="体育" value="shanghai"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="yikeform.rank" placeholder="请选择获奖级别">
              <el-option label="一等奖" value="shanhai"/>
              <el-option label="二等奖" value="hunan"/>
              <el-option label="三等奖" value="shanghai"/>
              <el-option label="其他" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="yikeform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xinzheng'">
        <el-form ref="xinzhengform" :model="xinzhengform" label-width="100px">
          <el-form-item label="获奖级别">
            <el-select v-model="xinzhengform.region" placeholder="请选择获奖级别">
              <el-option label="国家级" value="shanhai"/>
              <el-option label="区级" value="hunan"/>
              <el-option label="市级" value="shanghai"/>
              <el-option label="校级" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="xinzhengform.rank" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="shanhai"/>
              <el-option label="二等奖" value="hunan"/>
              <el-option label="三等奖" value="shanghai"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖形式">
            <el-select v-model="xinzhengform.form" placeholder="请选择获奖等级">
              <el-option label="团队" value="shanhai"/>
              <el-option label="个人" value="hunan"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xinzhengform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xiaoben'">
        <el-form ref="xiaobenform" :model="xiaobenform" label-width="100px">
          <el-form-item label="培训类型">
            <el-select v-model="xiaobenform.type" placeholder="请选择培训类型">
              <el-option label="全校大会" value="shanhai"/>
              <el-option label="教研组会" value="hunan"/>
              <el-option label="年级组会" value="shanghai"/>
              <el-option label="专题培训" value="hengyang"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xiaobenform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
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
      xueshuform: {
        type: '',
        first: '',
        rank: '',
        score: ''
      },
      yanjiukeform: {
        name: '',
        rank: '',
        score: ''
      },
      jinyanform: {
        type: '',
        rank: '',
        score: ''
      },
      jinsaiform: {
        type: '',
        rank: '',
        denji: '',
        score: ''
      },
      yanjiuform: {
        type: '',
        rank: '',
        score: ''
      },
      jiaoyuform: {
        region: '',
        rank: '',
        score: ''
      },
      xuekeform: {
        region: '',
        rank: '',
        score: '',
        subject: ''
      },
      yikeform: {
        type: '',
        rank: '',
        score: ''
      },
      xinzhengform: {
        region: '',
        rank: '',
        form: '',
        score: ''
      },
      xiaobenform: {
        type: '',
        score: ''
      },
      t_qualification_name: 'xueshu',
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
      if (this.listQuery.qualification_type || this.listQuery.department_level || this.listQuery.qualification_level) {
        integrationSearch({ ...this.listQuery, token: this.token }).then(response => {
          const items = response.data
          this.list = items.map(v => {
            this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
            v.originalScore = v.score //  will be used when user click the cancel botton
            return v
          })
          this.listLoading = false
        })
      } else {
        this.getList()
      }
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
