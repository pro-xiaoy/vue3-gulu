
<demo>
  常规操作
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script>
import {ref} from 'vue'
import Switch from '../libs/Switch.vue'
export default {
  components: {
    Switch
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>

<style>

</style>