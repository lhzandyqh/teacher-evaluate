import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '../../router'
import store from '../index'

const user = {
  loginInfo: {
    username: '',
    password: ''
  },

  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      console.log(token)
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.user_name.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          console.log('测试登录返回的data')
          console.log(data)
          if (data.code === 405) {
            reject(data.msg)
          }
          // 权限角色
          // 1.学生 2.教师 3.审核员 4.系统管理员 5.教师组长
          window.localStorage.setItem('userRole', response.data.result.rolesname)
          commit('SET_TOKEN', data.result.token)
          // commit('SET_ROLES', ['admin'])
          // commit('SET_NAME', '123')
          // commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
          // commit('SET_INTRODUCTION', '123')
          setToken(data.result.token)
          // setToken(response.data.result.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // commit('SET_ROLES', ['admin'])
        // state.token 原getUserInfo参数
        getUserInfo(state.token).then(response => {
          // 由于mockjs 不支持自定义状态码只能这样hack
          if (!response.data) {
            reject('Verification failed, please login again.')
          }
          // const data = response.data
          const role = window.localStorage.getItem('userRole')
          if (role) {
            commit('SET_ROLES', [role])
          } else {
            commit('SET_ROLES', ['admin'])
          }

          console.log('getUserInfo')
          commit('SET_AVATAR', 'http://58.119.112.11:11005/b9be8be2-ad8c-4eed-ac9d-e83711334efe.jpg')
          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          // commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array!')
          // }

          // commit('SET_NAME', data.name)
          // commit('SET_AVATAR', data.avatar)
          // commit('SET_INTRODUCTION', data.introduction)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          window.localStorage.setItem('role', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOutRole({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        // removeToken()
        resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      var name = ''
      if (role === '教师') {
        name = '教师'
      } else if (role === '教师组长') {
        name = '教师组长'
      } else if (role === '系统管理员') {
        name = '系统管理员'
      }
      return new Promise(resolve => {
        // commit('SET_TOKEN', role)
        // setToken(role)
        console.log('测试不太好拿的token')
        console.log(user.state.token)
        getUserInfo(user.state.token).then(response => {
          console.log('测试修改后getUserInfo请求到的data')
          const data = response.data
          user.loginInfo.username = response.data.staff_number
          user.loginInfo.password = response.data.password
          console.log(data.userRole)
          console.log('测试切换的权限在权限数组中是否存在')
          console.log(data.userRole.includes(name))
          if (data.userRole.includes(name)) {
            window.localStorage.setItem('userRole', name)
            // var roles = []
            // roles.push(data.userRole)
            commit('SET_ROLES', data.roles)
            commit('SET_NAME', data.name)
            commit('SET_AVATAR', data.avatar)
            commit('SET_INTRODUCTION', data.introduction)
            // dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
            store.dispatch('GenerateRoutes', { name }).then(accessRoutes => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(accessRoutes) // 动态添加可访问路由表
              // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
            resolve()
            history.go(0)
          }
          // }
        })
        // loginByUsername('10001', '123456').then((response) => {
        //   const data = response.data
        //   console.log('测试登录返回的data')
        //   console.log(data)
        //   // if (data.code === 405) {
        //   //   reject(data.msg)
        //   // }
        //   // 权限角色
        //   // 1.学生 2.教师 3.审核员 4.系统管理员 5.教师组长
        //   // window.localStorage.setItem('userRole', name)
        //   commit('SET_TOKEN', data.result.token)
        //   setToken(data.result.token)
        history.go(0)
        // })
      })
    }
  }
}

export default user
