import request from '@/utils/request'

// 管理员获取教师个人信息审核列表
export function getPersonalInformationAuditingListData(token) {
  return request({
    url: '/api/teacherinfoverify/teacherInfoAuditResult',
    method: 'post',
    params: { token }
  })
}

// 管理员进行审核
export function adminAuditingPersonalInformation(parmes) {
  return request({
    url: '/api/teacherinfoverify/verify',
    method: 'post',
    params: parmes
  })
}

// 管理员查看审核结果历史
export function adminGetAuditingPersonalInformationHistory(token) {
  return request({
    url: '/api/teacherinfoverify/teacherInfoAuditHistory',
    method: 'post',
    params: { token }
  })
}

// 教师组长查看基本工作待审核列表
export function jiaoshizuzhangGetAuditingListData(parmes) {
  return request({
    url: '/api/baseworkAuditResult/getBaseWorkAuditAsk',
    method: 'get',
    params: parmes
  })
}

// 教师组长查看基本工作审核历史
export function jiaoshizuzhangGetBasicWorkAuditingHistoryData(parmes) {
  return request({
    url: '/api/baseworkAuditResult/getBaseWorkAuditAsk',
    method: 'get',
    params: parmes
  })
}

// 管理员查看工作经历审核列表
export function adminGetWorkExperienceListData(token) {
  return request({
    url: '/api/workExperienceAudit/ahowWorkExpSubmitAsk',
    method: 'post',
    params: { token }
  })
}

// 管理员开始审核工作经历
export function adminBeginAuditingWorkExperience(parmes) {
  return request({
    url: '/api/workExperienceAudit/WorkExperienceVerify',
    method: 'post',
    params: parmes
  })
}

// 管理员审核工作经历历史
export function adminGetWorkExperienceHistoryData(token) {
  return request({
    url: '/api/workExperienceAudit/showWorkExpAuditHistory',
    method: 'post',
    params: { token }
  })
}
