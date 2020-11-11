
<demo>
  支持disbaled
</demo>

<template>
  <Switch v-model:value="bool" disabled/>
</template>

<script>
import { ref } from 'vue'
import { Switch } from "../libs";
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