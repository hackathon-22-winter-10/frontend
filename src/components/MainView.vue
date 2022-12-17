<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
function success(position: { coords: { latitude: any; longitude: any } }) {
  //緯度
  latitude.value = position.coords.latitude
  //経度
  longitude.value = position.coords.longitude
}

function error() {
  isActiveGeoLocation.value = true
}

const options = {
  enableHighAccuracy: false,
  maximumAge: 30000,
  timeout: 27000
}
const isActiveGeoLocation = ref(false)
const latitude = ref(0)
const longitude = ref(0)
onMounted(() => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success, error, options)
  } else {
    isActiveGeoLocation.value = true
  }
})
</script>
<template>
  <div v-if="isActiveGeoLocation">位置情報が取得できません</div>
  <div v-else>緯度:{{ latitude }}、経度:{{ longitude }}</div>
  <div v-for="menu in menus" :v-key="menu">
    <MenuVue :menu="menu" />
  </div>
</template>
