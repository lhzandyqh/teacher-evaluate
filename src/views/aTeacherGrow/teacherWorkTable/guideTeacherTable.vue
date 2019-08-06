<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>指导 培养教师情况</h4>
      </div>
      <el-table
        :data="guidanceTrainTecData"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          label="起始时间"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="终止时间"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="指导培养何校何人"
          width="260">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.school_who }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="形式"
          prop="format"
          width="140"/>
        <el-table-column
          align="center"
          label="内容"
          prop="content"
          width="220"/>
        <el-table-column
          align="center"
          label="成绩效果"
          prop="score_results"
          width="140"/>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="add">增加</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="指导 培养教师情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="form.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="指导培养何校何人">
          <el-input v-model="form.teachwho" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="形式">
          <el-input v-model="form.teachform" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="内容">
          <el-input v-model="form.teachcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="成绩效果">
          <el-input v-model="form.achievementeffect" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="guideAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogFormVisibleEdit" title="编辑指导 培养教师情况">
      <el-form :model="formEdit">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="formEdit.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="formEdit.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="指导培养何校何人">
          <el-input v-model="formEdit.teachwho" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="形式">
          <el-input v-model="formEdit.teachform" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="内容">
          <el-input v-model="formEdit.teachcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="成绩效果">
          <el-input v-model="formEdit.achievementeffect" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="guideUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { guidanceTrainTecIncrease, guidanceTrainTecUpdate, guidanceTrainTecDelete, allGuidanceInquire } from '@/api/teacherGrow'
import { getToken } from '@/utils/auth'
export default {
  name: 'TestTable',
  props: {
    guidanceTrainTecData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisibleEdit: false,
      token: getToken(),
      form: {
        begindate: '',
        enddate: '',
        teachwho: '',
        teachform: '',
        teachcontent: '',
        achievementeffect: ''
      },
      formEdit: {
        begindate: '',
        enddate: '',
        teachwho: '',
        teachform: '',
        teachcontent: '',
        achievementeffect: '',
        id: ''
      },
      formLabelWidth: '160px'
      // teachJobData: [{
      //   begindate: '2019-03-01',
      //   enddate: '2019-07-23',
      //   teachschool: '中关村中学',
      //   teachgrade: '高三',
      //   teachsubject: '物理',
      //   weekclass: '8',
      //   totalclass: '160',
      //   achievementeffect: '效果良好'
      // }]
    }
  },
  mounted() {
    this.getGuideData()
  },
  methods: {
    getGuideData: function() {
      allGuidanceInquire(this.token).then(response => {
        this.guidanceTrainTecData = response.data.guidanceTrainTec
      })
    },
    add: function() {
      this.dialogFormVisible = true
    },
    guideAdd: function() {
      const prams = {
        start_time: this.form.begindate,
        end_time: this.form.enddate,
        school_who: this.form.teachwho,
        format: this.form.teachform,
        content: this.form.teachcontent,
        score_results: this.form.achievementeffect
      }
      console.log(this.token)
      guidanceTrainTecIncrease({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
        }
        allGuidanceInquire(this.token).then(response => {
          this.guidanceTrainTecData = response.data.guidanceTrainTec
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.dialogFormVisible = false
    },
    guideUpdate: function() {
      const prams = {
        start_time: this.formEdit.begindate,
        end_time: this.formEdit.enddate,
        school_who: this.formEdit.teachwho,
        format: this.formEdit.teachform,
        content: this.formEdit.teachcontent,
        score_results: this.formEdit.achievementeffect
      }
      guidanceTrainTecUpdate({ ...prams, token: this.token, id: this.formEdit.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
          console.log(this.editForm)
          console.log(prams)
        } else {
          console.log('更新失败')
        }
        allGuidanceInquire(this.token).then(response => {
          this.guidanceTrainTecData = response.data.guidanceTrainTec
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.dialogFormVisibleEdit = false
    },
    handleEditTwo(index, row) {
      console.log(index, row)
    },
    // 点击编辑
    handleEdit(index, row) {
      // this.form = this.tableData
      // this.currentIndex = index
      this.dialogFormVisibleEdit = true
      this.formEdit.id = row.id
      // this.editForm = Object.assign({}, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
      const prams = {
        id: row.id
      }
      guidanceTrainTecDelete({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        allGuidanceInquire(this.token).then(response => {
          this.guidanceTrainTecData = response.data.guidanceTrainTec
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },

    // 点击关闭dialog
    handleClose(done) {
      /* done();
            location.reload();*/
      this.editFormVisible = false
    },

    // 点击取消
    handleCancel(formName) {
      this.editFormVisible = false
    },
    /* eslint-disable */
      update(index, row) {
        this.form.begindate=this.form.begindate.toString()
        this.form.enddate=this.form.enddate.toString()
        // this.tableData.push(this.form)
        this.tableData.splice(index, 1)
        this.tableData.push(this.form)
        // this.tableData[0] = this.form
        this.dialogFormVisible = false
        this.dialogFormVisible = false
        console.log(this.form)
        console.log(this.tableData[0])
        console.log(this.tableData)
      },
      formatBeginTime(time){
        this.form.begindate = time
      },
      formatEndTime(time){
        this.form.enddate = time
      }
    }
  }
</script>

<style scoped>
  .innerContainer{
    border: 1px solid #efefef;
    padding: 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
  }
  .buttonContainer{
    padding-top: 10px;
    text-align: center;
  }
  .innerContainer{
    text-align: center;
  }

</style>
