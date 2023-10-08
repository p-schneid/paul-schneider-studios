import { createRouter, createWebHistory } from 'vue-router'
import Web from '../views/Web.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Web
  },
  {
    path: '/web',
    name: 'web',
    component: Web
  },
  {
    path: "/web-app/:id",
    name: "Web App",
    props: true,
    // route level code-splitting
    component: () => import('../views/WebApp.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/Design.vue')
  },
  {
    path: '/vr',
    name: 'vr',
    component: () => import('../views/vr/VR.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router
