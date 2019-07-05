<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>汇报课 观摩课 研究课情况</h4>
      </div>
      <el-table
        :data="reportObserResData"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          label="开课日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.start_date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="开课类别"
          prop="open_class"
          width="140"/>
        <el-table-column
          align="center"
          label="课程内容"
          prop="class_content"
          width="100"/>
        <el-table-column
          align="center"
          label="目的要求"
          prop="propose_req"
          width="100"/>
        <el-table-column
          align="center"
          label="市级听课范围人数"
          prop="city_peop"
          width="140"/>
        <el-table-column
          align="center"
          label="区县级听课范围人数"
          prop="county_peop"
          width="180"/>
        <el-table-column
          align="center"
          label="校级听课范围人数"
          prop="school_peop"
          width="140"/>
        <el-table-column
          align="center"
          label="成绩效果"
          prop="score_results"
          width="100"/>
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
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="目的要求">
          <el-input v-model="form.aimdemand" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="市级听课范围人数">
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
        <el-button type="primary" @click="classAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogFormVisibleEdit" title="编辑汇报课 观摩课 研究课情况">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="开课日期">
          <el-date-picker v-model="formEdit.classbegindate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="开课类别">
          <el-input v-model="formEdit.classcategory" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="课程内容">
          <el-input v-model="formEdit.classcontent" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="目的要求">
          <el-input v-model="formEdit.aimdemand" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="市级听课范围人数">
          <el-input v-model="formEdit.citynumber" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="区县级听课范围人数">
          <el-input v-model="formEdit.regionnumber" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="校级听课范围人数">
          <el-input v-model="formEdit.schoolnumber" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="成绩效果">
          <el-input v-model="formEdit.achievementeffect" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="classUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reportObsResearchIncrease, reportObsResearchUpdate, reportObsResearchDelete } from '@/api/teacherGrow'
import { getToken } from '@/utils/auth'
export default {
  name: 'TestTable',
  props: {
    reportObserResData: {
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
        classbegindate: '',
        classcategory: '',
        classcontent: '',
        aimdemand: '',
        citynumber: '',
        regionnumber: '',
        schoolnumber: '',
        achievementeffect: ''
      },
      formEdit: {
        classbegindate: '',
        classcategory: '',
        classcontent: '',
        aimdemand: '',
        citynumber: '',
        regionnumber: '',
        schoolnumber: '',
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
  methods: {
    add: function() {
      this.dialogFormVisible = true
    },
    classAdd: function() {
      const prams = {
        start_date: this.form.classbegindate,
        open_class: this.form.classcategory,
        class_content: this.form.classcontent,
        propose_req: this.form.aimdemand,
        city_peop: this.form.citynumber,
        school_peop: this.form.schoolnumber,
        county_peop: this.form.regionnumber,
        score_results: this.form.achievementeffect
      }
      console.log(this.token)
      reportObsResearchIncrease({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
        }
      })
      this.dialogFormVisible = false
    },
    classUpdate: function() {
      const prams = {
        start_date: this.formEdit.classbegindate,
        open_class: this.formEdit.classcategory,
        class_content: this.formEdit.classcontent,
        propose_req: this.formEdit.aimdemand,
        city_peop: this.formEdit.citynumber,
        school_peop: this.formEdit.schoolnumber,
        county_peop: this.formEdit.regionnumber,
        score_results: this.formEdit.achievementeffect
      }
      console.log(this.editForm)
      reportObsResearchUpdate({ ...prams, token: this.token, id: this.formEdit.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
          console.log(this.editForm)
          console.log(prams)
        } else {
          console.log('更新失败')
        }
      })
      this.dialogFormVisibleEdit = false
    },
    handleEditTwo(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
      const prams = {
        id: row.id
      }
      reportObsResearchDelete({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
      })
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
