<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="Subject"
        align="center"
        label="学科"
        width="200"/>
      <el-table-column
        prop="competition_name"
        align="center"
        label="比赛名称"
        width="250"/>
      <el-table-column
        prop="award_name"
        align="center"
        label="获奖名称"
        width="250"/>
      <el-table-column
        prop="award_time"
        align="center"
        label="获奖时间"
        width="200"/>
      <el-table-column
        prop="award_level"
        align="center"
        label="获奖级别"
        width="180"/>
      <el-table-column
        prop="award_grade"
        align="center"
        label="获奖等级"
        width="200"/>
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
  name: 'MyStudentAwards',
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
        project_name: '教师指导学生参加学科比赛获奖情况'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.subCompet_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
