<template>
  <div class="app-container">
    <el-row>
      <div class="innerContainer">
        <h4>指导 培养教师情况</h4>
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
            prop="teachwho"
            label="指导培养何校何人"/>
          <el-table-column
            prop="teachform"
            label="形式"/>
          <el-table-column
            prop="teachcontent"
            label="内容"/>
          <el-table-column
            prop="achievementeffect"
            label="成绩和效果"/>
        </el-table>
        <div class="buttonContainer">
          <el-button type="primary" plain @click="handleEdit">修改</el-button>
        </div>
      </div>
    </el-row>
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
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="形式">
          <el-input v-model="form.teachform" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="内容">
          <el-input v-model="form.teachcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="成绩效果">
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
export default {
  data() {
    return {
      border: true,
      dialogFormVisible: false,
      labelPosition: 'right',
      form: {
        begindate: '',
        enddate: '',
        teachwho: '',
        teachform: '',
        teachcontent: '',
        achievementeffect: ''
      },
      formLabelWidth: '160px',
      formLabelWidthTwo: '160px',
      tableData: [{
        begindate: '2019-2-13',
        enddate: '2019-4-23',
        teachwho: '张老师',
        teachform: '委托培养',
        teachcontent: '职称评定',
        achievementeffect: '有效'
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
