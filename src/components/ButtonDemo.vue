<template>
  <Button>你好</Button>
  <Button type="link">你好</Button>
  <Button type="text">你好</Button>

  <Button size="big">大大大</Button>
  <Button size="normal">中中中</Button>
  <Button size="small">小小小</Button>

    <Button level="main">主要文字按钮</Button>
    <Button>普通文字按钮</Button>
    <Button level="danger" type="link">危险文字按钮</Button>
</template>

<script>
import { Button } from "../libs";
export default {
  components: {
    Button,
  },
};
</script>

<style>
</style>