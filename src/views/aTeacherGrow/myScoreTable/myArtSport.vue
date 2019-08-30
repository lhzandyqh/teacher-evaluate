<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="competition_name"
        align="center"
        label="比赛名称"
        width="300"/>
      <el-table-column
        prop="award_level"
        align="center"
        label="获奖级别"
        width="300"/>
      <el-table-column
        prop="award_time"
        align="center"
        label="获奖时间"
        width="300"/>
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
  name: 'MyArtSport',
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
        project_name: '艺科体社团'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.artAssoica_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
