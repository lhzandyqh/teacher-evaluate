import request from '@/utils/request'

// 获取年级组均分数据
export function getAvgScoreGroupByGradeData(token) {
  return request({
    url: '/api/teamScore/avgScoreGroupByGrade',
    method: 'post',
    params: { token }
  })
}

