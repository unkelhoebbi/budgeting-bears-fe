import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Level from "../views/Level-details.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/level',
    name: 'Level',
    component: Level
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
