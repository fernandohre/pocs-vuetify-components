import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Cliente from '@/components/Cliente.vue'
import Contador from '@/components/Contador.vue'
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
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router