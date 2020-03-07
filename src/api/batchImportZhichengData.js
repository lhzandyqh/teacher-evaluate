import request from '@/utils/request'

// 批量导入 获取工资数据
export function batchImportSalaryData(token) {
  return request({
    url: '/api/getTecInfoLabel/getAllTecSalaryInfo',
    method: 'post',
    params: { token }
  })
}

// 批量导入 获取职称数据
export function batchImportZhichengData(token) {
  return request({
    url: '/api/getTecInfoLabel/getAllTecZhichengInfo',
    method: 'post',
    params: { token }
  })
}

// 批量修改工资
export function batchSetSalary(parems) {
  return request({
    url: '/api/getTecInfoLabel/updateSaralyByTecNameAndIdnum',
    method: 'post',
    params: parems
  })
}

// 批量修改职称
export function batchSetZhicheng(parems) {
  return request({
    url: '/api/getTecInfoLabel/updateZhichengByTecNameAndIdnum',
    method: 'post',
    params: parems
  })
}
