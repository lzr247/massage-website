import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Termin from '../views/Termin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/termin',
    name: 'Termin',
    component: Termin
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
