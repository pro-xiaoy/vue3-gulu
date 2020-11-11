<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <button >隐藏代码</button>
      <button>查看代码</button>
    </div>
    <div class="demo-code">
      <pre v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    component: Object
  },
  setup(porps) {
    // const html = 
    const html = `111`;
    return {
      html
    }
  }
}
</script>

<style>

</style>