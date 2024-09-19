import { defineConfig } from 'vite'

const postcssPresetEnv = require('postcss-preset-env')

export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: 'ENV_', // 配置vite注入客户端环境变量校验的env前缀
  css: {
    preprocessorOptions: { // key + config
      less: { // 整个的配置对象都会最终给到less的执行参数中  就是在编译less的时候  加一下处理
        math: 'always', // 只有有括号的时候才认为是表达式
        globalVars: {
          // 声明全局的css变量 解决使用variables.less 定义全局变量需要频繁导入的问题
          mainColor: "red"
        }
      }
    },
    devSourcemap: true, // 开启sourcemap
    postcss: {
      // vite 的诞生一定会让postcss火一次
      plugins: [postcssPresetEnv(/* pluginOptions */)]
    }
  }
})  