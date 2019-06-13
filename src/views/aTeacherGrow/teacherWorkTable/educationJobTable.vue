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
              @click="handledelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="handleEditTwo">增加</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="完成教学工作情况">
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
  name: 'TestTable',
  props: {
    eductionJobData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        begindate: '',
        enddate: '',
        headteachergrade: '',
        headteacheryear: '',
        othereducatejob: '',
        achievementeffect: ''
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
  methods: {
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
