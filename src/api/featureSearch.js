import request from '@/utils/request'

// 获取筛选条件
export function getFilterCondition(token) {
  return request({
    url: '/api/costomizedQuery/queryCondition',
    method: 'get',
    params: { token }
  })
}

// 获取筛选条件对应的值
export function getFilterValue(parems) {
  return request({
    url: '/api/costomizedQuery/queryConditionValue',
    method: 'post',
    params: parems
  })
}

// 根据筛选条件查询教师
export function getTeacherByFilter(parems) {
  return request({
    url: '/api/costomizedQuery/getTecInfo',
    method: 'post',
    params: parems
  })
}

