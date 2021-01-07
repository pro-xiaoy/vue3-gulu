<template>
  <div>
    <h4>一件打开dialog</h4>
    <div>
      <Button @click="showdialog">一键开启dialog</Button>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import { Button, openDialog } from "../libs/index";
export default {
  components: {
    Button,
  },
  setup() {
    const showdialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showdialog,
    };
  },
};
</script>  