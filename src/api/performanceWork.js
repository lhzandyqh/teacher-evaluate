import request from '@/utils/request'

// 所有表的查询
// 查询学术成果情况
export function inquireAcademicAchieve(token) {
  return request({
    url: '/api/getPerformanceWork/getAcademicAchieve',
    method: 'get',
    params: { token }
  })
}

// 查询项目课题情况
export function inquireProjectTopics(token) {
  return request({
    url: '/api/getPerformanceWork/getProjectTopics',
    method: 'get',
    params: { token }
  })
}

// 查询学术讲座与经验分享情况
export function inquireLectureExpShare(token) {
  return request({
    url: '/api/getPerformanceWork/getLectureExpShare',
    method: 'get',
    params: { token }
  })
}

// 查询教育教学评比竞赛情况
export function inquireEduTeachCompet(token) {
  return request({
    url: '/api/getPerformanceWork/getEduTeachCompet',
    method: 'get',
    params: { token }
  })
}

// 查询研究课情况
export function inquireResearchCourse(token) {
  return request({
    url: '/api/getPerformanceWork/getResearchCourse',
    method: 'get',
    params: { token }
  })
}

// 查询教育教学成果情况
export function inquireEduTeachAchiece(token) {
  return request({
    url: '/api/getPerformanceWork/getEduTeachAchiece',
    method: 'get',
    params: { token }
  })
}

// 查询教师指导学生参加学科比赛获奖情况
export function inquireGuideStuSubAward(token) {
  return request({
    url: '/api/getPerformanceWork/getGuideStuSubAward',
    method: 'get',
    params: { token }
  })
}

// 查询艺科体社团情况
export function inquireArtSportsAssociation(token) {
  return request({
    url: '/api/getPerformanceWork/getArtSportsAssociation',
    method: 'get',
    params: { token }
  })
}

// 查询行政获奖情况
export function inquireAdministrative(token) {
  return request({
    url: '/api/getPerformanceWork/getAdministrative',
    method: 'get',
    params: { token }
  })
}

// 查询校本培训情况
export function inquireSchoolTrain(token) {
  return request({
    url: '/api/getPerformanceWork/getSchoolTrain',
    method: 'get',
    params: { token }
  })
}

// 所有表的增加情况
// 增加学术成果情况
export function increaseAcademicAchieve(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addAcademicAchieve',
    method: 'post',
    params: parems
  })
}

// 增加项目课题情况
export function increaseProjectTopics(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addProjectTopics',
    method: 'post',
    params: parems
  })
}

// 增加学术讲座与经验分享情况
export function increaseLectureExperShare(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addLectureExperShare',
    method: 'post',
    params: parems
  })
}

// 增加教育教学评比竞赛情况
export function increaseEduTeachCompet(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addTeachEduCompetition',
    method: 'post',
    params: parems
  })
}

// 增加研究课情况
export function increaseResearchCourse(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addResearchCourse',
    method: 'post',
    params: parems
  })
}

// 增加教育教学情况
export function increaseEduTeachAchieve(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addEduTeachAchieve',
    method: 'post',
    params: parems
  })
}

// 增加教师指导学生参加学科比赛获奖情况
export function increaseGuideStudentSubject(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addGuideStudentSubject',
    method: 'post',
    params: parems
  })
}

// 增加艺科体社团情况
export function increaseArtSportAssociation(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addArtSportAssociation',
    method: 'post',
    params: parems
  })
}

// 增加行政获奖情况
export function increaseAdministrativeAward(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addAdministrativeAward',
    method: 'post',
    params: parems
  })
}

// 增加校本培训情况
export function increaseSchoolBasedTrain(parems) {
  return request({
    url: '/api/newAddPerformanceWork/addSchoolBasedTrain',
    method: 'post',
    params: parems
  })
}

// 所有表的删除情况
// 删除学术成果情况
export function deleteAcademicAchieve(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteAcademicAchieve',
    method: 'post',
    params: parems
  })
}

// 删除项目课题情况
export function deleteProjectTopics(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteProjectTopics',
    method: 'post',
    params: parems
  })
}

// 删除学术讲座与经验分享情况
export function deleteLectureExpShare(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteLectureExpShare',
    method: 'post',
    params: parems
  })
}

// 删除教育教学评比竞赛情况
export function deleteEduTeachCompet(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteEduTeachCompet',
    method: 'post',
    params: parems
  })
}

// 删除研究课情况
export function deleteResearchCourse(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteResearchCourse',
    method: 'post',
    params: parems
  })
}

// 删除教育教学成果情况
export function deleteEduTeachAchiece(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteEduTeachAchiece',
    method: 'post',
    params: parems
  })
}

// 删除教师指导学生参加学科比赛获奖情况
export function deleteGuideStuSubAward(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteGuideStuSubAward',
    method: 'post',
    params: parems
  })
}

// 删除艺科体社团情况
export function deleteArtSportsAssociation(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteArtSportsAssociation',
    method: 'post',
    params: parems
  })
}

// 删除行政获奖情况
export function deleteAdministrative(parems) {
  return request({
    url: '/api/deletePerformanceWork/deleteAdministrative',
    method: 'post',
    params: parems
  })
}

// 删除校本培训情况
export function deleteSchoolBasedTrain(parems) {
  return request({
    url: '/api/deletePerformanceWork/deletegetSchoolBasedTrain',
    method: 'post',
    params: parems
  })
}

// 所有表的修改情况
// 修改学术成果情况
export function updateAcademicAchieve(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateAcademicAchieve',
    method: 'post',
    params: parems
  })
}

// 修改项目课题情况
export function updateProjectTopics(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateProjectTopics',
    method: 'post',
    params: parems
  })
}

// 修改学术讲座与经验分享情况
export function updateLectureExperShare(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateLectureExperShare',
    method: 'post',
    params: parems
  })
}

// 修改教育教学评比竞赛
export function updateTeachEduCompetition(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateTeachEduCompetition',
    method: 'post',
    params: parems
  })
}

// 修改研究课情况
export function updateResearchCourse(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateResearchCourse',
    method: 'post',
    params: parems
  })
}

// 修改教育教学成果情况
export function updateEduTeachAchieve(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateEduTeachAchieve',
    method: 'post',
    params: parems
  })
}

// 修改教师指导学生参加学科比赛获奖情况
export function updateGuideStudentSubject(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateGuideStudentSubject',
    method: 'post',
    params: parems
  })
}

// 修改艺科体社团情况
export function updateArtSportAssociation(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateArtSportAssociation',
    method: 'post',
    params: parems
  })
}

// 修改行政获奖情况
export function updateAdministrativeAward(parems) {
  return request({
    url: '/api/updatePerformanceWork/updateAdministrativeAward',
    method: 'post',
    params: parems
  })
}

// 修改校本培训情况
export function updateSchoolBasedTrain(parems) {
  return request({
    url: '/api/updatePerformanceWork/addSchoolBasedTrain',
    method: 'post',
    params: parems
  })
}

