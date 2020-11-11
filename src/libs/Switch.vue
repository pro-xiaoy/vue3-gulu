<template>
  <button class="hy-switch" @click="toggle" :class="{'hy-checked':value}">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref, SetupContext } from "vue";
declare const props: {value: boolean}
declare const context: SetupContext
export default {
  props: {
    value: Boolean
  }
}
export const toggle = () => {
  context.emit("update:value", !props.value)
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .hy-switch {
    height: $h; 
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: #fff;
      border-radius: $h2/2;
      transition: all 0.25s;
    }
    &.hy-checked {
      background: #1890ff;
      >span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &:focus {
      outline: none;
    }
    &:active {
      > span {
        width: $h2 + 4px;
      }
    }
    &.hy-checked:active {
      > span { width: $h2 + 4px; margin-left: -4px; }
    }
  }

</style>