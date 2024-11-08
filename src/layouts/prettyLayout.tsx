
import { 
  // Breadcrumb,
  // , Menu, theme,
   Layout
} from 'antd'

// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
// import { Link, Outlet, useLocation } from 'react-router-dom'
// import { asideMenuConfig } from './menuConfig'
// import AvatarDropdown from './components/AvatarDropdown'
// import classes from './pretty-layout.module.scss'

const { Header, Sider, Content } = Layout
// const loopMenuItem=(routes)=>{
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    marginBottom: 16,
    borderRadius: 8,
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
    borderRadius: 8,
    height:'calc(100vh - 112px)'
  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    marginRight:16,
    borderRadius: 8,
    height:'calc(100vh - 112px)'
  };
  
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    padding:16
  };
// }
const PrettyLayout = () => {
  // const [collapsed, setCollapsed] = useState(false)
  // const [openKeys, setOpenKeys] = useState<string[]>(JSON.parse(localStorage.getItem('openKeys') || '[]'))
  // const myLocation = useLocation()
  // const {
  //   token: { colorBgContainer }
  // } = theme.useToken()
  return (
    // <Layout className={classes.layout}>
    //   <Header
    //     style={{
    //       padding: 16,
    //       background: colorBgContainer,
    //       display: 'flex',
    //       alignItems: 'center',
    //       marginBottom: 16
    //     }}>
    //     <div className={classes.logo}>
    //       <span>
    //         <img src="/vite.svg" />
    //       </span>
    //       <strong>VitePlat</strong>
    //     </div>
    //     <Breadcrumb items={[{ title: '首页' }, { title: '用户' }, { title: '列表' }]} />
    //     <div className={classes.headerRight}>
    //       <AvatarDropdown name="小狗" avatar="/vite.svg" />
    //     </div>
    //   </Header>
    //   <Layout>
    //     <Sider trigger={null} collapsible collapsed={collapsed}>
    //       <Menu
    //         className={classes.menu}
    //         mode="inline"
    //         theme="dark"
    //         openKeys={openKeys}
    //         onOpenChange={(keys: React.SetStateAction<string[]>) => {
    //           {
    //             setOpenKeys(keys)
    //             localStorage.setItem('openKeys', JSON.stringify(keys))
    //           }
    //         }}
    //         defaultSelectedKeys={[myLocation.pathname]}
    //         selectedKeys={[myLocation.pathname]}
    //         items={asideMenuConfig.map((item, index) => ({
    //           key: item.path || `menu-item-${index + 1}`,
    //           icon: item.icon,
    //           children:
    //             item?.children?.map((child) => ({
    //               key: child.path,
    //               label: <Link to={child.path || '/'}>{child.name}</Link>
    //             })) || undefined,
    //           label:
    //             item.children && item.children.length > 0 ? item.name : <Link to={item.path || '/'}>{item.name}</Link>
    //         }))}
    //       />
    //       <div className={classes.siderBottom} style={{ justifyContent: collapsed ? 'center' : 'right' }}>
    //         <span className={classes.trigger} onClick={() => setCollapsed(!collapsed)}>
    //           {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         </span>
    //       </div>
    //     </Sider>
    //     <Content
    //       style={{
    //         margin: '16px 0 16px 16px',
    //         paddingRight: 16,
    //         minHeight: 280,
    //         overflowX: 'hidden',
    //         overflowY: 'auto'
    //       }}>
    //       <Outlet />
    //     </Content>
    //   </Layout>
    // </Layout>
    <Layout style={layoutStyle}>
    <Header style={headerStyle}>Header</Header>
    <Layout>
      <Sider width="256" style={siderStyle}>
        Sider
      </Sider>
      <Content style={contentStyle}>Content</Content>
    </Layout>
    {/* <Footer style={footerStyle}>Footer</Footer> */}
  </Layout>
  )
}

export default PrettyLayout
