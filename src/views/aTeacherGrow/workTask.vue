<template>
  <div class="app-container">
    <el-row>
      <div class="navigationBar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="一月" name="january">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <education-jobs-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <class-situation-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <organize-activity-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <participate-education-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <guide-teacher-table/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="二月" name="february">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <education-jobs-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <class-situation-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <guide-teacher-table/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="三月" name="march">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="四月" name="april">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="五月" name="may">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="六月" name="june">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="七月" name="july">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="八月" name="august">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="九月" name="september">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="十月" name="october">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="十一月" name="november">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="十二月" name="december">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table :teach-job-data="teachJobData"/>
              </div>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import workForm from '@/views/aTeacherGrow/teacherWorkForm/teacherWorkForm'
import teachingJobsTable from '@/views/aTeacherGrow/teacherWorkTable/teachingJobsTable'
import educationJobsTable from '@/views/aTeacherGrow/teacherWorkTable/educationJobTable'
import classSituationTable from '@/views/aTeacherGrow/teacherWorkTable/classSituationTable'
import organizeActivityTable from '@/views/aTeacherGrow/teacherWorkTable/organizeActivityTable'
import participateEducationTable from '@/views/aTeacherGrow/teacherWorkTable/participateEducationTable'
import guideTeacherTable from '@/views/aTeacherGrow/teacherWorkTable/guideTeacherTable'
import testTable from '@/views/aTeacherGrow/teacherWorkTable/testTable'
import { teachJobInquire, allTeachInquire } from '@/api/teacherGrow'
import { getToken } from '@/utils/auth'
export default {
  components: { workForm, teachingJobsTable, educationJobsTable, classSituationTable, organizeActivityTable, participateEducationTable, guideTeacherTable, testTable },
  data() {
    return {
      activeName: 'april',
      month: 'may',
      token: getToken(),
      teachJobData: []
    }
  },
  watch: {
    // activeName: function(val) {
    //   console.log(val)
    //   // this.getTeachJobTableData
    //   // console.log(this.teachJobData)
    //   this.month = val
    //   // console.log('month is ' + this.month)
    //   // this.getTeachJobTableData
    //   // console.log(this.teachJobData)
    // }
  },
  mounted() {
    const prams = {
      month: this.month
    }
    teachJobInquire({ ...prams, token: this.token }).then(response => {
      this.teachJobData = response.data.teacher
    })
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
      // console.log(value)
      // this.getTeachJobTableData()
      console.log('我是' + tab.name)
      this.month = tab.name
      this.getTeachJobTableData()
      console.log(this.teachJobData)
    },
    getTeachJobTableData() {
      const prams = {
        month: this.month
      }
      console.log('现在是' + prams.month + '准备取数据了')
      teachJobInquire({ ...prams, token: this.token }).then(response => {
        // console.log(response.code)
        // if (response.data.code === 200) {
        //   console.log(response.data.teachWork.code)
        //   console.log('获取成功')
        //   this.teachJobData = response.data.teacher
        // } else {
        //   console.log(response.data.code)
        //   console.log('获取失败')
        // }
        this.teachJobData = response.data.teacher
        console.log('获取数据成功')
        // console.log(this.teachJobData)
        console.log('结束')
      })
    },
    getAllTeachData() {
      allTeachInquire(this.token).then(response => {
        this.teachJobData = response.data.teacher
      })
    }
  }
}
</script>

<style scoped>
  .navigationBar{
    text-align: center;
  }
  .el-tab-pane{
    font-size: 20px;
  }
  .formContainer{
    height: 100%;
    width: 100%;
  }
</style>
