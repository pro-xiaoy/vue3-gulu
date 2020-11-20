<template>
  <button class="hy-button" :class="classes">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const { type, size, level } = props;
    const classes = computed(() => {
      return {
        [`hy-type-${type}`]: type,
        [`hy-size-${size}`]: size,
        [`hy-level-${level}`]: level,
      };
    });
    console.log("111+++", classes);
    return {
      classes,
    };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.hy-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: #fff;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.hy-type-link {
    border-color: transparent;
    color: $blue;
    box-shadow: none;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.hy-type-text {
    border-color: transparent;
    color: $color;
    box-shadow: none;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.hy-size-big {
    height: 1.5 * $h;
    font-size: 24px;
    padding: 0 16px;
  }
  &.hy-size-small {
    height: 0.6 * $h;
    font-size: 12px;
    padding: 0 4px;
  }
  &.hy-level-danger {
    color: $red;
    &:hover,
    &:focus {
      color: $red;
    }
  }
}
</style>