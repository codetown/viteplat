import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#3366ff',
        }
        // ,
        // components: {
        //   Button: {
        //     background: 'linear-gradient(90deg,#1395fe 4.83%,#1e72ff 94.74%)'
        //   },
        // }
      }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
