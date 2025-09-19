import { useEffect, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, MessageOutlined } from '@ant-design/icons'
import { Badge, Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { asideMenuConfig } from './menuConfig'
import AvatarDropdown from './components/AvatarDropdown'
import classes from './auth-layout.module.scss'
import useGlobalStore from '@/stores/global'
// import NoticeDropdown from './components/NoticeDropdown'
import logo from '@/assets/logo2.png'
import avatar from '@/assets/logo1.png'

const { Header, Sider, Content } = Layout

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>(JSON.parse(localStorage.getItem('openKeys') || '[]'))
  const { pathname } = useLocation()
  const { newMessageCount, currentUser, breadData, menuData, setGlobalState } = useGlobalStore((state: any) => state)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  useEffect(() => {
    if (menuData.length === 0) {
      const temp = asideMenuConfig.map((item, index) => ({
        key: item.path || `menu-item-${index + 1}`,
        icon: item.icon,
        children:
          item?.children?.map((child) => ({
            key: child.path,
            label: <Link to={child.path || '/'}>{child.name}</Link>
          })) || undefined,
        label:
          item.children && item.children.length > 0 ? item.name : <Link to={item.path || '/'}>{item.name}</Link>
      }))
      setGlobalState({ menuData: temp })
    }
  }, [])
  useEffect(() => {
    const temp: any[] = [{ title: '首页' }]
    const newPath=`${pathname}`
    if(newPath!==''&&newPath!=='/'&&newPath!=='home'){
      asideMenuConfig.forEach((item) => {
        if (item.path == pathname) {
          temp.push({ title: item.name })
        }
        item?.children?.forEach((child) => {
          const mainPath = `${pathname}/`;
          if (child.path && mainPath.indexOf(`${child.path}/`) != -1) {
            temp.push({ title: item.name })
            temp.push({ title: child.name })
            if (child.path != pathname) {
              temp[temp.length - 1].href = child.path
              temp.push({ title: `${child.name}详情` })
            }
          }
        })
      })
      setGlobalState({ breadData: temp })
    }
  }, [pathname])
  return (
    <Layout className={classes.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth={48} theme="light">
        <a className={classes.logo}>
          <span>
            <img src={logo} />
          </span>
          <strong>Web-Platform</strong>
        </a>
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
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          items={menuData}
        />
        <div className={classes.siderBottom} style={{ justifyContent: collapsed ? 'center' : 'right' }} onClick={() => { setCollapsed(!collapsed) }}>
          {collapsed ? (
            <>
              {/* <span onClick={() => setCollapsed(!collapsed)}>展开</span> */}
              <span title="展开">
                <MenuUnfoldOutlined />
              </span>
            </>
          ) : (
            <>
              <span className='collaseText'>收起</span>
              <span>
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
        <Content className={classes.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
