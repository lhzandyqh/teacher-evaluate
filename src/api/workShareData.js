import request from '@/utils/request'

// 获取我的草稿箱内容
export function getMyDraftData(token) {
  return request({
    url: '/api/jobSharing/displayArticleDrafts',
    method: 'post',
    params: { token }
  })
}

// 文章保存到草稿箱
export function draftDataUpload(parems) {
  return request({
    url: '/api/jobSharing/increaseArticleDrafts',
    method: 'post',
    params: parems
  })
}

// 在草稿箱修改草稿
export function modifyDraftData(parems) {
  return request({
    url: '/api/jobSharing/deleteDraftById',
    method: 'post',
    params: parems
  })
}

// 获取我的收藏
export function getMyFavoriteData(token) {
  return request({
    url: '/api/jobSharing/collectByTeacher',
    method: 'post',
    params: { token }
  })
}

// 将分享文章添加到收藏
export function addMyFavorite(parems) {
  return request({
    url: '/api/jobSharing/collectArticle',
    method: 'post',
    params: parems
  })
}

// 查看分享文章的收藏状态
export function lookArticleStatus(parems) {
  return request({
    url: '/api/jobSharing/lAndColStatusPerArticlePerTeach',
    method: 'post',
    params: parems
  })
}
