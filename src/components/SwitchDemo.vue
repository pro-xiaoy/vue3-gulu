<template>
  <div>
    <h2>Switch 组建</h2>
    <Demo :component="Switch1" />
    <Demo :component="Switch2" />

  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Switch1 from './Switch1.Demo.vue'
import Switch2 from './Switch2.Demo.vue'
export default {
  
  components: {
    Demo,
  },
  setup() {
    return {
      Switch1,
      Switch2
    }
  }
}
</script>

<style>

</style>