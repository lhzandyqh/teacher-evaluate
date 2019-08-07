<template>
  <div class="app-container">
    <el-row>
      <div class="mainContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="教育教学" name="first">
            <el-row>
              <academic-achievements-table/>
            </el-row>
            <el-row>
              <project-issue-table/>
            </el-row>
            <el-row>
              <experienceSharingTable/>
            </el-row>
            <el-row>
              <appraisal-emulation-table/>
            </el-row>
            <el-row>
              <research-lesson-table/>
            </el-row>
            <el-row>
              <education-teaching-achievements-table/>
            </el-row>
            <el-row>
              <student-awards-table/>
            </el-row>
            <el-row>
              <art-sport-club-table/>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="行政获奖" name="second">
            <el-row>
              <administrative-award-table/>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="校本培训" name="third">
            <el-row>
              <school-train-table/>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import schoolTrainTable from '@/views/aTeacherGrow/basicWorkTable/schoolTrainTable'
import administrativeAwardTable from '@/views/aTeacherGrow/basicWorkTable/administrativeAwardTable'
import academicAchievementsTable from '@/views/aTeacherGrow/basicWorkTable/academicAchievementsTable'
import projectIssueTable from '@/views/aTeacherGrow/basicWorkTable/projectIssueTable'
import experienceSharingTable from '@/views/aTeacherGrow/basicWorkTable/experienceSharingTable'
import appraisalEmulationTable from '@/views/aTeacherGrow/basicWorkTable/appraisalEmulationTable'
import researchLessonTable from '@/views/aTeacherGrow/basicWorkTable/researchLessonTable'
import educationTeachingAchievementsTable from '@/views/aTeacherGrow/basicWorkTable/educationTeachingAchievementsTable'
import studentAwardsTable from '@/views/aTeacherGrow/basicWorkTable/studentAwardsTable'
import artSportClubTable from '@/views/aTeacherGrow/basicWorkTable/artSportClubTable'

export default {
  name: 'BasicWork',
  components: { schoolTrainTable, studentAwardsTable, artSportClubTable, administrativeAwardTable, educationTeachingAchievementsTable, academicAchievementsTable, projectIssueTable, experienceSharingTable, appraisalEmulationTable, researchLessonTable },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
  .innerContainer{
    border: 1px solid #efefef;
    padding: 20px;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
  }
</style>
