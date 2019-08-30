<template>
  <div class="app-container">
    <el-form ref="form" label-width="75px">
      <el-form-item label="积分类型">
        <el-select v-model="infoType" placeholder="请选择积分类型" @change="changeType">
          <el-option label="学术成果" value="学术成果"/>
          <el-option label="项目课题" value="项目课题"/>
          <el-option label="学术讲座与经验分享" value="学术讲座与经验分享"/>
          <el-option label="教育教学评比竞赛" value="教育教学评比竞赛"/>
          <el-option label="研究课" value="研究课"/>
          <el-option label="教育教学成果获奖" value="教育教学成果获奖"/>
          <el-option label="教师指导学生参加学科竞赛获奖情况" value="教师指导学生参加学科竞赛获奖情况"/>
          <el-option label="艺科体社团" value="艺科体社团"/>
          <el-option label="行政获奖" value="行政获奖"/>
          <el-option label="校本培训" value="校本培训"/>
        </el-select>
      </el-form-item>
    </el-form>
    <el-divider/>
    <el-row v-if="infoType === '学术成果'">
      <my-academic-achi/>
    </el-row>
    <el-row v-if="infoType === '项目课题'">
      <my-project-issue/>
    </el-row>
    <el-row v-if="infoType === '学术讲座与经验分享'">
      <my-experience-sharing/>
    </el-row>
    <el-row v-if="infoType === '教育教学评比竞赛'">
      <my-appraisal-emu/>
    </el-row>
    <el-row v-if="infoType === '研究课'">
      <my-research-lesson/>
    </el-row>
    <el-row v-if="infoType === '教育教学成果获奖'">
      <my-education-teach/>
    </el-row>
    <el-row v-if="infoType === '教师指导学生参加学科竞赛获奖情况'">
      <my-student-awards/>
    </el-row>
    <el-row v-if="infoType === '艺科体社团'">
      <my-art-sport/>
    </el-row>
    <el-row v-if="infoType === '行政获奖'">
      <my-admini-award/>
    </el-row>
    <el-row v-if="infoType === '校本培训'">
      <my-school-train/>
    </el-row>
    <!--    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">-->

    <!--      <el-table-column align="center" label="积分名称">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.tQualificationName }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="积分类型">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.certType }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="隶属等级">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.deptLevel }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="积分等级">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.certLevel }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="积分分值">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.point }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="获得时间">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.certIssuedTime }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--    </el-table>-->
  </div>
</template>

<script>
import { getTeacherPersonalScore } from '@/api/teacherInformation'
import { getToken } from '@/utils/auth'
import myAcademicAchi from '@/views/aTeacherGrow/myScoreTable/myAcademicAchi'
import myAdminiAward from '@/views/aTeacherGrow/myScoreTable/myAdminiAward'
import myAppraisalEmu from '@/views/aTeacherGrow/myScoreTable/myAppraisalEmu'
import myArtSport from '@/views/aTeacherGrow/myScoreTable/myArtSport'
import myEducationTeach from '@/views/aTeacherGrow/myScoreTable/myEducationTeach'
import myExperienceSharing from '@/views/aTeacherGrow/myScoreTable/myExperienceSharing'
import myProjectIssue from '@/views/aTeacherGrow/myScoreTable/myProjectIssue'
import myResearchLesson from '@/views/aTeacherGrow/myScoreTable/myResearchLesson'
import mySchoolTrain from '@/views/aTeacherGrow/myScoreTable/mySchoolTrain'
import myStudentAwards from '@/views/aTeacherGrow/myScoreTable/myStudentAwards'

export default {
  name: 'InlineEditTable',
  components: {
    myAcademicAchi,
    myAdminiAward,
    myAppraisalEmu,
    myArtSport,
    myEducationTeach,
    myExperienceSharing,
    myProjectIssue,
    myResearchLesson,
    mySchoolTrain,
    myStudentAwards
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      token: getToken(),
      infoType: '学术成果'
    }
  },
  created() {
  },
  methods: {

  }
}
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
</style>
