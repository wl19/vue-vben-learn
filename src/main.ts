

import App from './App.vue'
import { createApp } from 'vue'

import { registerGlobComp } from './components/registerGlobComp'

async function bootstrap(){
  const app = createApp(App)

  // 注册全局组件 如果没有注册 vite Pre-bundling 不会把ant-design-vue加进去
  registerGlobComp(app)
  
  app.mount("#app")
}

bootstrap()