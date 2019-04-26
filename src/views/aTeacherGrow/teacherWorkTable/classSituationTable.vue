<template>
  <div class="app-container">
    <el-row>
      <div class="innerContainer">
        <h4>汇报课 观摩课 研究课情况</h4>
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            prop="classbegindate"
            label="开课日期"/>
          <el-table-column
            prop="classcategory"
            label="开课类别"/>
          <el-table-column
            prop="classcontent"
            label="课程内容"/>
          <el-table-column
            prop="aimdemand"
            label="目的要求"/>
          <el-table-column
            prop="citynumber"
            label="市级听课范围人数"/>
          <el-table-column
            prop="regionnumber"
            label="区县级听课范围人数"/>
          <el-table-column
            prop="schoolnumber"
            label="校级听课范围人数"/>
          <el-table-column
            prop="achievementeffect"
            label="成绩和效果"/>
        </el-table>
        <div class="buttonContainer">
          <el-button type="primary" plain @click="handleEdit">修改</el-button>
        </div>
      </div>
    </el-row>
    <el-dialog :visible.sync="dialogFormVisible" title="汇报课 观摩课 研究课情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="开课日期">
          <el-date-picker v-model="form.classbegindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="开课类别">
          <el-input v-model="form.classcategory" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="课程内容">
          <el-input v-model="form.classcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="目的要求">
          <el-input v-model="form.aimdemand" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="市级听课范围人数">
          <el-input v-model="form.citynumber" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="区县级听课范围人数">
          <el-input v-model="form.regionnumber" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="校级听课范围人数">
          <el-input v-model="form.schoolnumber" autocomplete="off"/>
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
        classbegindate: '',
        classcategory: '',
        classcontent: '',
        aimdemand: '',
        citynumber: '',
        regionnumber: '',
        schoolnumber: '',
        achievementeffect: ''
      },
      formLabelWidth: '160px',
      formLabelWidthTwo: '160px',
      tableData: [{
        classbegindate: '2018-8-22',
        classcategory: '2019-11-15',
        classcontent: '汇报课',
        aimdemand: '展示物理实验',
        citynumber: '100',
        regionnumber: '45',
        schoolnumber: '60',
        achievementeffect: '很好'
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
        this.form.classbegindate=this.form.classbegindate.toString()
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
