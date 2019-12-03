import request from '@/utils/request'

// 查看退休人员
export function findRetirementPeople(parems) {
  return request({
    url: '/api/tecInfoManagerment/findTecInfoByWorkStatus',
    method: 'get',
    params: parems
  })
}

// 合同快要到期的人员
export function findContractEndPeople(parems) {
  return request({
    url: '/api/engageManagerment/contractExpireReminder',
    method: 'post',
    params: parems
  })
}

// 根据年级组或者姓名搜索老师合同
export function findTeacherContractByNameOrGroup(parems) {
  return request({
    url: '/api/tecInfoManagerment/findTecInfoByName',
    method: 'get',
    params: parems
  })
}
