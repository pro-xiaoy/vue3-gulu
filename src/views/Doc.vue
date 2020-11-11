<template>
  <div class="layout">
    <div class="content">
      <aside>
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/started">使用</router-link>
          </li>
        </ol>
        <h2>组建列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swicth">switch组建</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .content {
    flex-grow: 1;
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-shrink: 1;
  }
  ol,ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }
}
aside {
  background: lightblue;

  width: 150px;
  padding: 16px 0;
  box-sizing: border-box;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: auto;
  padding-top: 50px;
  padding-left: 40px;
  box-sizing: border-box;
}
</style>