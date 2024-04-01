import { createRouter,createWebHashHistory } from 'vue-router'
import List from './pages/List.vue';
import Home from './pages/Home.vue';

const routes = [
  {
    path: '/', 
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;