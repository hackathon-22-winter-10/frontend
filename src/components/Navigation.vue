<script setup lang="ts">
import isMobile from 'ismobilejs'
const isPhone = isMobile().phone
</script>

<template>
  <div :class="[isPhone ? $style.phone : $style.pc, $style.navigation]">
    <div :class="$style.linkWrapper">
      <div :class="$style.link">
        <div style="display: table; height: 100%; width: 100%">
          <RouterLink :class="$style.linkText" to="/">Home</RouterLink>
        </div>
      </div>
      <div :class="$style.link">
        <div style="display: table; height: 100%; width: 100%">
          <RouterLink :class="$style.linkText" to="/calender"
            >Calender</RouterLink
          >
        </div>
      </div>
      <div :class="$style.link">
        <div style="display: table; height: 100%; width: 100%">
          <RouterLink :class="$style.linkText" to="/graph">Graph</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.pc {
  position: fixed;
  top: 0;
}
.phone {
  position: fixed;
  bottom: 0;
}
.navigation {
  width: 100%;
  background-color: rgb(255, 153, 70);
  left: 0;
  height: 3rem;
}
.link {
  width: calc(100vw / 3);
  max-width: 15rem;
  height: 100%;
  display: inline-block;
}
.link:hover {
  background-color: rgb(255, 129, 26);
  transition: 0.2s;
}
.linkWrapper {
  margin: auto;
  height: 100%;
  width: fit-content;
}
.linkText {
  display: table-cell;
  vertical-align: middle;
}
</style>
