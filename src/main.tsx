import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App, ConfigProvider, theme } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { createStyles } from 'antd-style';
import routes from '@/routes'
import './index.scss'
// import type { Locale } from 'antd/es/locale';
// import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN'

/**解决antd时间组件国际化不彻底问题 Start**/
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
/**解决antd时间组件国际化不彻底问题 End**/

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
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
  `,
}));

const MyAntDesignApp = () => {
  const { styles } = useStyle();
  return (<ConfigProvider
    locale={zhCN} 
    theme={{ 
      // algorithm: theme.darkAlgorithm
      token:{
        controlHeight:36,
      }
    }} 
    button={{
    className: styles.linearGradientButton,
  }}>
    <App>
      <RouterProvider router={routes} />
    </App>
  </ConfigProvider>)
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MyAntDesignApp />
  </StrictMode>
)
