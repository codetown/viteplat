import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  build: {
    sourcemap: false
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(process.cwd(), 'src')}/`
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] // 默认值，这些文件引入时不需要写后缀
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
        @use "@/assets/scss/variables.scss";
        $primary-color:#1DA57A;
        $link-color:#1DA57A;
        $border-radius-base:2px;
        `
      }
    },
    modules: {
      // 是对css模块化的默认行为进行覆盖
      localsConvention: 'camelCase', // 修改生成的配置对象的key的展示形式
      //(驼峰还是中划线形式)
      scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化
      // (有hash就是开启了模块化的一个标志
      // 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
      generateScopedName: '[name]_[local]_[hash:5]'
    }
  },
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api/',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true
      }
    }
  }
})
