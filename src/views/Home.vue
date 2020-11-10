<template>
  <div>
    <div class="topnavAndBanner">
      <div class="topNav">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <a class="menufile">文档</a>
      </div>
      <div class="banner">
        <h1>Xiaoy-Template</h1>
        <h2>基于vue3的学习框架</h2>
        <div class="actions">
          <a href="javascript:;">GitHub</a>
          <a href="javascript:;">开始</a>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="item">
        <div class="itemGrid">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h2>基于 Vue 3</h2>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </div>
      <div class="item">
        <div class="itemGrid">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h2>基于 TypeScript</h2>
          <p>源代码采用 TypeScript 书写</p>
        </div>
      </div>
      <div class="item">
        <div class="itemGrid">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dengpao"></use>
          </svg>
          <h2>代码易读</h2>
          <p>每个组件的源代码都极其简洁</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: linear-gradient(145deg, #e3fffd 0, #e9b7b7 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.topNav {
  padding: 16px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .menufile {
    color: #007974;
    font-size: 20px;
    text-decoration: none;
  }
  .icon {
    width: 3em;
    height: 3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #005a56;
  h1,
  h2 {
    font-weight: 400;
    margin: 4px 0;
  }
  .actions {
    padding: 8px 0;
    a {
      padding: 8px 24px;
      margin: 0 8px;
      background: #02bcb0;
      border-radius: 4px;
      display: inline-block;
      text-decoration: none;
      color: #fff;
    }
  }
}
.features {
  width: 1200px;
  margin: 64px auto;
  padding: 0 16px;
  display: flex;
  .item {
    flex: 1;
  }
  .itemGrid {
    margin: 16px 0;
    display: grid;
    justify-content: start;
    align-content: space-between;
    grid-template-areas:
      "icon title"
      "icon text";
    grid-template-columns: 80px auto;
    grid-template-rows: 1fr auto;
    svg {
      grid-area: icon;
      width: 64px;
      height: 64px;
    }
    h3 {
      grid-area: title;
      font-size: 28px;
    }
    p {
      grid-area: text;
    }
  }
}
</style>