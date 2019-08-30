<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="school_sponsors"
        align="center"
        label="校级发起人"
        width="200"/>
      <el-table-column
        prop="organizer_of_training"
        align="center"
        label="组织者"
        width="200"/>
      <el-table-column
        prop="training_type"
        align="center"
        label="培训类型"
        width="200"/>
      <el-table-column
        prop="Participants"
        align="center"
        label="参加人员"
        width="200"/>
      <el-table-column
        prop="training_time"
        align="center"
        label="培训时间"
        width="200"/>
      <el-table-column
        prop="Score"
        align="center"
        label="分数"/>
    </el-table>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getTeacherPersonalScore } from '@/api/teacherInformation'
export default {
  name: 'MySchoolTrain',
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
        project_name: '校本培训'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.schoolTrain_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
