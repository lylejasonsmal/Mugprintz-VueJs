import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import ProductPage from '@/views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/products',
      name: 'Our Products',
      component: ProductPage,
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUsPage,
    }
  ],
})

export default router
