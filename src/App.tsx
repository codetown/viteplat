import './App.css'
import { lazy, createElement, Suspense, ComponentType } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
// import NotFound from "../pages/NotFound/NotFound";
import ProLayout from './layouts/ProLayout'
import IceLayout from './layouts/IceLayout'
import AntdLayout from './layouts/AntdLayout'
import SelfLayout from './layouts/SelfLayout'
import routeConfig from '@/config/routes'
// 这是正常懒加载写法 在引入时需要用<Suspense><Home/></Suspense>
// const Home = lazy(() => import("../pages/Home/Home"));
// const Course = lazy(() => import("../pages/Course/Course"));
// 封装懒加载组件 lazy与Suspense配合使用
const lazyElement = (
  element: () => Promise<{ default: ComponentType<any> }>
) => <Suspense fallback={<Spin />}>{createElement(lazy(element))}</Suspense>

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={lazyElement(() => import('./pages/login/'))}
      ></Route>
      <Route path="/" element={<SelfLayout />}>
        {/* 重定向首页为Home页 */}
        <Route path="" element={lazyElement(() => import('./pages/home'))} />
        <Route
          path="home"
          element={lazyElement(() => import('./pages/home'))}
          index
        />
        {routeConfig.route.routes?.map((item: any, index: number) => (
          <Route
            key={`route-${index + 1}`}
            path={item?.path}
            element={lazyElement(() => item?.component)}
          />
        ))}

        {/* <Route
            path="home/second"
            element={lazyElement(() => import("../pages/Home/HomeSecond"))}
          />

          <Route
            path="course"
            element={lazyElement(() => import("../pages/Course/Course"))}
          />
          <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default App
