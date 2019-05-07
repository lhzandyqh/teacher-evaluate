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
