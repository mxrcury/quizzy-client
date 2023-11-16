import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/:id',
    name: 'Quiz',
    component: () => import('@/views/Quiz.vue'),
    props: (route) => ({ id: route.params.id })
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})
