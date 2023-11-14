import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Base',
    component: () => import('@/views/Base.vue')
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: () => import('@/views/Quiz.vue'),
    props: (route) => ({ id: route.params.id })
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})
