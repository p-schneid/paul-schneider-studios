import { createRouter, createWebHistory } from 'vue-router'
import Web from '../views/Web.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web',
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
})

export default router
