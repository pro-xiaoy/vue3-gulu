<template>
  <div>
    点击展示<span @click="toggle">Dialog</span>
    <Dialog :visible="visible"> </Dialog>
  </div>
</template>

<script>
import { Dialog } from "../libs/index";
import { ref } from 'vue'
export default {
  components: {
    Dialog,
  },
  setup(props) {
    var visible = ref(false)
    const toggle = () => {
      console.log('1111')
      visible.value = !visible.value
    }
    console.log('vis++++', visible)
    return {
      visible,
      toggle
    }
  }
};
</script>

<style>
</style>