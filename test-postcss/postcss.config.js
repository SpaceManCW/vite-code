// 添加预设  相当于配置 postcss的功能
// 预设环境里面是会包含很多的插件
// 预发降级 ---> post-low-level
// 编译插件 ---> postcss-compiler

const postcssPresetEnv = require('postcss-preset-env')

// 预设就是帮助你一次性把必要的插件都安装
// 做语法的编译
module.exports = {
  plugins: [postcssPresetEnv()]
}