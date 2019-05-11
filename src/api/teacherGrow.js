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
    url: '/api/taskWork/showTeachWorkByMon',
    method: 'post',
    params: parems
  })
}

// 教学工作（全部查询）
export function allTeachInquire(token) {
  return request({
    url: '/api/taskWork/showTeachWork',
    method: 'post',
    params: { token }
  })
}

// 教育工作(按月查询)
export function eductionJobInquire(parems) {
  return request({
    url: '/api/taskWork/eduWorkByMonth',
    method: 'post',
    params: parems
  })
}

// 汇报观摩研究课程(按月查询)
export function reportObsResearchInquire(parems) {
  return request({
    url: '/api/taskWork/reportObsResearchByMonth',
    method: 'post',
    params: parems
  })
}

// 组织课外活动(按月查询)
export function organizeExtraInquire(parems) {
  return request({
    url: '/api/taskWork/organizeExtraByMon',
    method: 'post',
    params: parems
  })
}

// 参加系统进修或继续教育情况(按月查询)
export function furLeaContinueEduInquire(parems) {
  return request({
    url: '/api/taskWork/furLearnContinueEduByMon',
    method: 'post',
    params: parems
  })
}

// 指导 培养教师情况(按月查询)
export function guidanceTrainTecInquire(parems) {
  return request({
    url: '/api/taskWork/guidanceTrainTeacByMon',
    method: 'post',
    params: parems
  })
}
