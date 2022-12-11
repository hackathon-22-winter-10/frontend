<script setup lang="ts"></script>
<template>
  <div v-for="i in 5">
    <div v-for="j in 7">{{ i }},{{ j }}</div>
  </div>
</template>
