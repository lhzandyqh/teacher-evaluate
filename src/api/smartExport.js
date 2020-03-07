import request from '@/utils/request'

// 年度考核表根据身份自动获取表名
export function autoGetTableTitle(token) {
  return request({
    url: '/api/intelligentExport/postClassification',
    method: 'post',
    params: { token }
  })
}

// 获得事业单位专业技术人员年度（聘期）考核登记表
export function getZhuanjiData(token) {
  return request({
    url: '/api/intelligentExport/zhuanjiExport',
    method: 'get',
    params: { token }
  })
}

// 教师教育教学履职情况登记表
export function getLvzhiData(token) {
  return request({
    url: '/api/intelligentExport/intelligentExport',
    method: 'get',
    params: { token }
  })
}

// 事业单位管理人员年度（聘期）考核登记表
export function getGuanliData(token) {
  return request({
    url: '/api/intelligentExport/managerExport',
    method: 'get',
    params: { token }
  })
}

// 事业单位工勤技能人员年度（聘期）考核登记表
export function getGongqingData(token) {
  return request({
    url: '/api/intelligentExport/workSkillExport',
    method: 'get',
    params: { token }
  })
}

// 总结数据填写
export function summaryInput(parems) {
  return request({
    url: '/api/intelligentExport/summaryInput',
    method: 'get',
    params: parems
  })
}

// 职称评定表
export function getZhichengTable(token) {
  return request({
    url: '/api/intelligentExport/zhichengExport',
    method: 'get',
    params: { token }
  })
}

// 职评申报表
export function getJobTable(token) {
  return request({
    url: '/api/intelligentExport/zhipingExport',
    method: 'get',
    params: { token }
  })
}
