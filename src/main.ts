

import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

import App from './App.vue'
import { createApp } from 'vue'

import { registerGlobComp } from './components/registerGlobComp'
import { setupRouter } from './router'

async function bootstrap(){
  const app = createApp(App)

  // 注册全局组件 如果没有注册 vite Pre-bundling 不会把ant-design-vue加进去
  registerGlobComp(app)
  
  // 配置路由
  setupRouter(app);

  app.mount("#app")
}

bootstrap()