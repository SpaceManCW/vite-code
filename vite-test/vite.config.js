import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 策略模式
const envResolver = {
  "build": () => {
    console.log("生产环境")
    return ({ ...viteBaseConfig, ...viteProdConfig })
  },
  "serve": () => {
    console.log("开发环境")
    return ({ ...viteBaseConfig, ...viteDevConfig })
  }
}

export default defineConfig(({ command, mode }) => {
  // command 是build还是serve取决于敲得命令
  // console.log('process',process.cwd())
  // 当前env文件所在的目录
  // 第二个参数不是必须使用process.cwd()  是env文件的路径
  const env = loadEnv(mode, process.cwd(), '')
  // console.log('env///',env);
  return envResolver[command]()
})