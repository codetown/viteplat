import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App, ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
// import type { Locale } from 'antd/es/locale';
// import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN'

/**解决antd时间组件国际化不彻底问题 Start**/
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
/**解决antd时间组件国际化不彻底问题 End**/

import routes from '@/routes'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <App>
        <RouterProvider router={routes} />
      </App>
    </ConfigProvider>
  </StrictMode>
)
