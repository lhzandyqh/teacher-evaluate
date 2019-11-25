import request from '@/utils/request'

// 年级主任获取审核历史列表
export function nianjizhurenGetAuditingHistoryListData(parmes) {
  return request({
    url: '/api/auditList/getAuditHistory',
    method: 'post',
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

// 教师组长开始审核基本工作
export function jiaoshizuzhangAuditingBasicWork(parmes) {
  return request({
    url: '/api/BasicWorkVerify/workVerify',
    method: 'get',
    params: parmes
  })
}
