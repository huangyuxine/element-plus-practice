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

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```
```
yarn dev
```
