import { lazy, createElement, Suspense, ComponentType } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { Spin } from 'antd'
// import NotFound from "../pages/NotFound/NotFound";
import Layout from './layouts/Layout'
import NotFound from './pages/error/404'
import routes from '../config/routes'
import './App.css'
import PageLoading from '@/layouts/PageLoading'
// 这是正常懒加载写法 在引入时需要用<Suspense><Home/></Suspense>
// const Home = lazy(() => import("../pages/Home/Home"));
// const Course = lazy(() => import("../pages/Course/Course"));
// 封装懒加载组件 lazy与Suspense配合使用
const lazyLoad = (element: () => Promise<{ default: ComponentType<any> }>) => (
  <Suspense fallback={<PageLoading />}>{createElement(lazy(element))}</Suspense>
)

function App() {
  return (
    <Routes>
      <Route path="/login" element={lazyLoad(() => import('./pages/login/'))}></Route>
      <Route path="/" element={<Layout />}>
        {/* 重定向首页为Home页 */}
        <Route path="" element={lazyLoad(() => import('./pages/home'))} />
        <Route path="home" element={lazyLoad(() => import('./pages/home'))} index />
        {/* {routeConfig?.route?.routes?.map((item: any, index: number) => (
          <Route
            key={`route-${index + 1}`}
            path={item?.path}
            element={lazyLoad(() => item?.component)}
          />
        ))} */}

        {/* <Route
            path="home/second"
            element={lazyLoad(() => import("../pages/Home/HomeSecond"))}
          />

          <Route
            path="course"
            element={lazyLoad(() => import("../pages/Course/Course"))}
          />
          <Route path="*" element={<NotFound />} /> */}
        {/* <Route
          path="home/second"
          element={lazyLoad(() => import('../pages/Home/HomeSecond'))}
        />

        <Route
          path="course"
          element={lazyLoad(() => import('../pages/Course/Course'))}
        /> */}
        {/* <Route
            path="list"
            element={lazyLoad(() => import("./pages/list/"))}
        />
        <Route
            path="form"
            element={lazyLoad(() => import("./pages/form/"))}
        />
        <Route
            path="form-list"
            element={lazyLoad(() => import("./pages/form-list/"))}
        />
        <Route
            path="success"
            element={lazyLoad(() => import("./pages/success/"))}
        /> */}
        {routes.map(
          (route, index) =>
            route.component && (
              <Route
                key={`route-key-${index + 1}`}
                path={route.path}
                element={lazyLoad(() => import(`./pages${route.component}`))}
              />
            )
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
