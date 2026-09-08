import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import VisitUsPage from '@/views/VisitUsPage.vue'
import PrivacyPolicyPage from '@/views/PrivacyPolicy.vue'
import TermsAndConditionsPage from '@/views/TermsAndConditionsPage.vue'

const router = createRouter({
  history: createWebHashHistory("/Mugprintz-VueJs/"),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {
        icon: 'home',
        category: 'basic'
      }
    },
    {
      path: '/products',
      name: 'Our Products',
      component: ProductPage,
      meta: {
        icon: 'browse',
        category: 'basic'
      }
    },
    {
      path: '/visit-us',
      name: 'Visit Us',
      component: VisitUsPage,
      meta: {
        icon: 'store',
        category: 'basic'
      }
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUsPage,
      meta: {
        icon: 'diversity_1',
        category: 'basic'}
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicyPage,
      meta: {
        icon: 'privacy_tip',
        category: 'legal'}
    },
    {
      path: '/terms-and-conditions',
      name: 'Terms & Conditions',
      component: TermsAndConditionsPage,
      meta: {
        icon: 'gavel',
        category: 'legal'}
    }
  ]
})


export default router
