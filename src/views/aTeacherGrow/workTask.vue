<template>
  <div class="app-container">
    <el-row>
      <div class="navigationBar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="一月" name="january">
            <el-row>
              <div class="formContainer">
                <teaching-jobs-table/>
              </div>
            </el-row>
            <el-row>
              <div class="formContainer">
                <education-jobs-table/>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="二月" name="february">二月</el-tab-pane>
          <el-tab-pane label="三月" name="march">三月</el-tab-pane>
          <el-tab-pane label="四月" name="april">四月</el-tab-pane>
          <el-tab-pane label="五月" name="may">五月</el-tab-pane>
          <el-tab-pane label="六月" name="june">六月</el-tab-pane>
          <el-tab-pane label="七月" name="july">七月</el-tab-pane>
          <el-tab-pane label="八月" name="august">八月</el-tab-pane>
          <el-tab-pane label="九月" name="september">九月</el-tab-pane>
          <el-tab-pane label="十月" name="october">十月</el-tab-pane>
          <el-tab-pane label="十一月" name="november">十一月</el-tab-pane>
          <el-tab-pane label="十二月" name="december">十二月</el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import workForm from '@/views/aTeacherGrow/teacherWorkForm/teacherWorkForm'
import teachingJobsTable from '@/views/aTeacherGrow/teacherWorkTable/teachingJobsTable'
import educationJobsTable from '@/views/aTeacherGrow/teacherWorkTable/educationJobTable'

export default {
  components: { workForm, teachingJobsTable, educationJobsTable },
  data() {
    return {
      activeName: 'april'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
