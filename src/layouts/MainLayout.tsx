import { SetStateAction, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, MessageOutlined } from '@ant-design/icons'
import { Badge, Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { asideMenuConfig } from './menuConfig'
import AvatarDropdown from './comments/AvatarDropdown'
import styles from './layout.module.scss'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import useGlobalStore from '@/stores/global'
// import NoticeDropdown from './comments/NoticeDropdown'
import logo from '@/assets/logo2.png'
import avatar from '@/assets/logo1.png'

const { Header, Sider, Content } = Layout

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>(JSON.parse(localStorage.getItem('openKeys') || '[]'))
  const myLocation = useLocation()
  const { newMessageCount, currentUser } = useGlobalStore((state: any) => ({
    newMessageCount: state.newMessageCount,
    currentUser: state.currentUser
  }))
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth={56} theme="light">
        <div className={styles.logo}>
          <span>
            <img src={logo} />
          </span>
          <strong>Web-Platform</strong>
        </div>
        <Menu
          className={styles.menu}
          mode="inline"
          theme="dark"
          openKeys={openKeys}
          onOpenChange={(keys: SetStateAction<string[]>) => {
            {
              setOpenKeys(keys)
              localStorage.setItem('openKeys', JSON.stringify(keys))
            }
          }}
          defaultSelectedKeys={[myLocation.pathname]}
          selectedKeys={[myLocation.pathname=='/home'?'/':myLocation.pathname]}
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
          {collapsed ? (
            <>
              {/* <span onClick={() => setCollapsed(!collapsed)}>展开</span> */}
              <span onClick={() => setCollapsed(!collapsed)} title="展开">
                <MenuUnfoldOutlined />
              </span>
            </>
          ) : (
            <>
              <span onClick={() => setCollapsed(!collapsed)}>收起</span>
              <span onClick={() => setCollapsed(!collapsed)}>
                <MenuFoldOutlined />
              </span>
            </>
          )}
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
            <Badge count={newMessageCount}>
              <MessageOutlined className={styles.messageIcon} />
            </Badge>
            {/* <NoticeDropdown /> */}
            <AvatarDropdown name={currentUser?.username} avatar={avatar} />
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
