<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Menu } from '/@/lib/menu/menu'
import MenuVue from './mainView/Menu.vue'

const menus: Ref<Menu[]> = ref<Menu[]>([
  {
    menu: 'running',
    amount: 11.2
  },
  {
    menu: 'squat',
    amount: 30
  },
  {
    menu: 'push ups',
    amount: 20
  }
])
const menusa = menus.value
</script>
<template>
  <div v-for="menu in menus" :v-key="menu">
    <MenuVue :menu="menu" />
  </div>
</template>
