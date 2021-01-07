<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="hy-dialog-overlay" ></div>
      <div class="hy-dialog-wrapper">
        <div class="hy-dialog">
          <header>
            <slot name="title" />
            <span @click="toggle" class="hy-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="onClickOk">OK</Button>
            <Button @click="onClickCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import { Button } from "./index";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, content) {
    console.log('props+++++', props, content)
    const toggle = () => {
      closePop()
    }
    const onClickOk = () => {
      console.log('props+++', props)
    }
    const onClickCancel = () => {

    }
    const closePop = () => {
      content.emit('update:visible',false)
    }

    return {
      toggle,
      onClickOk,
      onClickCancel
    }
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.hy-dialog{
  background: #fff;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out($color: #000000, $amount: 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out($color: black, $amount: .5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right; 
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before, &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
     &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

}

</style>