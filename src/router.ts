import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue';

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Markdown from './components/Markdown.vue'
import HelloWorld from './components/HelloWorld.vue'



import intro from './markdown/intro.md'
import install from './markdown/install.md'
import started from './markdown/started.md'

import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";



const history  = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })

export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { 
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component:  md(intro) },
        { path: 'install', component:  md(install) },
        { path: 'started', component:  md(started) },
        { path: 'swicth', component:  SwitchDemo},
        { path: 'button', component: ButtonDemo}
      ]
    },
    { path: '/HelloWorld', component: HelloWorld}
  ]
})