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

// 管理员首页 教师各类绩效指标展示
export function adminTeacherKPI(parems) {
  return request({
    url: '/api/IntelligentAnalysisOfManager/teacherKPI',
    method: 'post',
    params: parems
  })
}

// 管理员首页 教研组，全校比较各项指标
export function adminCompare(parems) {
  return request({
    url: '/api/IntelligentAnalysisOfManager/getSchoolAndDeptCompare',
    method: 'get',
    params: parems
  })
}

// 全校教师详情展示
export function adminAllTeacherShow(parems) {
  return request({
    url: '/api/IntelligentAnalysisOfManager/getAllTecDetails',
    method: 'get',
    params: parems
  })
}

// 全校教师详情展示（无参）
export function adminCompareNoPrams(token) {
  return request({
    url: '/api/IntelligentAnalysisOfManager/getSchoolAndDeptCompare',
    method: 'get',
    params: { token }
  })
}

// 教师个人绩效大图
export function teacherPersonalChart(token) {
  return request({
    url: '/api/integralStatistics/scoreStatistics',
    method: 'get',
    params: { token }
  })
}

