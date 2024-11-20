import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import classes from './app-layout.module.scss'
import { createElement } from 'react'
const { Header,Sider, Content } = Layout

// const topItems: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `模块名 ${key}`
// }))

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

    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`
    //   }
    // })
  }
})

export default function appLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Header className={classes.header}>
        <div className={classes.logo} />
        {/* <Menu
          style={{ flex: 1 }}
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={topItems}
        /> */}
      </Header>
      <Layout>
        <Sider trigger={null} collapsedWidth={56} collapsed={true}>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={leftItems}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
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
