import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'starter',
      component: () => import('../views/pages/starter.vue')
    }
  ]
})

export default router