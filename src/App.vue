<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import GraphRender from './components/graphRender.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div style="position: absolute; top: 0; left: 0; width: 100vw">
    <div style="margin-top: 3rem">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" :class="$style.logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img
          src="./assets/vue.svg"
          :class="[$style.logo, $style.vue]"
          alt="Vue logo"
        />
      </a>
    </div>
    <Navigation />
    <RouterView />
  </div>
</template>

<style module lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
