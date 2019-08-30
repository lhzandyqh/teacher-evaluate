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
