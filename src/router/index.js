import { createRouter, createWebHashHistory} from 'vue-router'

import index from '@/views/index.vue'
import profile from '@/views/user/posts.vue'

import LeftSidebar from '@/components/left-slider.vue'

const routes = [
    {
        path: '/',
        alias: ['/index', '/home'],
        components: {
            default: index,
            LeftSidebar: LeftSidebar
        }
    },
    {
        path: '/login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/users/:id(\\d+)',
        component: profile,
        children: [
            { 
                path: '/users/:id(\\d+)/posts', 
                component: () => import('@/views/user/posts.vue'),
            },
          ],
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router