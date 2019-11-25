import request from '@/utils/request'

// 输入手机号码获取验证码
export function getVerificationCode(parems) {
  return request({
    url: '/api/phoneFindAccount/aliyunSms',
    method: 'get',
    params: parems
  })
}

// 检查验证码找回密码
export function useCodeFindPassword(parems) {
  return request({
    url: '/api/phoneFindAccount/foundPWDByTel',
    method: 'get',
    params: parems
  })
}
