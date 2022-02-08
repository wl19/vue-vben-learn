
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import type { AppRouteRecordRaw } from '/@/router/types';

// import { basicRoutes } from './routes/basic';
import { createRouter, createWebHashHistory } from 'vue-router';

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: '登录页',
  },
};

// app router
export const router = createRouter({
  history: createWebHashHistory('./'),
  routes: [LoginRoute] as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}