# 安装
## 前端构建工具
```
yarn create vite
```
选择 vue-javascript
## 引入element-ui
```
yarn add element-plus
```
## 运行项目

修改`vite.config.js`
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  }
})
```
修改`src/main.js`
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```
```
yarn dev
```
# 基础练习
## 路由
教程：https://router.vuejs.org/zh/guide/
命名视图：https://juejin.cn/post/7099060100639227918
```
yarn add vue-router@4
```
创建`src/router/index.js`
```javascript
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
```
启用router, 在`src/main.js`中添加
```javascript
import router from './router'

app.use(router)
```
## 配置路径别名

`vite.config.js`中

```javascript
import  path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { //配置路径别名
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```