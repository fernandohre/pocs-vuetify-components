import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Cliente from '@/components/Cliente.vue'
import Contador from '@/components/Contador.vue'
import Painel from '@/components/shared/Painel.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Cliente',
    name: 'Cliente',
    component: Cliente
  },
  {
    path: '/Contador',
    name: 'Contador',
    component: Contador
  },
  {
    path: '/Contador/Painel',
    name: 'Painel',
    component: Painel
  },
  {
    path: '/Cliente/Painel',
    name: 'Painel',
    component: Painel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router