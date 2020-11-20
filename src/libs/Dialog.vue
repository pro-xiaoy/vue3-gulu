<template>
  <template>
    <Teleport to="body">
      <div class="hy-dialog-overlay" ></div>
      <div class="hy-dialog-wrapper">
        <div class="hy-dialog">
          <header>
            <slot name="title" />
            <span class="hy-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main">OK</Button>
            <Button>Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import { Button } from "./Button";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.hy-dialog{
  
}

</style>