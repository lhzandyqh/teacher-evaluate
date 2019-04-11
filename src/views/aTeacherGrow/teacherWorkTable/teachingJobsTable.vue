<template>
  <div class="app-container">
    <el-row>
      <div class="innerContainer">
        <h4>完成教学工作情况</h4>
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            prop="begindate"
            label="起始时间"/>
          <el-table-column
            prop="enddate"
            label="终止时间"/>
          <el-table-column
            prop="teachschool"
            label="任教学校"/>
          <el-table-column
            prop="teachgrade"
            label="任教年级"/>
          <el-table-column
            prop="teachsubject"
            label="任教学科"/>
          <el-table-column
            prop="weekclass"
            label="每周课时"/>
          <el-table-column
            prop="totalclass"
            label="总课时数"/>
          <el-table-column
            prop="achievementeffect"
            label="成绩效果"/>
        </el-table>
        <div class="buttonContainer">
          <el-button type="primary" plain @click="handleEdit">修改</el-button>
        </div>
      </div>
    </el-row>
    <el-dialog :visible.sync="dialogFormVisible" title="完成教学工作情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="起始时间">
          <el-date-picker v-model="form.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="终止时间">
          <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="任教学校">
          <el-input v-model="form.teachschool" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="任教年级">
          <el-input v-model="form.teachgrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="任教学科">
          <el-input v-model="form.teachsubject" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="每周课时">
          <el-input v-model="form.weekclass" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="总课时数">
          <el-input v-model="form.totalclass" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="成绩效果">
          <el-input v-model="form.achievementeffect" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import modifyTeachingJobsTable from '@/views/aTeacherGrow/modifyWorkTable/modifyTeachingJobsTable'
export default {
  components: { modifyTeachingJobsTable },
  data() {
    return {
      border: true,
      dialogFormVisible: false,
      form: {
        begindate: '',
        enddate: '',
        teachschool: '',
        teachgrade: '',
        teachsubject: '',
        weekclass: '',
        totalclass: '',
        achievementeffect: ''
      },
      formLabelWidth: '120px',
      tableData: [{
        begindate: '2019-03-01',
        enddate: '2019-07-23',
        teachschool: '中关村中学',
        teachgrade: '高三',
        teachsubject: '物理',
        weekclass: '8',
        totalclass: '160',
        achievementeffect: '效果良好'
      }]
    }
  },
  methods: {
    // 点击编辑
    handleEdit(index, row) {
      // this.form = this.tableData
      // this.currentIndex = index
      this.dialogFormVisible = true
      this.editForm = Object.assign({}, row)
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
  }
  .buttonContainer{
    padding-top: 10px;
  }

</style>
