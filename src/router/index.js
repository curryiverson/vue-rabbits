import { createRouter, createWebHistory } from 'vue-router'
//createRouter:创建router实例对象
//createWebHistory：创建history模式对象
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout,
      children: [
        {
          path:"",
          component: Home
        },
        {
          path:"/Category",
          component: Category,
        }
      ]
    },
    {
      path:'/login',
      component: Login
    },
  ]
})

export default router
