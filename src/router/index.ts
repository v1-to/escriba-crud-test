import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/person',
      name: 'person-list',
      component: () => import('../views/PersonView.vue')
    },
    {
      path: '/person/create',
      name: 'person-create',
      component: () => import('../views/PersonFormView.vue')
    },
    {
      path: '/person/:id',
      name: 'person-update',
      component: () => import('../views/PersonFormView.vue')
    },
    {
      path: '/product',
      name: 'product-list',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/product/create',
      name: 'product-create',
      component: () => import('../views/ProductFormView.vue')
    },
    {
      path: '/product/:id',
      name: 'product-update',
      component: () => import('../views/ProductFormView.vue')
    },
    {
      path: '/order',
      name: 'order-list',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/order/create',
      name: 'order-create',
      component: () => import('../views/OrderFormView.vue')
    },
    {
      path: '/order/:id',
      name: 'order-update',
      component: () => import('../views/OrderFormView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
