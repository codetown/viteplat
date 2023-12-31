// src/router/index.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import lazyLoad from './lazyLoad'

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyLoad(lazy(() => import('@/layouts/MainLayout'))),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(lazy(() => import('@/pages/home')))
      },
      {
        path: 'form',
        element: lazyLoad(lazy(() => import('@/pages/form')))
      },
      {
        path: 'form-list',
        element: lazyLoad(lazy(() => import('@/pages/form-list')))
      },
      {
        path: 'list',
        element: lazyLoad(lazy(() => import('@/pages/list')))
      },
      {
        path: 'success',
        element: lazyLoad(lazy(() => import('@/pages/success')))
      },
      {
        path: 'upload-advance',
        element: lazyLoad(lazy(() => import('@/pages/upload-advance')))
      }
    ]
  },
  {
    path: 'login',
    element: lazyLoad(lazy(() => import('@/pages/login')))
  },
  {
    path: '*',
    element: lazyLoad(lazy(() => import('@/pages/error/404')))
  }
]

export default createBrowserRouter(routes, {
  basename: '/'
})

//   <Route path="/login" element={lazyLoad(() => import('@/pages/login/'))}></Route>
//   <Route path="/" element={<Layout />}>
//     {/* 重定向首页为Home页 */}
//     <Route path="" element={lazyLoad(() => import('@/pages/home'))} />
//     <Route path="home" element={lazyLoad(() => import('@/pages/home'))} index />
//     {/* {routeConfig?.route?.routes?.map((item: any, index: number) => (
//   <Route
//     key={`route-${index + 1}`}
//     path={item?.path}
//     element={lazyLoad(() => item?.component)}
//   />
// ))} */}

//     {/* <Route
//     path="home/second"
//     element={lazyLoad(() => import("../pages/Home/HomeSecond"))}
//   />

//   <Route
//     path="course"
//     element={lazyLoad(() => import("../pages/Course/Course"))}
//   />
//   <Route path="*" element={<NotFound />} /> */}
//     {/* <Route
//   path="home/second"
//   element={lazyLoad(() => import('../pages/Home/HomeSecond'))}
// />

// <Route
//   path="course"
//   element={lazyLoad(() => import('../pages/Course/Course'))}
// /> */}
//     {/* <Route
//     path="list"
//     element={lazyLoad(() => import("./pages/list/"))}
// />
// <Route
//     path="form"
//     element={lazyLoad(() => import("./pages/form/"))}
// />
// <Route
//     path="form-list"
//     element={lazyLoad(() => import("./pages/form-list/"))}
// />
// <Route
//     path="success"
//     element={lazyLoad(() => import("./pages/success/"))}
// /> */}
//     {routes.map(
//       (route, index) =>
//         route.component && (
//           <Route
//             key={`route-key-${index + 1}`}
//             path={route.path}
//             element={lazyLoad(() => import(`./pages${route.component}`))}
//           />
//         )
//     )}
//     <Route path="*" element={<NotFound />} />
//   </Route>
// </Routes>
