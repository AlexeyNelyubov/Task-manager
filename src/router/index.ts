import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/Index.vue'
const TasksPage = () => import("@/pages/Tasks.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/tasks',
      name: 'TasksPage',
      component: TasksPage
    }
  ]
})

export default router
