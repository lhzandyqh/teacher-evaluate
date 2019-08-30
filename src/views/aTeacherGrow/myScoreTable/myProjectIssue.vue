<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="topic_level"
        align="center"
        label="课题级别"
        width="200"/>
      <el-table-column
        prop="topic_name"
        align="center"
        label="课题名称"
        width="200"/>
      <el-table-column
        prop="personal_role"
        align="center"
        label="个人角色"
        width="200"/>
      <el-table-column
        prop="item_setting_unit"
        align="center"
        label="地点"
        width="200"/>
      <el-table-column
        prop="topic_start_time"
        align="center"
        label="课题开始时间"
        width="200"/>
      <el-table-column
        prop="topic_end_time"
        align="center"
        label="课题结束时间"
        width="200"/>
      <el-table-column
        prop="score"
        align="center"
        label="分值"/>
    </el-table>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getTeacherPersonalScore } from '@/api/teacherInformation'
export default {
  name: 'MyProjectIssue',
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
        project_name: '项目课题'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.proTopics_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
