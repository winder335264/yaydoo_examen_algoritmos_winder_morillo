import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejercicio1',
    name: 'ejercicio1',
    component: () => import('../views/ejercicio1.vue')
  },
  {
    path: '/ejercicio2',
    name: 'ejercicio2',
    component: () => import('../views/ejercicio2.vue')
  },
  {
    path: '/patrones',
    name: 'patrones',
    component: () => import('../views/patrones.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
