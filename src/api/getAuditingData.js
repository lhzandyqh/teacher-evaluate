import request from '@/utils/request'

// 教师组长获取审核列表的内容
export function getAuditingListData(parems) {
  return request({
    url: '/api/auditList/getAuditList',
    method: 'get',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,个人学术成果
export function getAcademicAchieveAuditingListDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getAcademicAchieve',
    method: 'get',
    params: parems
  })
}

// 审核个人学术成果
export function auditingAcademicAchievements(parems) {
  return request({
    url: '/api/academicachievements',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,项目课题
export function getProjectTopicsDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getProjectTopics',
    method: 'post',
    params: parems
  })
}

// 审核项目课题
export function auditingProjectTopics(parems) {
  return request({
    url: '/api/ProjectTopics',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,学术讲座与经验分享
export function getLectureExpShareDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getLectureExpShare',
    method: 'post',
    params: parems
  })
}

// 审核学术讲座与经验分享
export function auditingLectureExpShare(parems) {
  return request({
    url: '/api/lecturesexperiencesharing',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,教育教学评比竞赛
export function getEduTeachCompetDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getEduTeachCompet',
    method: 'post',
    params: parems
  })
}

// 审核教育教学评比竞赛
export function auditingEduTeachCompet(parems) {
  return request({
    url: '/api/TeachEduCompetition',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,研究课
export function getResearchCourseDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getResearchCourse',
    method: 'post',
    params: parems
  })
}

// 审核研究课
export function auditingResearchCourse(parems) {
  return request({
    url: '/api/ResearchCourse',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,教师指导学生参加学科比赛获奖情况
export function getGuideStuSubAwardDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getGuideStuSubAward',
    method: 'post',
    params: parems
  })
}

// 审核教师指导学生参加学科比赛获奖情况
export function auditingGuideStuSubAward(parems) {
  return request({
    url: '/api/guidestrudentsubjectsward',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,教育教学成果
export function getEduTeachAchieceDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getEduTeachAchiece',
    method: 'post',
    params: parems
  })
}

// 审核教育教学成果
export function auditingEduTeachAchiece(parems) {
  return request({
    url: '/api/eduteachchievements',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,艺科体社团
export function getArtSportsAssociationDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getArtSportsAssociation',
    method: 'post',
    params: parems
  })
}

// 审核艺科体社团
export function auditingArtSportsAssociation(parems) {
  return request({
    url: '/api/artSportAssociation',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,行政获奖
export function getAdministrativeDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getAdministrative',
    method: 'post',
    params: parems
  })
}

// 审核行政获奖
export function auditingAdministrative(parems) {
  return request({
    url: '/api/administrativeward',
    method: 'post',
    params: parems
  })
}

// 获取审核列表每一条的详细内容,校本培训
export function getSchoolTrainDetail(parems) {
  return request({
    url: '/api/getPerformanceWorkById/getSchoolTrain',
    method: 'post',
    params: parems
  })
}

// 审核校本培训
export function auditingSchoolTrain(parems) {
  return request({
    url: '/api/SchoolBasedTraining',
    method: 'post',
    params: parems
  })
}

// 获取学术成果审核结果（教师角色）
export function getAchOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultAcadeAchi',
    method: 'post',
    params: { token }
  })
}

// 获取项目课题审核结果（教师角色）
export function getTopicsOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultTopics',
    method: 'post',
    params: { token }
  })
}

// 获取学术讲座和经验分享审核结果（教师角色）
export function getLecExpOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultLecExp',
    method: 'post',
    params: { token }
  })
}

// 获取教育教学评比竞赛审核结果（教师角色）
export function getEduTeachCompetOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultEduTeachCompet',
    method: 'post',
    params: { token }
  })
}

// 获取研究课审核结果（教师角色）
export function getResearchCourseOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultResearchCourse',
    method: 'post',
    params: { token }
  })
}

// 获取教育教学成果获奖审核结果（教师角色）
export function getEduTeachAchiOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultEduTeachAchi',
    method: 'post',
    params: { token }
  })
}

// 获取教师指导学生参加学科比赛获奖情况审核结果（教师角色）
export function getStuSubCompetOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultStuSubCompet',
    method: 'post',
    params: { token }
  })
}

// 获取艺科体社团审核结果（教师角色）
export function getArtAssocOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultArtAssoc',
    method: 'post',
    params: { token }
  })
}

// 获取行政获奖审核结果（教师角色）
export function getAdminAwardOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultAdminAward',
    method: 'post',
    params: { token }
  })
}

// 获取校本培训审核结果（教师角色）
export function getSchoolTrainOutcome(token) {
  return request({
    url: '/api/auditResult/auditResultSchoolTrain',
    method: 'post',
    params: { token }
  })
}

// 获取完成教学工作情况审核结果
export function getTeacherSituationOutcome(token) {
  return request({
    url: '/api/teachWork/showTeachWorkAuditResult',
    method: 'post',
    params: { token }
  })
}

// 获取完成教育工作情况审核结果
export function getEducationSituationOutcome(token) {
  return request({
    url: '/api/EduWork/showEduWorkAuditResult',
    method: 'post',
    params: { token }
  })
}

// 获取汇报课 观摩课 研究课情况审核结果
export function getHuibaoClassSituationOutcome(token) {
  return request({
    url: '/api/ReporObsResearch/showRepObsResAuditResult',
    method: 'post',
    params: { token }
  })
}

// 获取组织指导课外活动情况审核结果
export function getActivitySituationOutcome(token) {
  return request({
    url: '/api/organizeExtraWork/showOrganizeExtraAuditResult',
    method: 'post',
    params: { token }
  })
}

// 获取参加系统进修或继续教育情况审核结果
export function getContinueEducationSituationOutcome(token) {
  return request({
    url: '/api/furLearnContinueEduWork/showFurLearnContinueEduAuditResult',
    method: 'post',
    params: { token }
  })
}

// 获取指导 培养教师情况审核结果
export function getTrainTeacherSituationOutcome(token) {
  return request({
    url: '/api/guidTrainTeacWork/showGuidTrainTeacAuditResult',
    method: 'post',
    params: { token }
  })
}
