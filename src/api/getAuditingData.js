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
