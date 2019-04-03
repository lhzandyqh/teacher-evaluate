import request from '@/utils/request'

export function loginByUsername(user_name, password) {
  const data = {
    user_name,
    password
  }
  return request({
    url: '/api/login',
    method: 'get',
    params: data
  })
  // return request({
  //   url: '/login/login',
  //   method: 'post',
  //   data
  // })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/teacher',
    method: 'get',
    params: { token }
  })
}

export function getNewsList() {
  return request({
    url: '/schoolnews',
    method: 'post'
  })
}

export function getSchoolNotices() {
  return request({
    url: '/schoolnotices',
    method: 'get'
  })
}

