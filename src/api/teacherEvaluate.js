import request from '@/utils/request'
// 积分配置列表
export function integrationConfigList(token) {
  return request({
    url: '/api/pointcertificate',
    method: 'get',
    params: { token }
  })
}
// 积分详情
export function integrationInfoList(token) {
  return request({
    url: '/api/qualification',
    method: 'get',
    params: { token }
  })
}
// 教师信息
export function getTeacherInfo(parems) {
  return request({
    url: '/api/teacher',
    method: 'get',
    params: parems
  })
}
// 教师基本信息123
export function getTeacherBase(token) {
  return request({
    url: '/api/teacher/teacherbaseinfo',
    method: 'get',
    params: { token }
  })
}
// 资质信息
export function getAptitudeInfo(token) {
  return request({
    url: '/api/qualificationinfo',
    method: 'get',
    params: { token }
  })
}
// 资质信息删除
export function getAptitudeDelete(parmes) {
  return request({
    url: '/api/qualificationinfo/del',
    method: 'post',
    params: parmes
  })
}
// 审核列表
export function getAuditingList(token) {
  return request({
    url: '/api/qualificationauditlist',
    method: 'get',
    params: { token }
  })
}
// 审核历史
export function getAuditingHistory(token) {
  return request({
    url: '/api/qualificationhistory',
    method: 'get',
    params: { token }
  })
}
// 统计信息
export function getCountListAll(token) {
  return request({
    url: '/api/scoreinfostaticBySubject/teacherRankall',
    method: 'get',
    params: { token }
  })
}
// 统计信息根据学科获取数据
export function getCountList(parems) {
  return request({
    url: '/api/scoreinfostaticBySubject/teacherRanksingle',
    method: 'get',
    params: parems
  })
}
// 统计信息积分概要统计
export function getCountListGaiyao(token) {
  return request({
    url: '/api/scoreinfostaticBySubject',
    method: 'get',
    params: { token }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
