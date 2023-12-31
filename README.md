# React + TypeScript + Vite + Zustand搭建通用后台管理系统

这个模板提供了一个最小的设置，让 React 在 Vite 中使用 HMR 和一些 ESLint 规则工作。

## 安装依赖

```bash
pnpm install antd axios react-router-dom zustand
```

## 项目目录规划

```bash
# 布局，页面，组件，接口，路由，状态管理
mkdir layouts pages components services routers scores
```

## 扩展 ESLint 配置

如果您正在开发生产应用程序，我们建议更新配置以启用类型感知 lint 规则：

eslintrc.cjs 文件

代码格式化校验的配置项，为了使代码编写的更加规范。

```bash
pnpm create @eslint/config
```

```diff
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
+       "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
+       "prettier"
    ],
    "rules": {
+       "prettier/prettier": "error",
+       "arrow-body-style": "off",
+       "prefer-arrow-callback": "off"
    }
}
```

## prettierrc.cjs

```bash
pnpm add prettier eslint-config-prettier eslint-plugin-prettier sass -D
```

```js
module.exports = {  
    printWidth: 120,  
    tabWidth: 2,  
    useTabs: false,  
    semi: false,  
    singleQuote: true,  
    jsxSingleQuote: false,  
    jsxBracketSameLine: true,  
    trailingComma: 'none',  
    bracketSpacing: true  
}
```

## tsconfig.json

项目的ts配置文件，针对src下面的所有ts文件生效

## vite.config.ts

vite构建工具的配置项，在这里可以使用一些第三方插件，做一些项目的配置。

## 配置支持scss

```js
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/varible.scss";',
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        }
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
  }
```

## 整理路由配置

1. 去掉App.tsx，App.css，index.css 文件

2. 路由文件定义，在routers目录下新增index.tsx文件

3. 添加lazyload

```tsx
// src/router/lazyLoad.tsx文件
// import PageLoading from '@/layouts/PageLoading'
// import { Suspense } from 'react'

// export default function lazyLoad(Component: React.LazyExoticComponent<() => JSX.Element>) {
//   return (
//     <Suspense fallback={<PageLoading />}>
//       <Component />
//     </Suspense>
//   )
// }
```

```tsx
// src/router/index.tsx文件
// import { createBrowserRouter, Navigate } from 'react-router-dom'
// import type { RouteObject } from 'react-router-dom'
// import { lazy } from 'react'
// import lazyLoad from './lazyLoad'

// const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: lazyLoad(lazy(() = import('@/layouts/MainLayout'))),
//     children: [
//       {
//         index: true,
//         element: <Navigate to="/home" replace />
//       },
//       {
//         path: 'home',
//         element: lazyLoad(lazy(() = import('@/pages/home')))
//       },
//                 .
//                 .
//                 .
//       {
//         path: '*',
//         element: lazyload(lazy(() = import('@/pages/error/404')))
//       }
//     ]
//   }
// ]

// export default createBrowserRouter(routes, {
//   basename: '/'
// })
```

## 通过路由和后台权限生成左侧菜单

## 使用zustand管理数据状态示例

## 主题配置和scss变量定义的使用
