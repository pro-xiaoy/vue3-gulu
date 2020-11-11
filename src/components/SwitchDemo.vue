<template>
  <div>
    <h2>Switch 组建</h2>
    <Demo :component="Switch1" />
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Switch1 from './Switch1.Demo.vue'
console.log('Switch1+++', Switch1)
export default {
  
  components: {
    Demo
  },
  setup() {
    return {
      Switch1
    }
  }
}
</script>

<style>

</style>