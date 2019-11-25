<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择审核类别:</div>
        <div>
          <el-select v-model="type_select_value" placeholder="请选择审核类别">
            <el-option label="个人信息" value="geren"/>
            <el-option label="基本工作" value="jiben"/>
            <el-option label="学术成果" value="xueshu"/>
            <el-option label="项目课题" value="yanjiuke"/>
            <el-option label="学术讲座与经验分享" value="jinyan"/>
            <el-option label="教育教学评比竞赛" value="jingsai"/>
            <el-option label="研究课" value="yanjiu"/>
            <el-option label="教育教学成果获奖" value="jiaoyu"/>
            <el-option label="教师指导学生参加学科比赛获奖情况" value="xueke"/>
            <el-option label="艺科体社团积分" value="yike"/>
            <el-option label="行政获奖积分" value="xinzheng"/>
            <el-option label="校本培训积分" value="xiaoben"/>
          </el-select>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row v-if="type_select_value === 'geren'">
      <personal-information-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'jiben'">
      <basic-work-outcome/>
    </el-row>
    <el-row v-if="type_select_value === 'jingsai'">
      <apprasial-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xueshu'">
      <academic-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'yanjiu'">
      <research-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'jinyan'">
      <experience-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'jiaoyu'">
      <education-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'yanjiuke'">
      <project-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xiaoben'">
      <school-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xinzheng'">
      <administrative-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'yike'">
      <art-outcome-table/>
    </el-row>
    <el-row v-if="type_select_value === 'xueke'">
      <student-outcome-table/>
    </el-row>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import academicOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/academicOutcomeTable'
import administrativeOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/administrativeOutcomeTable'
import apprasialOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/apprasialOutcomeTable'
import artOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/artOutcomeTable'
import educationOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/educationOutcomeTable'
import experienceOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/experienceOutcomeTable'
import ProjectOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/ProjectOutcomeTable'
import researchOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/researchOutcomeTable'
import schoolOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/schoolOutcomeTable'
import studentOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/studentOutcomeTable'
import personalInformationOutcomeTable from '@/views/aTeacherGrow/auditingOutcome/personalInformationOutcomeTable'
import basicWorkOutcome from '@/views/aTeacherGrow/auditingOutcome/basicWorkOutcome'

export default {
  name: 'AuditResult',
  components: { academicOutcomeTable, administrativeOutcomeTable, apprasialOutcomeTable,
    artOutcomeTable, educationOutcomeTable, experienceOutcomeTable, ProjectOutcomeTable, researchOutcomeTable,
    schoolOutcomeTable, studentOutcomeTable, personalInformationOutcomeTable, basicWorkOutcome },
  data() {
    return {
      type_select_value: 'xueshu',
      value: '',
      token: getToken(),
      tableData: [],
      option: [
        { label: '学术成果', value: 'xueshu' },
        { label: '项目课题', value: 'yanjiuke' },
        { label: '学术讲座与经验分享', value: 'jinyan' },
        { label: '教育教学评比竞赛', value: 'jingsai' },
        { label: '研究课', value: 'yanjiu' },
        { label: '教育教学成果获奖', value: 'jiaoyu' },
        { label: '教师指导学生参加学科比赛情况获奖', value: 'xueke' },
        { label: '艺科体社团', value: 'yike' },
        { label: '行政获奖', value: 'xinzheng' },
        { label: '校本培训', value: 'xiaoben' }]
    }
  }
}
</script>

<style scoped>

</style>
