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
import { css } from '@emotion/css';
import routes from '@/routes'
import './index.scss'
const linearGradientButton = css`
    &.ant-btn-primary:not([disabled]):not(.ant-btn-dangerous):not(.ant-btn-link) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253E1, #04BEFE);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ConfigProvider locale={zhCN} button={{
      className: linearGradientButton,
    }}>
      <App>
        <RouterProvider router={routes} />
      </App>
    </ConfigProvider>
  </StrictMode>
)
