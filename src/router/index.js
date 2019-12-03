import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false resultCount           if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
    // hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: '/countInfo/index',
    // redirect: '/webIndex',
    hidden: true,
    meta: { roles: ['elv', 'grow'] },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/webIndex',
    component: () => import('@/views/webIndex/index'),
    name: 'webIndex',
    meta: { roles: ['elv', 'grow'] }
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// export const asyncRouterMapGrow = [
//   // 教师成长部分
//   {
//     path: '/workTask',
//     component: Layout,
//     // hidden: true,
//     meta: {
//       roles: ['教师', '教师组长', '系统管理员'] // you can set roles in root nav
//     },
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/aTeacherGrow/workTask'),
//         name: 'WorkTask',
//         meta: { title: '工作任务', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
//       }
//     ]
//   },
//   {
//     path: '/workShare',
//     component: Layout,
//     // hidden: true,
//     meta: {
//       roles: ['教师', '教师组长', '系统管理员'] // you can set roles in root nav
//     },
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/aTeacherGrow/workShare'),
//         name: 'WorkShare',
//         meta: { title: '工作分享', icon: 'link', roles: ['教师', '教师组长', '系统管理员'] }
//       }
//     ]
//   },
//   {
//     path: '/resultCount',
//     component: Layout,
//     // hidden: true,
//     meta: {
//       roles: ['教师', '教师组长', '系统管理员'] // you can set roles in root nav
//     },
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/aTeacherGrow/resultCount'),
//         name: 'ResultCount',
//         meta: { title: '成果统计', icon: 'chart', roles: ['教师', '教师组长', '系统管理员'] }
//       }
//     ]
//   }
// ]

export const asyncRouterMap = [
  {
    path: '/teacherInfo',
    component: Layout,
    // hidden: true,
    meta: { roles: ['教师'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/teacherInformation'),
        name: 'TeacherInfo',
        meta: { title: '个人信息', icon: 'documentation', roles: ['教师', '教师组长', '系统管理员'] }
      }
    ]
  },
  {
    path: '/workTask',
    component: Layout,
    // hidden: true,
    meta: {
      title: '工作任务',
      icon: 'excel',
      roles: ['教师'] // you can set roles in root nav
    },
    children: [
      {
        path: 'elementWork',
        component: () => import('@/views/aTeacherGrow/workTask'),
        name: 'WorkTask',
        meta: { title: '基本工作', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      },
      {
        path: 'jixiaoWork',
        component: () => import('@/views/aTeacherGrow/basicWork'),
        name: 'basicWork',
        meta: { title: '绩效工作', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      }
    ]
  },
  {
    path: '/workShare',
    component: Layout,
    // hidden: true,
    meta: {
      roles: ['教师'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherGrow/workShare'),
        name: 'WorkShare',
        meta: { title: '经验分享', icon: 'link', roles: ['教师', '教师组长', '系统管理员'] }
      }
    ]
  },
  {
    path: '/myAuditResult',
    component: Layout,
    // hidden: true,
    meta: { roles: ['教师'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/auditResult'),
        name: 'IntegrationConfig',
        meta: { title: '审核结果', icon: 'edit', roles: ['教师'] }
      }
    ]
  },
  {
    path: '/engageManage',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统管理员'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/engageManage'),
        name: 'EngageManage',
        meta: { title: '聘任管理', icon: 'edit', roles: ['系统管理员'] }
      }
    ]
  },
  {
    path: '/authorityManage',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统管理员'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/authorityManage'),
        name: 'AuthorityManage',
        meta: { title: '权限管理', icon: 'peoples', roles: ['系统管理员'] }
      }
    ]
  },
  {
    path: '/integrationConfig',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统管理员'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/integrationConfig'),
        name: 'IntegrationConfig',
        meta: { title: '积分配置', icon: 'edit', roles: ['系统管理员'] }
      },
      {
        path: 'integrationAdd',
        component: () => import('@/views/aTeacherEvaluate/integrationAdd'),
        name: 'integrationAdd',
        hidden: true,
        meta: {
          title: '添加新的积分'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/chakanshenhe',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统管理员'] },
    children: [
      {
        path: 'index',
        name: 'IntegrationConfig',
        component: () => import('@/views/aTeacherEvaluate/lookingAuditing'),
        meta: { title: '查看审核', icon: 'edit', roles: ['系统管理员'] }
      }
    ]
  },
  {
    path: '/adminauditinghistory',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统管理员'] },
    children: [
      {
        path: 'index',
        name: 'AuditingHistory',
        component: () => import('@/views/aTeacherEvaluate/adminAuditingHistory'),
        meta: { title: '审核历史', icon: 'list', roles: ['系统管理员'] }
      }
    ]
  },
  {
    path: '/integrationInfo',
    component: Layout,
    // hidden: true,
    meta: { roles: ['教师'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/integrationInfo'),
        name: 'IntegrationInfo',
        meta: { title: '积分详情', icon: 'component', roles: ['教师'] }
      }
    ]
  },
  {
    path: '/countInfo',
    component: Layout,
    // hidden: true,
    meta: { roles: ['教师', '教师组长', '系统管理员'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/countInfo'),
        name: 'CountInfo',
        meta: { title: '智能分析', icon: 'table', roles: ['教师', '教师组长', '系统管理员'] }
      }
    ]
  },
  {
    path: '/aptitudeInfo',
    component: Layout,
    // hidden: true,
    meta: { roles: [] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/aptitudeInfo'),
        name: 'aptitudeInfo',
        meta: { title: '积分信息', icon: 'form', roles: ['教师组长', '系统管理员'] }
      },
      {
        path: 'aptitudeInfoAdd',
        component: () => import('@/views/aTeacherEvaluate/aptitudeInfoAdd'),
        name: 'aptitudeInfoAdd',
        hidden: true,
        meta: {
          title: '添加资质信息'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/auditingList',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统审核员', '教师组长'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/auditingList'),
        name: 'AuditingList',
        meta: { title: '审核列表', icon: 'list', roles: ['系统审核员', '系统管理员', '教师组长'] }
      }
    ]
  },
  {
    path: '/auditingHistory',
    component: Layout,
    // hidden: true,
    meta: { roles: ['系统审核员', '教师组长'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/auditingHistory'),
        name: 'AuditingHistory',
        meta: { title: '审核历史', icon: 'icon', roles: ['系统审核员', '系统管理员', '教师组长'] }
      }
    ]
  },
  {
    path: '/outPut',
    component: Layout,
    // hidden: true,
    meta: {
      title: '智能导出',
      icon: 'excel',
      roles: ['教师'] // you can set roles in root nav
    },
    children: [
      {
        path: 'elementWork',
        name: 'WorkTask',
        component: () => import('@/views/aTeacherGrow/intelligentExportPart/annualAssessmentWord'),
        meta: { title: '年度考核表', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      },
      {
        path: 'jixiaoWork',
        name: 'basicWork',
        meta: { title: '职称评定表', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      },
      {
        path: 'jixiaoWork',
        name: 'basicWork',
        meta: { title: '教师积分表', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      }
    ]
  },
  {
    path: '/look',
    component: Layout,
    // hidden: true,
    meta: {
      title: '智能服务',
      icon: 'excel',
      roles: ['系统管理员'] // you can set roles in root nav
    },
    children: [
      {
        path: 'elementWork',
        name: 'WorkTask',
        component: () => import('@/views/aTeacherGrow/fearturedQuery/featureSearch'),
        meta: { title: '定制查询', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      },
      {
        path: 'elementWorktwo',
        name: 'WorkTask',
        component: () => import('@/views/aTeacherEvaluate/batchImport'),
        meta: { title: '批量导入', icon: 'excel', roles: ['教师', '教师组长', '系统管理员'] }
      }
    ]
  },
  {
    path: '/myProblemFeedback',
    component: Layout,
    // hidden: true,
    meta: { roles: ['教师'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/aTeacherEvaluate/problemFeedback'),
        name: 'AuthorityManage',
        meta: { title: '问题反馈', icon: 'peoples', roles: ['教师'] }
      }
    ]
  },
  // {
  //   path: '',
  //   component: Layout,
  //   meta: { roles: ['教师', '教师组长', '系统管理员'] },
  //   // redirect: '/permission/index',
  //   // alwaysShow: true, // will always show the root menu
  //   children: [
  //     {
  //       path: 'permission',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: '权限切换',
  //         icon: 'lock'
  //         // roles: ['5'] // you can set roles in root nav
  //       }
  //     }
  //   ]
  // },
  // 教师成长部分
  // {
  //   path: '/resultCount',
  //   component: Layout,
  //   // hidden: true,
  //   meta: {
  //     roles: ['教师', '教师组长'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/aTeacherGrow/resultCount'),
  //       name: 'ResultCount',
  //       meta: { title: '工作统计', icon: 'chart', roles: ['教师', '教师组长', '系统管理员'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   hidden: true,
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },
  /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   hidden: true,
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  // {
  //   path: '/tab',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   hidden: true,
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   hidden: true,
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   meta: { title: 'PDF', icon: 'pdf' },
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
