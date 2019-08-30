<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="outcome_name"
        align="center"
        label="成果名称"
        width="250"/>
      <el-table-column
        prop="award_level"
        align="center"
        label="获奖级别"
        width="250"/>
      <el-table-column
        prop="award_grade"
        align="center"
        label="获奖等级"
        width="250"/>
      <el-table-column
        prop="person_role"
        align="center"
        label="个人角色"
        width="250"/>
      <el-table-column
        prop="award_time"
        align="center"
        label="获奖时间"
        width="250"/>
      <el-table-column
        prop="Score"
        align="center"
        label="分值"/>
    </el-table>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getTeacherPersonalScore } from '@/api/teacherInformation'
export default {
  name: 'MyEducationTeach',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getMyAcademicData()
  },
  methods: {
    getMyAcademicData: function() {
      const prams = {
        project_name: '教育教学成果'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.eduTeaAchi_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
