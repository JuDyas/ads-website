import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import UserProfile from '@/components/UserProfile.vue'
import CategoryAd from '@/components/CategoryAd.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/CategoryAd',
    name: 'CategoryAd',
    component: CategoryAd
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
