import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './global.scss'
export const routerConfig = [
  // {
  //   path: '/Index',
  //   // exact: true,
  //   component: Index
  // },
  // {
  //   path: '/about',
  //   component: About
  // },
  // {
  //   path: '/my',
  //   component: My
  // }
]

function App() {

  return (
    <Routes>
      <Route path='/'></Route>
    </Routes>
  )
}

export default App
