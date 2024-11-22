import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import classes from './workbench-layout.module.scss'
import { createElement } from 'react'
const { Header,Sider, Content } = Layout

const leftItems: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

export default function WorkbenchLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Header className={classes.header}>
        <div className={classes.logo} />
      </Header>
      <Layout className={classes.body}>
        <Sider collapsed={true} collapsedWidth={48} theme='dark'>
          <Menu
            tehme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={leftItems}
          />
        </Sider>
        <Layout style={{ padding:0,height: '100%' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              height: '100%',
              overflowY: 'auto',
              background: colorBgContainer
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
