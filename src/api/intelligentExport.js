import request from '@/utils/request'

// 智能导出
export function intelligentExportWord(token) {
  return request({
    url: '/api/intelligentExport/intelligentExport',
    method: 'get',
    params: { token }
  })
}
