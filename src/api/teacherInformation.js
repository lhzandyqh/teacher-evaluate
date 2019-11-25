import request from '@/utils/request'

// 获取教师个人信息
export function getTeacherInformationData(parems) {
  return request({
    url: '/api/teacher',
    method: 'get',
    params: parems
  })
}

// 修改教师个人信息
export function updateTeacherInformationData(parems) {
  return request({
    url: '/api/teacher/update',
    method: 'post',
    params: parems
  })
}

// 获取教师个人积分详情
export function getTeacherPersonalScore(parems) {
  return request({
    url: '/api/pointsDetails/teacherPointsDetails',
    method: 'get',
    params: parems
  })
}

// 教师问题反馈
export function myProblemFeedback(parems) {
  return request({
    url: '/api/feedBack/addEduWork',
    method: 'post',
    params: parems
  })
}

// 增加工作经历
export function increaseWorkExperience(parmes) {
  return request({
    url: '/api/workExperience/addWorkExperience',
    method: 'post',
    params: parmes
  })
}

// 查询工作经历
export function inquiryWorkExperience(token) {
  return request({
    url: '/api/workExperience/getWorkExperience',
    method: 'post',
    params: { token }
  })
}

// 删除工作经历
export function deleteWorkExperience(parmes) {
  return request({
    url: '/api/workExperience/deleteWorkExp',
    method: 'post',
    params: parmes
  })
}

// 修改工作经历
export function editWorkExperience(parmes) {
  return request({
    url: '/api/workExperience/updateWorkExp',
    method: 'post',
    params: parmes
  })
}

// 修改除了工作经历之外的所有个人信息
export function editOtherAllInformation(parmes) {
  return request({
    url: '/api/teacher/update',
    method: 'post',
    params: parmes
  })
}

// 教师个人信息修改，提交审核阶段
export function personalInformaticaEditWaitAuditing(parmes) {
  return request({
    url: '/api/teacher/updateTeacherInfo',
    method: 'post',
    params: parmes
  })
}

// 教师查看自己提交的审核历史
export function inquiryAuditingOutcomeList(token) {
  return request({
    url: '/api/teacher/teacherInfoAuditResult',
    method: 'get',
    params: { token }
  })
}

