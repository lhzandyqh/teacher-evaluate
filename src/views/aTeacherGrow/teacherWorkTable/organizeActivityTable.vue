<template>
  <div class="app-container">
    <el-row>
      <div class="innerContainer">
        <h4>组织指导课外活动情况</h4>
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
            prop="organizename"
            label="组织名称"/>
          <el-table-column
            prop="joinnumber"
            label="参加人数"/>
          <el-table-column
            prop="activitytimes"
            label="活动次数"/>
          <el-table-column
            prop="activitycontent"
            label="活动内容"/>
          <el-table-column
            prop="achievementeffect"
            label="成绩和效果"/>
        </el-table>
        <div class="buttonContainer">
          <el-button type="primary" plain @click="handleEdit">修改</el-button>
        </div>
      </div>
    </el-row>
    <el-dialog :visible.sync="dialogFormVisible" title="组织指导课外活动情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="form.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="组织名称">
          <el-input v-model="form.organizename" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="参加人数">
          <el-input v-model="form.joinnumber" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidthTwo" label-position="labelPosition" label="活动次数">
          <el-input v-model="form.activitytimes" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="活动内容">
          <el-input v-model="form.activitycontent" autocomplete="off"/>
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
        organizename: '',
        joinnumber: '',
        activitytimes: '',
        activitycontent: '',
        achievementeffect: ''
      },
      formLabelWidth: '160px',
      formLabelWidthTwo: '160px',
      tableData: [{
        begindate: '2018-8-23',
        enddate: '2018-9-1',
        organizename: '中科院',
        joinnumber: '34',
        activitytimes: '提升科学素养',
        activitycontent: '很多很多',
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
