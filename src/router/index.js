import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import VisitUsPage from '@/views/VisitUsPage.vue'

const router = createRouter({
  history: createWebHashHistory("/Mugprintz-VueJs/"),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: { icon: 'home' }
    },
    {
      path: '/products',
      name: 'Our Products',
      component: ProductPage,
      meta: { icon: 'browse' }
    },
    {
      path: '/visit-us',
      name: 'Visit Us',
      component: VisitUsPage,
      meta: { icon: 'store' }
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUsPage,
      meta: { icon: 'diversity_1' }
    }
  ]
})


export default router
