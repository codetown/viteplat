import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { asideMenuConfig } from './menuConfig'
import AvatarDropdown from './comments/AvatarDropdown'
import styles from './layout.module.scss'
import { ItemType } from 'antd/es/menu/hooks/useItems'
const { Header, Sider, Content } = Layout
// const loopMenuItem=(routes)=>{

// }
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>(JSON.parse(localStorage.getItem('openKeys') || '[]'))
  const myLocation = useLocation()
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className={styles.logo}>
          <span>
            <img src="/vite.svg" />
          </span>
          <strong>VitePlat</strong>
        </div>
        <Menu
          className={styles.menu}
          mode="inline"
          theme="dark"
          openKeys={openKeys}
          onOpenChange={(keys) => {
            {
              setOpenKeys(keys)
              localStorage.setItem('openKeys', JSON.stringify(keys))
            }
          }}
          defaultSelectedKeys={[myLocation.pathname]}
          selectedKeys={[myLocation.pathname]}
          items={asideMenuConfig.map(
            (item, index) =>
              ({
                key: item.path || `menu-item-${index + 1}`,
                icon: item.icon,
                children:
                  item?.children?.map((child) => ({
                    key: child.path,
                    label: <Link to={child.path || '/'}>{child.name}</Link>
                  })) || undefined,
                label:
                  item.children && item.children.length > 0 ? item.name : <Link to={item.path || '/'}>{item.name}</Link>
              }) as ItemType
          )}
        />
        <div className={styles.siderBottom} style={{ justifyContent: collapsed ? 'center' : 'right' }}>
          <span className={styles.trigger} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 16,
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center'
          }}>
          <Breadcrumb items={[{ title: '首页' }, { title: '用户' }, { title: '列表' }]} />
          <div className={styles.headerRight}>
            <AvatarDropdown name="小狗" avatar="/vite.svg" />
          </div>
        </Header>
        <Content
          style={{
            margin: '16px 0 16px 16px',
            paddingRight: 16,
            minHeight: 280,
            overflowX: 'hidden',
            overflowY: 'auto'
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
