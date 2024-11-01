import { useEffect, useState } from 'react'
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
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb'

const { Header, Sider, Content } = Layout

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>(JSON.parse(localStorage.getItem('openKeys') || '[]'))
  const myLocation = useLocation()
  console.info(myLocation.pathname, asideMenuConfig)
  const breadData: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] = [{ title: '首页' }]
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
          selectedKeys={[myLocation.pathname]}
          items={asideMenuConfig.map((item, index) =>{
            if(item.path==myLocation.pathname){
              breadData.push({ title: item.name })
            }
            return ({
            key: item.path || `menu-item-${index + 1}`,
            icon: item.icon,
            children:
              item?.children?.map((child) => {
                if (child.path && myLocation.pathname.indexOf(child.path) != -1) {
                  breadData.push({ title: item.name })
                  breadData.push({ title: child.name })
                  if (child.path != myLocation.pathname) {
                    breadData[breadData.length - 1].href = child.path
                    breadData.push({ title: `${child.name}详情` })
                  }
                }
                return {
                  key: child.path,
                  label: <Link to={child.path || '/'}>{child.name}</Link>
                }
              }) || undefined,
            label:
              item.children && item.children.length > 0 ? item.name : <Link to={item.path || '/'}>{item.name}</Link>
          })})}
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
          <Breadcrumb items={breadData} />
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
