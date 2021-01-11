// // import resolve from 'rollup-plugin-node-resolve';
// import esbuild from 'rollup-plugin-esbuild';
// import vuePlugin from 'rollup-plugin-vue'
// import scss from 'rollup-plugin-scss'
// import dartSass from 'sass';

// export default {
//   input: 'src/libs/index.ts',
//   plugins: [
//     scss({ include: /\.scss$/, sass: dartSass }),
//     vuePlugin({
//       include: /\.vue$/,
//     }),

//     esbuild({
//       target: 'es2015',
//       include: /\.[jt]s?$/,
//       minify: process.env.NODEcls_ENV === 'production',
//     }),
   
//   ],
//   output: {
//     file: 'bundle.js',
//     format: 'cjs'
//   }
// };

// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  // output: [{
  //   globals: {
  //     vue: 'Vue'
  //   },
  //   name: 'Gulu',
  //   file: 'dist/lib/gulu.js',
  //   format: 'umd',
  //   plugins: [terser()]
  // }, {
  //   name: 'Gulu',
  //   file: 'dist/lib/gulu.esm.js',
  //   format: 'es',
  //   plugins: [terser()]
  // }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}