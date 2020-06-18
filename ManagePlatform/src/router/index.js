import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '首页',
            component: (resolve) => require(['@/components/admin'], resolve),
            children: [{
                    path: '/user/',
                    name: '用户列表',
                    component: (resolve) => require(['@/components/user/list'], resolve)
                },
                {
                    path: '/user/new',
                    name: '新建用户',
                    component: (resolve) => require(['@/components/user/new'], resolve)
                },
                {
                    path: '/user/disabled',
                    name: '停用列表',
                    component: (resolve) => require(['@/components/user/disabled'], resolve)
                },
                {
                    path: '/device/type',
                    name: '设备类型',
                    component: (resolve) => require(['@/components/device/type'], resolve)
                },
                {
                    path: '/device/version',
                    component: (resolve) => require(['@/components/device/version'], resolve)
                },
                {
                    path: '/device/add',
                    name: '录入设备',
                    component: (resolve) => require(['@/components/device/add'], resolve)
                },
                {
                    path: '/device/list',
                    name: '设备列表',
                    component: (resolve) => require(['@/components/device/list'], resolve)
                },
                {
                    path: '/device/data',
                    name: '生产数据',
                    component: (resolve) => require(['@/components/device/data'], resolve)
                },
                {
                    path: '/system/resource',
                    name: '资源管理',
                    component: (resolve) => require(['@/components/system/resource'], resolve)
                },
                {
                    path: '/system/authority',
                    name: '權限管理',
                    component: (resolve) => require(['@/components/system/authority'], resolve)
                },
                {
                    path: '/system/role',
                    name: '角色管理',
                    component: (resolve) => require(['@/components/system/role'], resolve)
                },
                {
                    path: 'system/company',
                    name: '部門管理',
                    component: (resolve) => require(['@/components/system/company'], resolve)
                },
                {
                    path: '/app/list',
                    component: (resolve) => require(['@/components/app/list'], resolve)
                },
                {
                    path: '/app/version',
                    component: (resolve) => require(['@/components/app/version'], resolve)
                },
                {
                    path: '/app/task',
                    component: (resolve) => require(['@/components/app/task'], resolve)
                },
                {
                    path: '/app/records',
                    component: (resolve) => require(['@/components/app/records'], resolve)
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: (resolve) => require(['@/components/login'], resolve)
        }
    ]
})