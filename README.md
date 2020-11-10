# vue3-x template
### 初学vue3-x
## Tips

安装sass启动的时候一直会报这个错误
```
Make sure your "dependencies" only include packages that
```
需要把**dependencies**内容迁移到**devDependencies**
```
  "dependencies": {
    "vue": "^3.0.2",
    "vue-router": "^4.0.0-rc.2"
  },
  "devDependencies": {
    "sass-loader": "^10.0.5",
    "sass": "^1.29.0",
    "@vue/compiler-sfc": "^3.0.2",
    "vite": "^1.0.0-rc.8"
  }
```
### 参考
https://frankfang.gitee.io/gulu-ui-website-1/#/

