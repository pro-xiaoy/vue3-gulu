<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <button @click="showVisable = false">隐藏代码</button>
      <button @click="showVisable = true">查看代码</button>
    </div>
    <div class="demo-code">
      <pre v-show="showVisable" v-text="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    component: Object
  },
  setup(porps, component) {
    let texthtml = porps.component. __sourceCode
    console.log(typeof texthtml)
    const html =  texthtml.toString();
    const showVisable =  ref(false)
    return {
      html,
      showVisable
    }
  }
}
</script>

<style>

</style>