<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import type { Menu } from '/@/lib/menu/menu'
import MenuVue from './mainView/Menu.vue'
import axios from 'axios'

const menus: Ref<Menu[]> = ref<Menu[]>([
  {
    id: 0,
    name: 'running',
    duration: 11.2
  },
  {
    id: 1,
    name: 'squat',
    duration: 30
  },
  {
    id: 2,
    name: 'push ups',
    duration: 20
  }
])
async function success(position: {
  coords: { latitude: any; longitude: any }
}) {
  //緯度
  latitude.value = position.coords.latitude
  //経度
  longitude.value = position.coords.longitude
  await axios
    .get('/api/todays_menu', {
      params: {
        lat: latitude.value,
        lon: longitude.value
      }
    })
    .then(res => {
      setData(res.data)
    })
}
function setData(data: any) {
  try {
    JSON.parse(data)
  } catch (error) {
    return
  }
  if ('details' in data) {
    const details = data['details']
    if (
      Array.isArray(details) &&
      'id' in details[0] &&
      'name' in details[0] &&
      'duration' in details[0]
    ) {
      menus.value = details
    }
  }
}

function error() {
  isActiveGeoLocation.value = true
}
async function postDetail(id: number, name: string, duration: number) {
  await axios
    .post('/api/details', {
      id: id,
      name: name,
      duration: duration
    })
    .then(res => {
      setData(res.data)
    })
    .catch(() => alert('something error'))
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
    <MenuVue :menu="menu" @done="postDetail" />
  </div>
</template>
