import request from '@/utils/request'

// 工作分享点赞收藏统计图获取分享文章数
export function getChartShareCount(token) {
  return request({
    url: '/api/jobSharingStatistic/statisticSharingCount',
    method: 'post',
    params: { token }
  })
}

// 工作分享点赞收藏统计图获取收藏文章数
export function getChartCollectCount(token) {
  return request({
    url: '/api/jobSharingStatistic/statisticCollectCount',
    method: 'post',
    params: { token }
  })
}

// 工作分享点赞收藏统计图获取点赞文章数
export function getChartLikeCount(token) {
  return request({
    url: '/api/jobSharingStatistic/statisticLikeCount',
    method: 'post',
    params: { token }
  })
}
