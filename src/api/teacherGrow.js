import request from '@/utils/request'

// 工作分享上传
export function workShareUpload(parems) {
  return request({
    url: '/api/jobSharing/increaseArticle',
    method: 'post',
    params: parems
  })
}

// 文章公示
export function articleExhibition(token) {
  return request({
    url: '/api/jobSharing/getAllArticle',
    method: 'post',
    params: { token }
  })
}

// 教学工作（按月查询）
export function teachJobInquire(parems) {
  return request({
    url: '/api/teachWork/showTeachWorkByMon',
    method: 'post',
    params: parems
  })
}

// 添加教学工作情况
export function teachJobIncrease(parems) {
  return request({
    url: '/api/teachWork/addTeachingWork',
    method: 'post',
    params: parems
  })
}

// 删除教学工作
export function teachJobDelete(parems) {
  return request({
    url: '/api/teachWork/delete',
    method: 'post',
    params: parems
  })
}

// 修改教学工作
export function teachJobUpdate(parems) {
  return request({
    url: '/api/teachWork/updateTeachWork',
    method: 'post',
    params: parems
  })
}

// 教学工作（全部查询）
export function allTeachInquire(token) {
  return request({
    url: '/api/teachWork/showTeachWork',
    method: 'post',
    params: { token }
  })
}

// 教育工作(按月查询)
export function eductionJobInquire(parems) {
  return request({
    url: '/api/EduWork/eduWorkByMonth',
    method: 'post',
    params: parems
  })
}

// 添加教育工作
export function educationJobIncrease(parems) {
  return request({
    url: '/api/EduWork/addEduWork',
    method: 'post',
    params: parems
  })
}

// 删除教育工作
export function educationJobDelete(parems) {
  return request({
    url: '/api/EduWork/deleteEduWork',
    method: 'post',
    params: parems
  })
}

// 修改教育工作
export function educationJobUpdate(parems) {
  return request({
    url: '/api/EduWork/updateEduWork',
    method: 'post',
    params: parems
  })
}

// 汇报观摩研究课程(按月查询)
export function reportObsResearchInquire(parems) {
  return request({
    url: '/api/ReporObsResearch/reportObsResearchByMonth',
    method: 'post',
    params: parems
  })
}

// 增加汇报观摩课
export function reportObsResearchIncrease(parems) {
  return request({
    url: '/api/ReporObsResearch/addReporObsResearch',
    method: 'post',
    params: parems
  })
}

// 编辑汇报观摩课
export function reportObsResearchUpdate(parems) {
  return request({
    url: '/api/ReporObsResearch/updateReporObsResearch',
    method: 'post',
    params: parems
  })
}

// 删除汇报观摩课
export function reportObsResearchDelete(parems) {
  return request({
    url: '/api/ReporObsResearch/deleteReporObsResearch',
    method: 'post',
    params: parems
  })
}
// 组织课外活动(按月查询)
export function organizeExtraInquire(parems) {
  return request({
    url: '/api/organizeExtraWork/organizeExtraByMon',
    method: 'post',
    params: parems
  })
}

// 添加课外活动
export function activityOrganizeIncrease(parems) {
  return request({
    url: '/api/organizeExtraWork/addOrganizeExtra',
    method: 'post',
    params: parems
  })
}

// 编辑课外活动
export function activityOrganizeUpdate(parems) {
  return request({
    url: '/api/organizeExtraWork/updateOrangGuideExtraAct',
    method: 'post',
    params: parems
  })
}

// 删除课外活动
export function activityOrganizeDelete(parems) {
  return request({
    url: '/api/organizeExtraWork/deleteOrganizeExtra',
    method: 'post',
    params: parems
  })
}
// 参加系统进修或继续教育情况(按月查询)
export function furLeaContinueEduInquire(parems) {
  return request({
    url: '/api/furLearnContinueEduWork/furLearnContinueEduByMon',
    method: 'post',
    params: parems
  })
}

// 添加系统进修或继续教育情况
export function furLeaContinueEduIncrease(parems) {
  return request({
    url: '/api/furLearnContinueEduWork/addFurLeaContiEdu',
    method: 'post',
    params: parems
  })
}

// 更新系统或进修或继续教育情况
export function furLeaContinueEduUpdate(parems) {
  return request({
    url: '/api/furLearnContinueEduWork/updateFurLeaContinueEdu',
    method: 'post',
    params: parems
  })
}

// 删除系统进修或继续教育情况
export function furLeaContinueEduDelete(parems) {
  return request({
    url: '/api/furLearnContinueEduWork/deleteFurLeaContinueEdu',
    method: 'post',
    params: parems
  })
}

// 指导 培养教师情况(按月查询)
export function guidanceTrainTecInquire(parems) {
  return request({
    url: '/api/guidTrainTeacWork/guidanceTrainTeacByMon',
    method: 'post',
    params: parems
  })
}

// 增加指导，培养教师情况
export function guidanceTrainTecIncrease(parems) {
  return request({
    url: '/api/guidTrainTeacWork/addGuidTrainTeac',
    method: 'post',
    params: parems
  })
}

// 修改指导，培养教师情况
export function guidanceTrainTecUpdate(parems) {
  return request({
    url: '/api/guidTrainTeacWork/updateGuidTrainTec',
    method: 'post',
    params: parems
  })
}

// 删除指导，培养教师情况
export function guidanceTrainTecDelete(parems) {
  return request({
    url: '/api/guidTrainTeacWork/deleteGuidTrainTec',
    method: 'post',
    params: parems
  })
}

// // 获取考试信息
// export function getExamData() {
//   return request({
//     url: '/exam/findAllExaminfo',
//     method: 'get'
//   })
// }
