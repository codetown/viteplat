import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import AvatarDropdown from './comments/AvatarDropdown';
import { asideMenuConfig } from './menuConfig';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const { Header, Sider, Content } = Layout;
// const loopMenuItem=(routes)=>{

// }
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.info(asideMenuConfig)
  return (
    <Layout className="antd-layout">
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="logo">
          <span><img src='/vite.svg'/></span>
          <strong>VitePlat</strong>
        </div>
        <Menu
          // theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
          //items={asideMenuConfig.map((item,index)=>({key:item.name,icon:item.icon,label:item.path} as ItemType))}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding:16, background: colorBgContainer,display:'flex',alignItems:'center' }}>
          <span className='trigger' onClick={() => setCollapsed(!collapsed)} style={{marginRight:'auto',cursor:'pointer'}}>
          {collapsed ?<MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          </span>
          <AvatarDropdown name="小狗" avatar="/vite.svg"/>
        </Header>
        <Content
          style={{
            margin:16,
            // padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            overflowX:'hidden',
            overflowY:'auto'
          }}
        >
        <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;