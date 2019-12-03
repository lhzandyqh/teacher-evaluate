<template>
  <div class="app-container">
    <div class="filter-container">
      <!--      <el-select v-model="listQuery.qualification_type" placeholder="积分类型" clearable class="filter-item">-->
      <!--        <el-option label="行政获奖" value="行政获奖"/>-->
      <!--        <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>-->
      <!--        <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>-->
      <!--      </el-select>-->
      <!--      <el-select v-model="listQuery.department_level" placeholder="隶属级别" clearable class="filter-item" >-->
      <!--        <el-option label="国际级" value="国际级"/>-->
      <!--        <el-option label="国家级" value="国家级"/>-->
      <!--        <el-option label="省部级" value="省部级"/>-->
      <!--        <el-option label="区县级" value="区县级"/>-->
      <!--        <el-option label="其他" value="其他"/>-->
      <!--      </el-select>-->
      <!--      <el-select v-model="listQuery.qualification_level" placeholder="资质等级" clearable class="filter-item" >-->
      <!--        <el-option label="一等奖" value="一等奖"/>-->
      <!--        <el-option label="二等奖" value="二等奖"/>-->
      <!--        <el-option label="三等奖" value="三等奖"/>-->
      <!--        <el-option label="其他" value="其他"/>-->
      <!--      </el-select>-->
      <!--      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>-->
      <el-row>
        <div class="container">
          <div class="select">
            <el-row :gutter="1">
              <el-col :span="3">
                <div class="title">
                  <span style="font-size: 14px;font-weight: bolder">选择积分项目类型</span>
                </div>
              </el-col>
              <el-col :span="3">
                <el-select v-model="classValue" placeholder="请选择" @change="getTypes">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </el-col>
              <el-col :span="6">
                <div class="select">
                  <el-select v-model="type_select_value" placeholder="请选择您的积分项目类型" @change="changeZiZhi">
                    <el-option
                      v-for="item in finalOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"/>
                      <!--                    <el-option label="学术成果积分配置" value="xueshu"/>-->
                      <!--                    <el-option label="项目课题积分配置" value="yanjiuke"/>-->
                      <!--                    <el-option label="学术讲座与经验分享积分配置" value="jinyan"/>-->
                      <!--                    <el-option label="教育教学评比竞赛积分配置" value="jingsai"/>-->
                      <!--                    <el-option label="研究课积分配置" value="yanjiu"/>-->
                      <!--                    <el-option label="教育教学成果获奖积分配置" value="jiaoyu"/>-->
                      <!--                    <el-option label="教师指导学生参加学科比赛获奖情况积分配置" value="xueke"/>-->
                      <!--                    <el-option label="艺科体社团积分配置" value="yike"/>-->
                      <!--                    <el-option label="行政获奖积分配置" value="xinzheng"/>-->
                      <!--                    <el-option label="校本培训积分配置" value="xiaoben"/>-->
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="add">
                  <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="dialogPvVisible = true">新增积分</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-row>
      <el-divider/>
      <el-row v-if="type_select_value === 'jingsai'">
        <appraisal-emulation-config ref="competition" />
      </el-row>
      <el-row v-if="type_select_value === 'xueshu'">
        <academic-achievements-config ref="academic"/>
      </el-row>
      <el-row v-if="type_select_value === 'yanjiu'">
        <research-lesson-config ref="research"/>
      </el-row>
      <el-row v-if="type_select_value === 'jinyan'">
        <experience-sharing-config ref="shareing"/>
      </el-row>
      <el-row v-if="type_select_value === 'jiaoyu'">
        <education-teaching-config ref="result"/>
      </el-row>
      <el-row v-if="type_select_value === 'yanjiuke'">
        <project-issue-config ref="project"/>
      </el-row>
      <el-row v-if="type_select_value === 'xiaoben'">
        <school-train-config ref="train"/>
      </el-row>
      <el-row v-if="type_select_value === 'xinzheng'">
        <administrative-award-config ref="administrative"/>
      </el-row>
      <el-row v-if="type_select_value === 'yike'">
        <art-sport-config ref="art"/>
      </el-row>
      <el-row v-if="type_select_value === 'xueke'">
        <student-awards-config ref="awards"/>
      </el-row>
    </div>

    <!--    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">-->

    <!--      <el-table-column align="center" label="资质类型">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.qualification_type }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="隶属级别">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.department_level }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="资质等级">-->
    <!--        <template slot-scope="scope">-->
    <!--          <span>{{ scope.row.qualification_level }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column label="积分额度">-->
    <!--        <template slot-scope="scope">-->
    <!--          <template v-if="scope.row.edit">-->
    <!--            <el-input v-model="scope.row.score" class="edit-input" size="small"/>-->
    <!--            <el-button class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">取消</el-button>-->
    <!--          </template>-->
    <!--          <span v-else>{{ scope.row.score }}</span>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--      <el-table-column align="center" label="操作" >-->
    <!--        <template slot-scope="scope">-->
    <!--          <el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="confirmEdit(scope.row)">完成</el-button>-->
    <!--          <el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">修改</el-button>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--    </el-table>-->

    <!--新增弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="新增积分">
      <!--      <el-form ref="form" :model="listCreate" label-width="100px">-->
      <!--        <el-form-item label="资质类型">-->
      <!--          <el-select v-model="listCreate.qualification_type" placeholder="资质类型" clearable class="filter-item">-->
      <!--            <el-option label="行政获奖" value="行政获奖"/>-->
      <!--            <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>-->
      <!--            <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="隶属级别">-->
      <!--          <el-select v-model="listCreate.department_level" placeholder="隶属级别" clearable class="filter-item" >-->
      <!--            <el-option label="国际级" value="国际级"/>-->
      <!--            <el-option label="国家级" value="国家级"/>-->
      <!--            <el-option label="省部级" value="省部级"/>-->
      <!--            <el-option label="区县级" value="区县级"/>-->
      <!--            <el-option label="其他" value="其他"/>-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="资质等级">-->
      <!--          <el-select v-model="listCreate.qualification_level" placeholder="资质等级" clearable class="filter-item" >-->
      <!--            <el-option label="一等奖" value="一等奖"/>-->
      <!--            <el-option label="二等奖" value="二等奖"/>-->
      <!--            <el-option label="三等奖" value="三等奖"/>-->
      <!--            <el-option label="其他" value="其他"/>-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="积分">-->
      <!--          <el-input v-model="listCreate.score" style="width: 200px;"/>-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->
      <el-form ref="form" label-width="150px" style="margin: 20px 0;">
        <el-form-item label="请选择您的积分项目">
          <el-select v-model="t_qualification_name" placeholder="请选择您的积分项目" @change="changeZiZhi">
            <el-option label="学术成果积分配置" value="xueshu"/>
            <el-option label="项目课题积分配置" value="xiangmu"/>
            <el-option label="学术讲座与经验分享积分配置" value="jinyan"/>
            <el-option label="教育教学评比竞赛积分配置" value="jingsai"/>
            <el-option label="研究课积分配置" value="yanjiu"/>
            <el-option label="教育教学成果获奖积分配置" value="jiaoyu"/>
            <el-option label="教师指导学生参加学科比赛获奖情况积分配置" value="xueke"/>
            <el-option label="艺科体社团积分配置" value="yike"/>
            <el-option label="行政获奖积分配置" value="xinzheng"/>
            <el-option label="校本培训积分配置" value="xiaoben"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-divider/>
      <el-row v-if="t_qualification_name==='xueshu'">
        <el-form ref="xueshuform" :model="xueshuform" label-width="200px">
          <el-form-item label="学术成果载体类型">
            <el-select v-model="xueshuform.type" placeholder="请选择学术成果载体类型" style="width: 60%;">
              <el-option label="论文" value="论文"/>
              <el-option label="专著" value="专著"/>
            </el-select>
          </el-form-item>
          <el-form-item label="是否第一作者">
            <el-select v-model="xueshuform.first" placeholder="请选择是否第一作者">
              <el-option label="是" value="是"/>
              <el-option label="否" value="否"/>
            </el-select>
          </el-form-item>
          <el-form-item label="刊物等级（出版社等级）">
            <el-select v-model="xueshuform.rank" placeholder="请选择刊物等级（出版社等级）">
              <el-option label="核心期刊" value="核心期刊"/>
              <el-option label="一般期刊" value="一般期刊"/>
              <el-option label="区级" value="区级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xueshuform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xiangmu'">
        <el-form ref="yanjiukeform" :model="yanjiukeform" label-width="100px">
          <el-form-item label="课题级别">
            <el-select v-model="yanjiukeform.rank" placeholder="请选择课题级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="个人角色">
            <el-select v-model="yanjiukeform.role" placeholder="请选择个人角色">
              <el-option label="主持" value="主持"/>
              <el-option label="参与" value="参与"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="yanjiukeform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='jinyan'">
        <el-form ref="jinyanform" :model="jinyanform" label-width="100px">
          <el-form-item label="活动类型">
            <el-select v-model="jinyanform.type" placeholder="请选择活动类型">
              <el-option label="教育教学研讨会" value="教育教学研讨会"/>
              <el-option label="中科玉兰学术讲坛" value="中科玉兰学术讲坛"/>
              <el-option label="进修材料分析" value="进修材料分析"/>
              <el-option label="其他" value="其他"/>
            </el-select>
          </el-form-item>
          <el-form-item label="课题级别">
            <el-select v-model="jinyanform.rank" placeholder="请选择课题级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
              <el-option label="教研组" value="教研组"/>
              <el-option label="年级组" value="年级组"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jinyanform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='jingsai'">
        <el-form ref="jinsaiform" :model="jinsaiform" label-width="100px">
          <el-form-item label="竞赛类型">
            <el-select v-model="jinsaiform.type" placeholder="请选择获奖级别">
              <el-option label="论文案例" value="论文案例"/>
              <el-option label="现场课" value="现场课"/>
              <el-option label="说课" value="说课"/>
              <el-option label="基本功" value="基本功"/>
              <el-option label="其他" value="其他"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="jinsaiform.rank" placeholder="请选择获奖级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="jinsaiform.denji" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="一等奖"/>
              <el-option label="二等奖" value="二等奖"/>
              <el-option label="三等奖" value="三等奖"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jinsaiform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='yanjiu'">
        <el-form ref="yanjiuform" :model="yanjiuform" label-width="100px">
          <el-form-item label="研究课类型">
            <el-select v-model="yanjiuform.type" placeholder="研究课类型">
              <el-option label="公开课" value="公开课"/>
              <el-option label="主题课" value="主题课"/>
              <el-option label="观摩课" value="观摩课"/>
              <el-option label="班会展示" value="班会展示"/>
            </el-select>
          </el-form-item>
          <el-form-item label="展示级别">
            <el-select v-model="yanjiuform.rank" placeholder="请选择展示级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="yanjiuform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='jiaoyu'">
        <el-form ref="jiaoyuform" :model="jiaoyuform" label-width="100px">
          <el-form-item label="获奖级别">
            <el-select v-model="jiaoyuform.region" placeholder="请选择获奖级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="jiaoyuform.rank" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="一等奖"/>
              <el-option label="二等奖" value="二等奖"/>
              <el-option label="三等奖" value="三等奖"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖角色">
            <el-select v-model="jiaoyuform.role" placeholder="请选择获奖角色">
              <el-option label="参与" value="参与"/>
              <el-option label="主持" value="主持"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="jiaoyuform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xueke'">
        <el-form ref="xuekeform" :model="xuekeform" label-width="100px">
          <el-form-item label="学科" style="width: 200px">
            <el-input v-model="xuekeform.subject"/>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="xuekeform.region" placeholder="请选择获奖级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="xuekeform.rank" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="一等奖"/>
              <el-option label="二等奖" value="二等奖"/>
              <el-option label="三等奖" value="三等奖"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xuekeform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='yike'">
        <el-form ref="yikeform" :model="yikeform" label-width="100px">
          <el-form-item label="比赛类别">
            <el-select v-model="yikeform.type" placeholder="请选择比赛类别">
              <el-option label="艺术" value="艺术"/>
              <el-option label="科技" value="科技"/>
              <el-option label="体育" value="体育"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="yikeform.rank" placeholder="请选择获奖级别">
              <el-option label="一等奖" value="一等奖"/>
              <el-option label="二等奖" value="二等奖"/>
              <el-option label="三等奖" value="三等奖"/>
              <el-option label="其他" value="其他"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="yikeform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xinzheng'">
        <el-form ref="xinzhengform" :model="xinzhengform" label-width="100px">
          <el-form-item label="获奖级别">
            <el-select v-model="xinzhengform.region" placeholder="请选择获奖级别">
              <el-option label="国家级" value="国家级"/>
              <el-option label="区级" value="区级"/>
              <el-option label="市级" value="市级"/>
              <el-option label="校级" value="校级"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖等级">
            <el-select v-model="xinzhengform.rank" placeholder="请选择获奖等级">
              <el-option label="一等奖" value="一等奖"/>
              <el-option label="二等奖" value="二等奖"/>
              <el-option label="三等奖" value="三等奖"/>
            </el-select>
          </el-form-item>
          <el-form-item label="获奖形式">
            <el-select v-model="xinzhengform.form" placeholder="请选择获奖等级">
              <el-option label="团队" value="团队"/>
              <el-option label="个人" value="个人"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xinzhengform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row v-if="t_qualification_name==='xiaoben'">
        <el-form ref="xiaobenform" :model="xiaobenform" label-width="100px">
          <el-form-item label="培训类型">
            <el-select v-model="xiaobenform.type" placeholder="请选择培训类型">
              <el-option label="全校大会" value="全校大会"/>
              <el-option label="教研组会" value="教研组会"/>
              <el-option label="年级组会" value="年级组会"/>
              <el-option label="专题培训" value="专题培训"/>
            </el-select>
          </el-form-item>
          <el-form-item label="分值" style="width: 400px">
            <el-input v-model="xiaobenform.score"/>
          </el-form-item>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
        <el-button type="success" @click="handleCreate">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { integrationConfigList, integrationSearch, creatIntegration, updateIntegration } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'
import appraisalEmulationConfig from '@/views/aTeacherGrow/scoreConfigTable/appraisalEmulationConfig'
import academicAchievementsConfig from '@/views/aTeacherGrow/scoreConfigTable/academicAchievementsConfig'
import researchLessonConfig from '@/views/aTeacherGrow/scoreConfigTable/researchLessonConfig'
import experienceSharingConfig from '@/views/aTeacherGrow/scoreConfigTable/experienceSharingConfig'
import educationTeachingConfig from '@/views/aTeacherGrow/scoreConfigTable/educationTeachingConfig'
import projectIssueConfig from '@/views/aTeacherGrow/scoreConfigTable/projectIssueConfig'
import schoolTrainConfig from '@/views/aTeacherGrow/scoreConfigTable/schoolTrainConfig'
import administrativeAwardConfig from '@/views/aTeacherGrow/scoreConfigTable/administrativeAwardConfig'
import artSportConfig from '@/views/aTeacherGrow/scoreConfigTable/artSportConfig'
import studentAwardsConfig from '@/views/aTeacherGrow/scoreConfigTable/studentAwardsConfig'

import { addScoreConfig, inquireScoreConfig } from '@/api/integralConfiguration'

export default {
  name: 'InlineEditTable',
  components: { studentAwardsConfig, artSportConfig, administrativeAwardConfig, appraisalEmulationConfig, academicAchievementsConfig, researchLessonConfig, experienceSharingConfig, educationTeachingConfig, projectIssueConfig, schoolTrainConfig },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      classValue: '教育教学',
      finalOptions: [],
      options: [{
        value: '教育教学',
        label: '教育教学'
      }, {
        value: '行政获奖',
        label: '行政获奖'
      }, {
        value: '校本培训',
        label: '校本培训'
      }],
      jiaoyuOptions: [{ label: '学术成果积分配置', value: 'xueshu' },
        { label: '研究课题积分配置', value: 'yanjiuke' },
        { label: '学术讲座与经验分享积分配置', value: 'jinyan' },
        { label: '教育教学评比竞赛积分配置', value: 'jingsai' },
        { label: '研究课积分配置', value: 'yanjiu' },
        { label: '教育教学成果获奖积分配置', value: 'jiaoyu' },
        { label: '教师指导学生参加学科比赛情况获奖积分配置', value: 'xueke' },
        { label: '艺科体社团积分配置', value: 'yike' }],
      xingzhenOptions: [{ label: '行政获奖积分配置', value: 'xinzheng' }],
      xiaoebengOptions: [{ label: '校本培训积分配置', value: 'xiaoben' }],
      academicData: [],
      jifenType: [
        { label: '学术成果积分配置', value: 'xueshu' },
        { label: '研究课题积分配置', value: 'yanjiuke' },
        { label: '学术讲座与经验分享积分配置', value: 'xueshu' },
        { label: '教育教学评比竞赛积分配置', value: 'jiaoyu' },
        { label: '研究课积分配置', value: 'yanjiu' },
        { label: '教育教学成果获奖积分配置', value: 'chengguo' },
        { label: '教师指导学生参加学科比赛情况获奖积分配置', value: 'huojiang' },
        { label: '艺科体社团积分配置', value: 'yike' },
        { label: '行政获奖积分配置', value: 'xingzheng' },
        { label: '校本培训积分配置', value: 'xiaoben' }],
      xueshuform: {
        type: '',
        first: '',
        rank: '',
        score: ''
      },
      yanjiukeform: {
        role: '',
        rank: '',
        score: ''
      },
      jinyanform: {
        type: '',
        rank: '',
        score: ''
      },
      jinsaiform: {
        type: '',
        rank: '',
        denji: '',
        score: ''
      },
      yanjiuform: {
        type: '',
        rank: '',
        score: ''
      },
      jiaoyuform: {
        region: '',
        rank: '',
        role: '',
        score: ''
      },
      xuekeform: {
        region: '',
        rank: '',
        score: '',
        subject: ''
      },
      yikeform: {
        type: '',
        rank: '',
        score: ''
      },
      xinzhengform: {
        region: '',
        rank: '',
        form: '',
        score: ''
      },
      xiaobenform: {
        type: '',
        score: ''
      },
      t_qualification_name: 'xueshu',
      type_select_value: 'xueshu',
      list: null,
      listLoading: true,
      token: getToken(),
      listQuery: {
        qualification_type: '',
        department_level: '',
        qualification_level: ''
      },
      listCreate: {},
      dialogPvVisible: false
    }
  },
  created() {
    this.finalOptions = this.jiaoyuOptions
    this.getList()
  },
  methods: {
    getTypes: function() {
      this.finalOptions = []
      if (this.classValue === '教育教学') {
        this.type_select_value = 'xueshu'
        this.finalOptions = this.jiaoyuOptions
      } else if (this.classValue === '行政获奖') {
        this.type_select_value = 'xinzheng'
        this.finalOptions = this.xingzhenOptions
      } else {
        this.type_select_value = 'xiaoben'
        this.finalOptions = this.xiaoebengOptions
      }
    },
    getList() {
      this.listLoading = true
      integrationConfigList(this.token).then(response => {
        const items = response.data
        this.list = items.map(v => {
          this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
          v.originalScore = v.score //  will be used when user click the cancel botton
          return v
        })
        this.listLoading = false
      })
    },
    cancelEdit(row) {
      row.score = row.originalScore
      row.edit = false
      this.$message({
        message: '取消修改',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      updateIntegration({ ...row, token: this.token }).then(response => {
        if (response.data.code === 200) {
          row.edit = false
          row.originalScore = row.score
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        } else {
          row.edit = false
          this.$message({
            message: '修改失败',
            type: 'warning'
          })
        }
      })
    },
    handleFilter() {
      // this.listLoading = true
      if (this.listQuery.qualification_type || this.listQuery.department_level || this.listQuery.qualification_level) {
        integrationSearch({ ...this.listQuery, token: this.token }).then(response => {
          const items = response.data
          this.list = items.map(v => {
            this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
            v.originalScore = v.score //  will be used when user click the cancel botton
            return v
          })
          this.listLoading = false
        })
      } else {
        this.getList()
      }
    },
    handleCreate() {
      // creatIntegration({ ...this.listCreate, token: this.token }).then(response => {
      //   this.dialogPvVisible = false
      //   if (response.data.code === 200) {
      //     this.$message({
      //       showClose: true,
      //       message: '积分插入成功！',
      //       type: 'success'
      //     })
      //   } else {
      //     this.$message({
      //       showClose: true,
      //       message: '积分插入失败！',
      //       type: 'warning'
      //     })
      //   }
      // })
      console.log('测试类型')
      console.log(this.t_qualification_name)
      let typeTitle = ''
      switch (this.t_qualification_name) {
        // eslint-disable-next-line no-case-declarations
        case 'xueshu':
          typeTitle = '学术成果'
          const prams = {
            project_name: typeTitle,
            carrier_type_of_academic: this.xueshuform.type,
            is_first_author: this.xueshuform.first,
            publisher_level: this.xueshuform.rank,
            score_academic: this.xueshuform.score
          }
          // const academicPrams = '学术成果'
          console.log('输出要提交的参数')
          console.log(prams)
          addScoreConfig({ ...prams, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.academic.updateAcademicData()
            console.log(this.$refs.academic)
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'xiangmu':
          typeTitle = '项目课题'
          const pramsa = {
            project_name: typeTitle,
            level_of_project_topic: this.yanjiukeform.rank,
            person_role_project_topic: this.yanjiukeform.role,
            score_of_project_topic: this.yanjiukeform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsa)
          addScoreConfig({ ...pramsa, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.project.updateProjectData()
            console.log(this.$refs.academic)
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'jinyan':
          typeTitle = '学术讲座与经验分享'
          const pramsb = {
            project_name: typeTitle,
            type_of_activity_experience_share: this.jinyanform.type,
            level_of_activity_experience_share: this.jinyanform.rank,
            score_of_activity_experience_share: this.jinyanform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsb)
          addScoreConfig({ ...pramsb, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.shareing.updateShareingData()
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'jingsai':
          typeTitle = '教育教学评比竞赛'
          const pramsc = {
            project_name: typeTitle,
            type_of_edu_teach_competition: this.jinsaiform.type,
            award_level_of_edu_teach_competition: this.jinsaiform.rank,
            award_grade_of_edu_teach_competition: this.jinsaiform.denji,
            score_of_edu_teach_competition: this.jinsaiform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsc)
          addScoreConfig({ ...pramsc, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.competition.updateCompetitionData()
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'yanjiu':
          typeTitle = '研究课'
          const pramsd = {
            project_name: typeTitle,
            type_of_research_courses: this.yanjiuform.type,
            display_level_of_research: this.yanjiuform.rank,
            score_of_research_courese: this.yanjiuform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsd)
          addScoreConfig({ ...pramsd, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.research.updateResearchData()
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'jiaoyu':
          typeTitle = '教育教学成果'
          const pramse = {
            project_name: typeTitle,
            award_level_of_edu_teach_achieve: this.jiaoyuform.region,
            award_grade_of_edu_teach_achieve: this.jiaoyuform.rank,
            person_role_edu_teach_achieve: this.jiaoyuform.role,
            score_of_edu_teach_achieve: this.jiaoyuform.score
          }
          console.log('输出要提交的参数')
          console.log(pramse)
          addScoreConfig({ ...pramse, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
          })
          this.$refs.result.updateResultData()
          break
        // eslint-disable-next-line no-case-declarations
        case 'xueke':
          typeTitle = '教师指导学生参加学科比赛获奖情况'
          const pramsf = {
            project_name: typeTitle,
            subject_of_compititon: this.xuekeform.subject,
            award_level_of_sub_competition: this.xuekeform.region,
            award_grade_of_sub_competition: this.xuekeform.rank,
            score_of_sub_competition: this.xuekeform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsf)
          addScoreConfig({ ...pramsf, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.awards.updateAwardsData()
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'yike':
          typeTitle = '艺科体社团'
          const pramsg = {
            project_name: typeTitle,
            name_of_art_sport_association: this.yikeform.type,
            award_level_of_association: this.yikeform.rank,
            score_of_association: this.yikeform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsg)
          addScoreConfig({ ...pramsg, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.art.updateArtData()
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'xinzheng':
          typeTitle = '行政获奖'
          const pramsh = {
            project_name: typeTitle,
            level_of_administrative: this.xinzhengform.region,
            grade_of_administrative: this.xinzhengform.rank,
            form_of_administrative: this.xinzhengform.form,
            score_of_administrative: this.xinzhengform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsh)
          addScoreConfig({ ...pramsh, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.administrative.updateAdministrativeData()
          })
          break
        // eslint-disable-next-line no-case-declarations
        case 'xiaoben':
          typeTitle = '校本培训'
          const pramsi = {
            project_name: typeTitle,
            type_of_school_based_training: this.xiaobenform.type,
            score_of_school_based_training: this.xiaobenform.score
          }
          console.log('输出要提交的参数')
          console.log(pramsi)
          addScoreConfig({ ...pramsi, token: this.token }).then(response => {
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
            this.$refs.train.updateTrainData()
          })
          break
      }
    }
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
  .container{
  }
  .select{
  }
  .add{
    margin-top: -1px;
  }
  .title{
    margin-top: 10px;
  }
</style>
