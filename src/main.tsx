import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App, ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import routes from '@/routes'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ConfigProvider>
      <App>
        <RouterProvider router={routes} />
      </App>
    </ConfigProvider>
  </StrictMode>
)
