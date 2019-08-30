<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="competition_type"
        align="center"
        label="竞赛类型"
        width="200"/>
      <el-table-column
        prop="Organizers"
        align="center"
        label="主办单位"
        width="200"/>
      <el-table-column
        prop="entry_name"
        align="center"
        label="竞赛名称"
        width="250"/>
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
  name: 'MyAppraisalEmu',
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
        project_name: '教育教学评比竞赛'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.eduTeaCompet_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
