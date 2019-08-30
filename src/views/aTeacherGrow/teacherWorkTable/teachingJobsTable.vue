<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>完成教学工作情况</h4>
      </div>
      <div class="out" >
        <!--        <el-button type="success" plain @click="showUpload">导出全年表格</el-button>-->
      </div>
      <el-table
        :data="teachJobData"
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
          label="任教学校"
          prop="teach_chool"
          width="140"/>
        <el-table-column
          align="center"
          label="任教年级"
          prop="teach_grade"
          width="140"/>
        <el-table-column
          align="center"
          label="任教学科"
          prop="teach_subject"
          width="140"/>
        <el-table-column
          align="center"
          label="每周课时"
          prop="hour_per_week"
          width="140"/>
        <el-table-column
          align="center"
          label="总课时数"
          prop="total_hours"
          width="100"/>
        <el-table-column
          align="center"
          label="成绩效果"
          prop="score_result"
          width="100"/>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEditTwo(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="handleEdit">增加</el-button>
      </div>
    </div>
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
        <el-button type="primary" @click="jobDataIncrease">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="updateDialogFormVisible" title="编辑完成教学工作情况">
      <el-form :model="editForm">
        <el-form-item :label-width="formLabelWidth" label="起始时间">
          <el-date-picker v-model="editForm.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTimeTwo"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="终止时间">
          <el-date-picker v-model="editForm.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTimeTwo" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="任教学校">
          <el-input v-model="editForm.teachschool" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="任教年级">
          <el-input v-model="editForm.teachgrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="任教学科">
          <el-input v-model="editForm.teachsubject" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="每周课时">
          <el-input v-model="editForm.weekclass" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="总课时数">
          <el-input v-model="editForm.totalclass" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="成绩效果">
          <el-input v-model="editForm.achievementeffect" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="upDateJobData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="uploadDialogVisible" style="height: 80%" title="打印完成教学工作情况">
      <div>
        <el-table
          :data="outData"
          border
          style="width: 100%;padding-top: 1px">
          <el-table-column
            prop="start_time"
            label="起始时间"
            align="center"
            width="180"/>
          <el-table-column
            prop="end_time"
            label="终止时间"
            width="180"/>
          <el-table-column
            prop="teach_chool"
            label="任教学校"
            width="180"/>
          <el-table-column
            prop="teach_grade"
            label="任教年级"
            align="center"
            width="180"/>
          <el-table-column
            prop="teach_subject"
            label="任教学科"
            width="180"/>
          <el-table-column
            prop="hour_per_week"
            label="每周课时"
            width="180"/>
          <el-table-column
            prop="total_hours"
            label="总课时数"
            align="center"
            width="180"/>
          <el-table-column
            prop="score_result"
            label="成绩效果"/>
        </el-table>
      </div>
      <div style="padding-top: 30px">
        <el-button type="warning" plain @click="outExe">确认导出</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { teachJobIncrease, teachJobDelete, teachJobUpdate, getAllTeacherJobDataByYear, teachJobInquire, allTeachInquire } from '@/api/teacherGrow'
export default {
  name: 'TestTable',
  props: {
    // teachJobData: {
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
      uploadDialogVisible: false,
      updateDialogFormVisible: false,
      token: getToken(),
      excelData: [],
      outData: [],
      // toFatherData: this.teachJobData,
      teachJobData: [], // 没有从父组件过来
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
      editForm: {
        begindate: '',
        enddate: '',
        teachschool: '',
        teachgrade: '',
        teachsubject: '',
        weekclass: '',
        totalclass: '',
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
    this.getTeacherWorkData()
    this.getTeachingJobData()
  },
  methods: {
    getTeachingJobData: function() {
      const prams = {
        month: this.month
      }
      allTeachInquire(this.token).then(response => {
        this.teachJobData = response.data.teacher
      })
    },
    getTeacherWorkData: function() {
      const prams = {
        year: 2019
      }
      getAllTeacherJobDataByYear({ ...prams, token: this.token }).then(response => {
        this.outData = response.data.teachWorkByYear
      })
    },
    showUpload: function() {
      this.uploadDialogVisible = true
    },
    handleEditTwo(index, row) {
      console.log(index, row)
      this.updateDialogFormVisible = true
      this.editForm.id = row.id
      console.log(this.editForm)
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      teachJobDelete({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        const pram = {
          month: this.month
        }
        allTeachInquire(this.token).then(response => {
          this.teachJobData = response.data.teacher
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
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
      this.form.begindate = this.form.begindate.toString()
      this.form.enddate = this.form.enddate.toString()
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
    formatBeginTime(time) {
      this.form.begindate = time
    },
    formatEndTime(time) {
      this.form.enddate = time
    },
    formatBeginTimeTwo(time) {
      this.editForm.begindate = time
    },
    formatEndTimeTwo(time) {
      this.editForm.enddate = time
    },
    jobDataIncrease() {
      const prams = {
        start_time: this.form.begindate,
        end_time: this.form.enddate,
        teach_chool: this.form.teachschool,
        teach_grade: this.form.teachgrade,
        teach_subject: this.form.teachsubject,
        hour_per_week: this.form.weekclass,
        total_hours: this.form.totalclass,
        score_result: this.form.achievementeffect
      }
      console.log(prams.teach_chool)
      console.log(this.token)
      teachJobIncrease({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
        }
        const pram = {
          month: this.month
        }
        allTeachInquire(this.token).then(response => {
          this.teachJobData = response.data.teacher
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      // this.$emit("updateSonView",this.toFatherData)
      this.dialogFormVisible = false
    },
    upDateJobData() {
      console.log(this.editForm.id)
      const prams = {
        start_time: this.editForm.begindate,
        end_time: this.editForm.enddate,
        teach_chool: this.editForm.teachschool,
        teach_grade: this.editForm.teachgrade,
        teach_subject: this.editForm.teachsubject,
        hour_per_week: this.editForm.weekclass,
        total_hours: this.editForm.totalclass,
        score_result: this.editForm.achievementeffect,
      }
      // console.log(this.editForm.id)
      console.log(this.editForm)
      teachJobUpdate({ ...prams, token: this.token , id: this.editForm.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
          console.log(this.editForm)
          console.log(prams)
        } else {
          console.log('更新失败')
        }
        const pram = {
          month: this.month
        }
        allTeachInquire(this.token).then(response => {
          this.teachJobData = response.data.teacher
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
      })
      this.updateDialogFormVisible = false
    },
    outExe() {
      this.$confirm('此操作将导出excel文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.excelData = this.outData //你要导出的数据list。
        this.export2Excel()
      }).catch(() => {

      });
    },
    export2Excel() {
      var that = this;
      require.ensure([], () => {
        const { export_json_to_excel } = require('C:\\Users\\lanni\\WebstormProjects\\teacher-evaluate\\src\\excel\\Export2Excel.js'); //这里必须使用绝对路径
        const tHeader = ['起始时间','终止时间', '任教学校', '任教年级', '任教学科', '每周课时', '总课时数', '成绩效果']; // 导出的表头名
        const filterVal = ['start_time','end_time','teach_chool', 'teach_grade', 'teach_subject', 'hour_per_week','total_hours','score_result']; // 导出的表头字段名
        const list = that.excelData;
        const data = that.formatJson(filterVal, list);
        // let time1,time2 = '';
        // if(this.start !== '') {
        //   time1 = that.moment(that.start).format('YYYY-MM-DD')
        // }
        // if(this.end !== '') {
        //   time2 = that.moment(that.end).format('YYYY-MM-DD')
        // }
        export_json_to_excel(tHeader, data, `完成工作excel`);// 导出的表格名称，根据需要自己命名
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
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
  .out{
    float: right;
    padding-right: 30px;
    margin-bottom: 30px;
  }

</style>
