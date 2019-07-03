<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>参加系统进修或继续教育情况</h4>
      </div>
      <el-table
        :data="furLeaContinueEduData"
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
          label="进修单位名称"
          prop="study_unit_name"
          width="140"/>
        <el-table-column
          align="center"
          label="进修内容"
          prop="fur_edu_content"
          width="140"/>
        <el-table-column
          align="center"
          label="进修形式"
          prop="fur_edu_form"
          width="140"/>
        <el-table-column
          align="center"
          label="完成课时"
          prop="finish_hours"
          width="140"/>
        <el-table-column
          align="center"
          label="学习成绩"
          prop="fur_edu_score"
          width="100"/>
        <el-table-column
          align="center"
          label="结业时间"
          width="140">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.completion_time }}</span>
          </template>
        </el-table-column>
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
    <el-dialog :visible.sync="dialogFormVisible" title="参加系统进修或继续教育情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="form.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="进修单位名称">
          <el-input v-model="form.organizationmame" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="进修内容">
          <el-input v-model="form.educationcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="进修形式">
          <el-input v-model="form.educationform" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="完成课时">
          <el-input v-model="form.achievementclass" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="学习成绩">
          <el-input v-model="form.studygrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="结业时间">
          <el-date-picker v-model="form.completetime" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatOverTime"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="participateAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogFormVisibleEdit" title="编辑参加系统进修或继续教育情况">
      <el-form :model="formEdit">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="起始时间">
          <el-date-picker v-model="formEdit.begindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="终止时间">
          <el-date-picker v-model="formEdit.enddate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatEndTime" />
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="进修单位名称">
          <el-input v-model="formEdit.organizationmame" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="进修内容">
          <el-input v-model="formEdit.educationcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="进修形式">
          <el-input v-model="formEdit.educationform" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="完成课时">
          <el-input v-model="formEdit.achievementclass" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="学习成绩">
          <el-input v-model="formEdit.studygrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="结业时间">
          <el-date-picker v-model="formEdit.completetime" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatOverEditTime"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="partcipateUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { furLeaContinueEduIncrease, furLeaContinueEduUpdate, furLeaContinueEduDelete } from '@/api/teacherGrow'
import { getToken } from '@/utils/auth'
export default {
  name: 'TestTable',
  props: {
    furLeaContinueEduData: {
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
        organizationmame: '',
        educationcontent: '',
        educationform: '',
        achievementclass: '',
        studygrade: '',
        completetime: ''
      },
      formEdit: {
        begindate: '',
        enddate: '',
        organizationmame: '',
        educationcontent: '',
        educationform: '',
        achievementclass: '',
        studygrade: '',
        completetime: '',
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
  methods: {
    add: function() {
      this.dialogFormVisible = true
    },
    participateAdd: function() {
      const prams = {
        start_time: this.form.begindate,
        end_time: this.form.enddate,
        study_unit_name: this.form.organizationmame,
        fur_edu_content: this.form.educationcontent,
        fur_edu_form: this.form.educationform,
        finish_hours: this.form.achievementclass,
        fur_edu_score: this.form.studygrade,
        completion_time: this.form.completetime
      }
      console.log(this.token)
      furLeaContinueEduIncrease({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
        }
      })
      this.dialogFormVisible = false
    },
    partcipateUpdate: function() {
      const prams = {
        start_time: this.formEdit.begindate,
        end_time: this.formEdit.enddate,
        study_unit_name: this.formEdit.organizationmame,
        fur_edu_content: this.formEdit.educationcontent,
        fur_edu_form: this.formEdit.educationform,
        finish_hours: this.formEdit.achievementclass,
        fur_edu_score: this.formEdit.studygrade,
        completion_time: this.formEdit.completetime
      }
      furLeaContinueEduUpdate({ ...prams, token: this.token, id: this.formEdit.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
          // console.log(this.editForm)
          // console.log(prams)
        } else {
          console.log('更新失败')
        }
      })
      this.dialogFormVisibleEdit = false
    },
    handleDelete(index, row) {
      console.log(index, row)
      const prams = {
        id: row.id
      }
      furLeaContinueEduDelete({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
      })
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
    formatOverTime(time) {
      this.form.completion_time = time
    },
    formatOverEditTime(time) {
      this.formEdit.completion_time = time
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
      },
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
