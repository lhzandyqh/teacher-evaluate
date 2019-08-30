<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="activity_type"
        align="center"
        label="活动类型"
        width="250"/>
      <el-table-column
        prop="activity_name"
        align="center"
        label="活动名称"
        width="250"/>
      <el-table-column
        prop="activity_level"
        align="center"
        label="课题级别"
        width="250"/>
      <el-table-column
        prop="activity_type"
        align="center"
        label="活动类型"
        width="250"/>
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
  name: 'MyExperienceSharing',
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
        project_name: '学术讲座与经验分享'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.lecExp_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
