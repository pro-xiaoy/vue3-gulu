<template>
  <button @click="increment">
    count is {{ state.count }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";
export default {
   setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      console.log('11111+')
      state.count++
    }

    return {
      state,
      increment
    }
  }
};
</script>

<style>
</style>