import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/inicio.vue";
import BBSAsk from "../views/materias.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path:'/home',
      component:Home,
    },
    {
      name: 'ask',
      path: '/ask',
      component: BBSAsk,
    },

  ]
})

export default router

