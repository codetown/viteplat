import { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, MessageOutlined } from '@ant-design/icons'
import { Badge, Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { asideMenuConfig } from './menuConfig'
import AvatarDropdown from './components/AvatarDropdown'
import classes from './layout.module.scss'
import useGlobalStore from '@/stores/global'
// import NoticeDropdown from './components/NoticeDropdown'
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
    <Layout className={classes.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth={48} theme="light">
        <div className={classes.logo}>
          <span>
            <img src={logo} />
          </span>
          <strong>Web-Platform</strong>
        </div>
        <Menu
          className={classes.menu}
          mode="inline"
          theme="dark"
          openKeys={openKeys}
          onOpenChange={(keys: string[]) => {
            {
              setOpenKeys(keys.filter((_, index) => index == keys.length - 1))
              localStorage.setItem('openKeys', JSON.stringify(keys.filter((_, index) => index == keys.length - 1)))
            }
          }}
          defaultSelectedKeys={[myLocation.pathname]}
          selectedKeys={[myLocation.pathname == '/home' ? '/' : myLocation.pathname]}
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
            })
          )}
        />
        <div className={classes.siderBottom} style={{ justifyContent: collapsed ? 'center' : 'right' }}>
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
          <div className={classes.headerRight}>
            <Badge count={newMessageCount}>
              <MessageOutlined className={classes.messageIcon} />
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
