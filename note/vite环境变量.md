# vite环境变量配置

> 环境变量：会根据当前的代码环境产生变化的变量

代码环境：
1. 开发环境
2. 生产环境
3. 预发环境
4. 测试环境

vite中的环境变量的处理：

vite内置了dotenv这个第三方库，在执行dev或者build命令的时候会自动去读取.env，并解析环境变量，将其注入到process对象下
但是vite考虑到和其他配置的一些冲突问题，他不会直接注入到process对象下
涉及到vite.config.js中的一些配置：
- root
- envDir: 用来配置当前环境变量的文件地址（默认 .env）

vite提供了补偿措施: 可以调用vite的loadEnv来手动确认env文件

process.cwd方法：返回当前node进程的工作目录

.env: 所有环境都用到的环境变量
.env.development: 开发环境需要用到的环境变量（默认情况在vite将开发环境取名development）
.env.production: 生产环境需要用到的环境变量（默认情况在vite将生产环境取名development）

yarn dev --mode development  会将mode设置为development传递进来

调用loadenv时，他会做如下几件事情：
1. 直接找到.env文件，并解析其中的环境变量，并放进一个对象中
2. 会将传进来的mode这个变量做拼接： .env.development，并根据我们提供的目录去取对应的配置文件进行解析，并放进一个对象
3. 可以理解为：
  ```js
    const baseEnvConfig = 读取的.env的配置
    const modeEnvConfig = 读取env相关配置
    const lastEnvConfig = { ...baseEnvConfig, ...modeEnvConfig }
  ```

如果是客户端，vite会将对应的环境变量注入到import.meat.env中去