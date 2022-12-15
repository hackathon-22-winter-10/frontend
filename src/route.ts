import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from './components/HelloWorld.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorldVue
    }
  ]
})
