<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="type_of_carriers"
        align="center"
        label="学术成果载体类型"
        width="150"/>
      <el-table-column
        prop="is_first_author"
        align="center"
        label="是否第一作者"
        width="130"/>
      <el-table-column
        prop="level_of_publisher"
        align="center"
        label="刊物等级（出版社等级）"
        width="180"/>
      <el-table-column
        prop="academic_name"
        align="center"
        label="成果名称"
        width="240"/>
      <el-table-column
        prop="name_of_publications"
        align="center"
        label="期刊名称（出版社名称）"
        width="180"/>
      <el-table-column
        prop="number_of_academic"
        align="center"
        label="编号"
        width="200"/>
      <el-table-column
        prop="publication_time"
        align="center"
        label="发表时间（出版时间）"
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
  name: 'MyAcademicAchi',
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
        project_name: '学术成果'
      }
      getTeacherPersonalScore({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.academic_points_details
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
