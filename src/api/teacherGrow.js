import request from '@/utils/request'

// 工作分享上传
export function workShareUpload(parems) {
  return request({
    url: '/api/jobSharing/increaseArticle',
    method: 'post',
    params: parems
  })
}
