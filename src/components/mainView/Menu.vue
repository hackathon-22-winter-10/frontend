<script setup lang="ts">
import { Menu } from '/@/lib/menu/menu'
import { getMenuTypeList } from '/@/lib/menu/menu'
const props = defineProps<{ menu: Menu }>()
const alarta = () => {
  alert('今日は' + props.menu.menu + 'を' + props.menu.amount + 'だけやった')
}
const menuTypeList = getMenuTypeList()
</script>
<template>
  <div :class="$style.body">
    <div :class="$style.menu">
      <select v-model="menu.menu" :class="$style.selectBox">
        <option v-for="menu in menuTypeList">
          {{ menu }}
        </option>
      </select>
    </div>
    <div :class="$style.amount">
      <input type="number" :class="$style.input" v-model="menu.amount" />
    </div>
    <div :class="$style.buttonWrapper">
      <button @click="alarta"><span style="width: 100%">Done!</span></button>
    </div>
  </div>
</template>

<style module lang="scss">
.body {
  margin: 2rem 0;
}
.menu {
  width: 15rem;
  max-width: calc(50% - 4rem);
  display: inline-block;
  height: 2rem;
}
.selectBox {
  width: 100%;
  max-width: 100%;
  font-size: min(2rem, 5vw);
  height: fit-content;
  border: none;
  padding: 0;
}
.amount {
  width: 6rem;
  max-width: 30%;
  display: inline-block;
  font-size: min(2rem, 5vw);
  height: 2rem;
  margin: 0 2rem;
}
.input {
  width: 6rem;
  max-width: 100%;
  font-size: min(2rem, 5vw);
  height: 2rem;
  border: none;
  padding: 0;
}
.buttonWrapper {
  width: 6rem;
  max-width: 20%;
  display: inline-block;
  font-size: min(2rem, 5vw);
  height: 2rem;
}
button {
  padding: 0;
  max-width: 100%;
}
</style>
