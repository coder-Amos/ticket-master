import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../views/home/Home')
        },
        {
            path: '/detail',
            name: 'Detail',
            component: () =>
                import ('../views/detail/Detail')
        },
        {
            path: '/kind',
            name: 'Kind',
            component: () =>
                import ('../views/kind/Kind')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () =>
                import ('../views/profile/Profile'),
            children: [{
                    path: '',
                    redirect: 'baseInfo'
                },
                {
                    path: 'baseInfo',
                    name: 'BaseInfo',
                    component: () =>
                        import ('../views/profile/baseInfo/BaseInfo')
                },
                {
                    path: 'ticketHistory',
                    name: 'TicketHistory',
                    component: () =>
                        import ('../views/profile/ticketHistory/TicketHistory')
                }
            ]
        }
    ]
})

// 导航守卫，渲染动态路由
// router.beforeEach((to, from, next) => {
//     from.meta.keepAlive = true
//     if (to.path === '/home') {
//         from.meta.keepAlive = false
//     }
// })

export default router