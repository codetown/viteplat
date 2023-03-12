// import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@/': `${resolve(process.cwd(), 'src')}/`,
  //   },
  // },
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 别名配置后，在tsconfig中也需要配置相应的别名
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // 默认值，这些文件引入时不需要写后缀
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/varible.scss";',
      },
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
