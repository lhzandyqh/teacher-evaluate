<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="award_name"
        align="center"
        label="获奖名称"
        width="200"/>
      <el-table-column
        prop="award_level"
        align="center"
        label="获奖级别"
        width="200"/>
      <el-table-column
        prop="award_grade"
        align="center"
        label="获奖等级"
        width="200"/>
      <el-table-column
        prop="award_time"
        align="center"
        label="获奖时间"
        width="200"/>
      <el-table-column
        prop="organizers_of_administrative"
        align="center"
        label="主办单位"
        width="200"/>
      <el-table-column
        prop="award_from"
        align="center"
        label="获奖形式"
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
  name: 'MyAdminiAward',
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
        project_name: '行政获奖'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.adminAward_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
