<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>完成教育工作情况</h4>
      </div>
      <el-table
        :data="eductionJobData"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          label="起始时间"
          width="140">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="终止时间"
          width="140">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="担任班主任年级"
          prop="grade_head_teacher"
          width="140"/>
        <el-table-column
          align="center"
          label="累计班主任工作年限"
          prop="years_head_teacher"
          width="220"/>
        <el-table-column
          align="center"
          label="担任其他教育工作职务"
          prop="other_edu_tasks"
          width="220"/>
        <!--        <el-table-column-->
        <!--          align="center"-->
        <!--          label="成绩效果"-->
        <!--          prop="score_results"-->
        <!--          width="140"/>-->
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
    <el-dialog :visible.sync="dialogFormVisible" title="完成教育工作情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="form.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="担任班主任年级">
          <el-input v-model="form.headteachergrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="累计班主任工作年限">
          <el-input v-model="form.headteacheryear" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="担任其他教育工作职务">
          <el-input v-model="form.othereducatejob" autocomplete="off"/>
        </el-form-item>
        <!--        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="成绩效果">-->
        <!--          <el-input v-model="form.achievementeffect" autocomplete="off"/>-->
        <!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="educationDataIncrease">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="updateDialogFormVisible" title="编辑完成教育工作情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="editForm.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="editForm.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="担任班主任年级">
          <el-input v-model="editForm.headteachergrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="累计班主任工作年限">
          <el-input v-model="editForm.headteacheryear" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="担任其他教育工作职务">
          <el-input v-model="editForm.othereducatejob" autocomplete="off"/>
        </el-form-item>
        <!--        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="成绩效果">-->
        <!--          <el-input v-model="editForm.achievementeffect" autocomplete="off"/>-->
        <!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateEducationData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { educationJobIncrease, educationJobDelete, educationJobUpdate, eductionJobInquire, allEducationInquire } from '@/api/teacherGrow'
import { getToken } from '@/utils/auth'
export default {
  name: 'TestTable',
  props: {
    // eductionJobData: {
    //   type: Array,
    //   required: true
    // },
    month: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      updateDialogFormVisible: false,
      eductionJobData: [],
      token: getToken(),
      form: {
        begindate: '',
        enddate: '',
        headteachergrade: '',
        headteacheryear: '',
        othereducatejob: '',
        achievementeffect: ''
      },
      editForm: {
        begindate: '',
        enddate: '',
        headteachergrade: '',
        headteacheryear: '',
        othereducatejob: '',
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
    this.getEducationJobData()
  },
  methods: {
    getEducationJobData: function() {
      const prams = {
        month: this.month
      }
      allEducationInquire(this.token).then(response => {
        this.eductionJobData = response.data.eduWork
      })
    },
    add: function() {
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row.id
      }
      educationJobDelete({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        const prams = {
          month: this.month
        }
        allEducationInquire(this.token).then(response => {
          this.eductionJobData = response.data.eduWork
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    educationDataIncrease: function() {
      const prams = {
        start_time: this.form.begindate,
        end_time: this.form.enddate,
        grade_head_teacher: this.form.headteachergrade,
        years_head_teacher: this.form.headteacheryear,
        other_edu_tasks: this.form.othereducatejob,
        score_results: this.form.achievementeffect
      }
      console.log(this.token)
      educationJobIncrease({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
        }
        const prams = {
          month: this.month
        }
        allEducationInquire(this.token).then(response => {
          this.eductionJobData = response.data.eduWork
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.dialogFormVisible = false
    },
    updateEducationData: function() {
      const prams = {
        start_time: this.editForm.begindate,
        end_time: this.editForm.enddate,
        grade_head_teacher: this.editForm.headteachergrade,
        years_head_teacher: this.editForm.headteacheryear,
        other_edu_tasks: this.editForm.othereducatejob,
        score_results: this.editForm.achievementeffect
      }
      console.log(this.editForm)
      educationJobUpdate({ ...prams, token: this.token, id: this.editForm.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
          console.log(this.editForm)
          console.log(prams)
        } else {
          console.log('更新失败')
        }
        const prams = {
          month: this.month
        }
        allEducationInquire(this.token).then(response => {
          this.eductionJobData = response.data.eduWork
        })
        this.$message({
          message: '恭喜你，更新成功',
          type: 'success'
        })
      })
      this.updateDialogFormVisible = false
    },
    handleEditTwo(index, row) {
      console.log(index, row)
    },
    handledelete(index, row) {
      console.log(row.id)
      setTimeout(() => {
        this.$emit('delete', row.id)
        console.log('我好了弟弟你呢')
      }, 3000)
      // this.$emit('delete', row.id)
      // console.log('我好了弟弟你呢')
    },
    // 点击编辑
    handleEdit(index, row) {
      // this.form = this.tableData
      // this.currentIndex = index
      console.log(index, row)
      this.updateDialogFormVisible = true
      this.editForm.id = row.id
      console.log(this.editForm)
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
