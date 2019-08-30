<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="research_course_type"
        align="center"
        label="研究课类型"
        width="200"/>
      <el-table-column
        prop="organizers_of_research_course"
        align="center"
        label="主办单位"
        width="200"/>
      <el-table-column
        prop="course_display_level"
        align="center"
        label="展示级别"
        width="200"/>
      <el-table-column
        prop="topic_name"
        align="center"
        label="课题名称"
        width="250"/>
      <el-table-column
        prop="teaching_time"
        align="center"
        label="授课时间"
        width="200"/>
      <el-table-column
        prop="course_length"
        align="center"
        label="授课时长"
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
  name: 'MyResearchLesson',
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
        project_name: '研究课'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.research_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
