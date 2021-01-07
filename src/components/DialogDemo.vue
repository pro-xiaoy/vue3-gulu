<template>
  <div>
    点击展示<span @click="toggle">Dialog</span>
    <Dialog v-model:visible="x" @closefn="closefn" @fn="fn" @cancel="cancel">
      <template v-slot:title >头部</template>
      <template v-slot:content>
        <p>12312</p>
      </template>
    </Dialog>
  </div>
  <div>
    <DialogDemo1></DialogDemo1>
  </div>
</template>

<script>
import DialogDemo1 from './DialogDemo1.vue'
import { Dialog } from "../libs/index";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    DialogDemo1
  },
  setup(props) {
    var x = ref(false);
    const toggle = () => {
      console.log("1111");
      x.value = !x.value;
    };
    const closefn = () => {
      console.log('content+++')
       x.value = false
    }
    const fn = () => {} 
    const cancel = () => {}
    return {
      x,
      toggle,
      closefn
    };
  },
};
</script>

<style>
</style>