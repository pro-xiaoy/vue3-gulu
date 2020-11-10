<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
const width = document.documentElement.clientWidth;
const menuVisible = ref(width < 500 ? false : true);
provide('menuVisible', menuVisible)
</script>
