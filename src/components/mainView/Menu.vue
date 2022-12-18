<script setup lang="ts">
import { Menu, MenuType } from '/@/lib/menu/menu'
import { getMenuTypeList } from '/@/lib/menu/menu'
const props = defineProps<{ menu: Menu }>()
const emits = defineEmits<{
  (e: 'done', id: number, name: string, duration: number): void
}>()
const alart = () => {
  // alert(
  //   '今日は' +
  //     props.menu.name +
  //     'を' +
  //     props.menu.duration +
  //     getUnit(props.menu.name) +
  //     'だけやった'
  // )
}
const menuTypeList = getMenuTypeList()
const getUnit = (menu: MenuType): string => {
  switch (menu) {
    case 'running':
    case 'walking':
      return 'km'
    case 'push-ups':
    case 'squat':
      return '回'
    default:
      const _exhaustiveCheck: never = menu
      return ''
  }
}
</script>
<template>
  <div :class="$style.body">
    <div :class="$style.menu">
      <select v-model="menu.name" :class="$style.selectBox">
        <option v-for="menu in menuTypeList">
          {{ menu }}
        </option>
      </select>
    </div>
    <div :class="$style.amount">
      <input type="number" :class="$style.input" v-model="menu.duration" />
    </div>
    <div :class="$style.unit">{{ getUnit(menu.name) }}</div>
    <div :class="$style.buttonWrapper">
      <button
        :class="$style.button"
        @click="emits('done', menu.id, menu.name, menu.duration)"
      >
        <span style="width: 100%">完了!</span>
      </button>
    </div>
  </div>
</template>

<style module lang="scss">
.body {
  margin: 2rem 0;
}
.menu {
  width: 15rem;
  max-width: calc(50% - 6rem);
  display: inline-block;
  height: fit-content;
  min-height: 2rem;
}
.selectBox {
  width: 100%;
  max-width: 100%;
  font-size: min(2rem, 4vw);
  height: fit-content;
  border: none;
  padding: 0;
  min-height: 2rem;
}
.amount {
  width: 6rem;
  max-width: 20%;
  display: inline-block;
  font-size: min(2rem, 4vw);
  height: 2rem;
  margin-left: 2rem;
}
.input {
  width: 6rem;
  max-width: 100%;
  font-size: min(2rem, 4vw);
  height: 2rem;
  border: none;
  padding: 0;
}
.unit {
  width: 2rem;
  max-width: 10%;
  display: inline-block;
  font-size: min(2rem, 4vw);
  height: 2rem;
}
.buttonWrapper {
  width: 6rem;
  max-width: 20%;
  display: inline-block;
  //
  height: 2rem;
}
.button {
  height: 3rem;
  padding: 0;
  max-width: 100%;
  font-size: min(2rem, 4vw);
}
</style>
