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

// 个人工作统计详情图汇报课, 观摩课，研究课情况
export function getReportObsResearchCount(token) {
  return request({
    url: '/api/ReporObsResearch/statisticReportObsResearchByMonth',
    method: 'post',
    params: { token }
  })
}

// 个人工作统计详情图组织课外活动情况
export function getOrganizeExtraActivityCount(token) {
  return request({
    url: '/api/organizeExtraWork/statisticOrganizeExtraActivityByMon',
    method: 'post',
    params: { token }
  })
}
// 个人工作统计详情图参加系统进修或继续教育情况
export function getFurLearnContinueEduCount(token) {
  return request({
    url: '/api/furLearnContinueEduWork/statisticFurLearnContinueEduByMon',
    method: 'post',
    params: { token }
  })
}
// 个人工作统计详情图指导，培养教师情况
export function getGuidTrainTeacCount(token) {
  return request({
    url: '/api/guidTrainTeacWork/statisticGuidTrainTeac',
    method: 'post',
    params: { token }
  })
}
