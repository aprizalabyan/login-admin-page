import HomePage from '../pages/Home.vue'
import AboutPage from '../pages/About.vue'
import NotFoundPage from '../pages/NotFound.vue'
import LoginPage from '../pages/Login.vue'
import AdminParent from '../pages/admin/AdminParent.vue'
import DashboardPage from '../pages/admin/Dashboard.vue'
import UserManagementPage from '../pages/admin/UserManagement.vue'
import BlankContentPage from '../pages/admin/BlankContent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminParent,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardPage
      },
      {
        path: 'user-management',
        component: UserManagementPage
      },
      {
        path: ':pathMatch(.*)*',
        component: BlankContentPage
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router