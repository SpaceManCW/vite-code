import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  envPrefix: 'ENV_', // 配置vite注入客户端环境变量校验的env前缀
})