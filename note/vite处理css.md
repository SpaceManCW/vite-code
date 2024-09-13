# 在vite中处理css

vite天生就支持对css文件的直接处理
1. vite在main.js中读取到了index.css
2. 直接使用fs模块去读取index.css文件中的内容
3. 创建一个style标签，将index.css的内容填充到style标签中
4. 将style标签插入到index.html的head中
5. 将css文件中的内容替换成js脚本（方便热更新和css模块化），同时设置Content-Type为js，从而让浏览器以js脚本的形式来执行css后缀的文件

当两个css用同一个类名的时候，前一个会被后一个覆盖，看 componentA 和 componentB 解决：

cssmodule就是解决这个问题:

1. module.css  module是一种约定，表示需要开启模块化
2. 会将你的所有类名进行一定规则的替换
3. 同时创建一个映射对象 { footer: "_footer_i22st_1" }
4. 将替换后的内容放到style标签里然后放到head标签中
5. 将module.css中的内容全部替换成css脚本
6. 将创建的映射对象在脚本中进行默认导出

# vite css配置（preprocessorOptions）

主要用来配置css预处理的一些全局参数

假设没有使用构建工具，我们又想去编译less文件

```r
yarn add less
```

只要安装了less就可以使用lessc去编译less文件

## sourceMap

文件之间的索引：

设置sourceMap会有索引文件，里面是编译后的文件和源文件的映射关系，帮助出错的时候定位错误代码的位置

vite天生对postcss有非常良好的支持：postcss是保证css在执行的时候是万无一失的
