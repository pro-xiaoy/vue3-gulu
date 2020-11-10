// 声明vue文件
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
// 声明md文件
declare module '*.md' {
  const str: string
  export default str
}