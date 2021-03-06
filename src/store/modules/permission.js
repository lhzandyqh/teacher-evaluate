import { asyncRouterMap, constantRouterMap, asyncRouterMapGrow } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      // state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        // if (roles.includes('admin')) {
        //   accessedRouters = asyncRouterMap
        // } else {
        const role = window.localStorage.getItem('userRole')
        // if (roles.indexOf('elv') > -1) {
        // eslint-disable-next-line
        accessedRouters = filterAsyncRouter(asyncRouterMap, [role])
        console.log('输出GenerateRoutes中的role看一看')
        console.log(role)
        console.log('输出accessedRouters')
        console.log(accessedRouters)
        // } else {
        // accessedRouters = filterAsyncRouter(asyncRouterMapGrow, [role])
        // }
        // }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
