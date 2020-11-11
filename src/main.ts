import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
// 导入svg
import './assets/iconfont.js'
import './index.css'
import 'github-markdown-css'
// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')