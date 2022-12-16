import { createRouter, createWebHistory } from 'vue-router'
import CalenderVue from './components/Calender.vue'
import graphRenderVue from './components/graphRender.vue'
import MainViewVue from './components/MainView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainViewVue
    },
    {
      path: '/calender',
      name: 'calender',
      component: CalenderVue
    },
    {
      path: '/graph',
      name: 'graph',
      component: graphRenderVue
    }
  ]
})
