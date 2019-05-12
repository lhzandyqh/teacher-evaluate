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
    url: '/api/jobSharing/displayArticle',
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

// 汇报观摩研究课程(按月查询)
export function reportObsResearchInquire(parems) {
  return request({
    url: '/api/ReporObsResearch/reportObsResearchByMonth',
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

// 参加系统进修或继续教育情况(按月查询)
export function furLeaContinueEduInquire(parems) {
  return request({
    url: '/api/furLearnContinueEduWork/furLearnContinueEduByMon',
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
