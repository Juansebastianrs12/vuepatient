import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearView from '../components/CrearView.vue'
import ListarView from '../components/ListarView.vue'
import EditarView from '../components/EditarView.vue'
import ResultadosView from '../components/ResultadosView.vue'
import ConsultaPacView from '../components/ConsultaPacView.vue'
import IngresarDocView from '../components/IngresarDocView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  

  {
    path: '/crear',
    name: 'crear',
    component: CrearView
  },
  {
  path: '/resultado/:id',
  name: 'resultado',
  component: ResultadosView
},
  {
    path: '/listar',
    name: 'listar',
    component: ListarView
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EditarView
  },
  {
    path: '/consulta/:Cedula',
    name: 'consulta',
    component: ConsultaPacView
  },
  {
    path: '/buscar/',
    name: 'buscarCC',
    component: IngresarDocView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
