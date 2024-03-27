import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Hero from './pages/Hero.vue';

const routes = [
  {
    path: '/hero',
    name: 'hero',
    component: Hero
  },
  {
    path: '/', //view inicial
    name: 'home',
    component: Home
  },
  
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;