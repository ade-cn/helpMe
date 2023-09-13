import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 静态资源引用路径，默认为"/"
  base:"./",
  server: {
    port:3000,
    open:"/",
    host:true,
    proxy: {
      '/api': {
        target:'http://localhost',
        changeOrigin:true
      }
    }
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'src')
    }
  }

})
