<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script>

<template>
  <div :class="$style.background" @click="close"></div>
  <div :class="$style.container">
    <h2>最近運動できてますか？</h2>
    <p>
      忙しい時こそ健康に気を遣いましょう！今日も素敵な運動があなたを待っていますよ！
    </p>
    <button :class="$style.button" @click="close">Close</button>
  </div>
</template>

<style module lang="scss">
.container {
  text-align: center;

  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width: min(80vw, 30rem);
  height: fit-content;

  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
}

.background {
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
}

.button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eee;
  }
}
</style>
