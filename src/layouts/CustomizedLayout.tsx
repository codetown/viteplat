import React, { useState } from 'react'
import styles from './layout.module.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import AvatarDropdown from './comments/AvatarDropdown'
import { asideMenuConfig } from './menuConfig'

const { Header, Sider, Content } = Layout
// const loopMenuItem=(routes)=>{

// }
const SelfLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  console.info(asideMenuConfig)
  return (
    <div className={styles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        className={styles.leftMenu}
      >
        <div className="logo">
          <span>
            <img src="/vite.svg" />
          </span>
          <strong>VitePlat</strong>
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{ borderInlineEnd: 'none' }}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
          //items={asideMenuConfig.map((item,index)=>({key:item.name,icon:item.icon,label:item.path} as ItemType))}
        />
      </Sider>
      <div className={styles.rightContent}>
        <Header
          style={{
            padding: 16,
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 12,
            marginBottom: 24
          }}
        >
          <span
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginRight: 'auto', cursor: 'pointer' }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
          <AvatarDropdown name="小狗" avatar="/vite.svg" />
        </Header>
        <Content
          style={{
            margin: 0,
            padding: 24,
            minHeight: 280,
            height: 'calc(100vh - 136px)',
            // background: colorBgContainer,
            background: '#fff',
            overflowX: 'hidden',
            overflowY: 'auto',
            borderRadius: 12
          }}
        >
          <Outlet />
        </Content>
      </div>
    </div>
  )
}

export default SelfLayout
