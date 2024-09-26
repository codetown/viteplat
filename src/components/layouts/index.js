import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb, message } from 'antd';
import { Link, history } from 'umi';
import logo from '@/assets/favicon.png';
import avatar from '@/assets/avatar.jpeg';
import styles from './index.less';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  BulbOutlined,
} from '@ant-design/icons';

import { fakeLogout } from '../services/common';
const { Sider } = Layout;
const iconList = [
  <AppstoreOutlined />,
  <BarChartOutlined />,
  <CloudOutlined />,
  <ShopOutlined />,
  <TeamOutlined />,
  <UserOutlined />,
  <UploadOutlined />,
  <VideoCameraOutlined />,
  <MenuUnfoldOutlined />,
  <QuestionCircleOutlined />,
  <LogoutOutlined />,
  <BulbOutlined />,
];
const BasicLayout = (props) => {
  const [collState, setCollState] = useState(false);
  const [menuTree, setMenuTree] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const toggle = () => {
    setCollState(!collState);
  };
  const logout = () => {
    fakeLogout().then((res) => {
      if (res && res.code === 200) {
        message.success('退出成功', 1, () => {
          if (sessionStorage.getItem('jwt')) {
            sessionStorage.removeItem('jwt');
          }
          if (sessionStorage.getItem('menuTree')) {
            sessionStorage.removeItem('menuTree');
          }
          history.push('/login');
        });
      }
    });
  };

  const openChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  useEffect(() => {
    const menuStr = sessionStorage.getItem('menuTree');
    const menuJson = menuStr ? JSON.parse(menuStr) : [];
    if (menuJson && menuJson.length > 0) {
      setMenuTree(menuJson);
    } else {
      history.push('/login');
    }
  }, []);
  return (
    <>
      <Sider
        theme="light"
        className={styles.slider}
        trigger={null}
        collapsible
        collapsedWidth={64}
        collapsed={collState}
      >
        <div className={styles.logo}>
          <img alt="logo" src={logo} />
          <span>开发者平台</span>
        </div>
        <Link to="/personal" className={styles.administrator}>
          <img alt="头像" src={avatar} />
          <div>
            <strong>技术小刘</strong>
            <span>研发部门</span>
          </div>
        </Link>
        <Menu
          theme="light"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={openChange}
          className={styles.menu}
          onClick={(e)=>{
            console.info('menu=>e',e);
          }}
          items={
              menuTree?.map((item, index) => {
                const menuItem={label:'',key:`menu.item.${item.id}`,icon:iconList[index]}
                if(item?.children?.length){
                  menuItem.label=item.menuName;
                  menuItem.children=item.children.map((child)=>({
                    label:<Link to={child.linkTo || '/'}>{child.menuName}</Link>,
                    key:`menu.item.${item.id}.subitem.${child.id}`,
                    path:child.linkTo}))
                }else{
                  menuItem.label=<Link to={item.linkTo || '/'}>{item.menuName}</Link>
                }
                return menuItem;
              })
          }
        >
        </Menu>
      </Sider>
      <div className={styles.rightPart}>
        <div className={styles.header}>
          <div className={styles.trigger} onClick={toggle}>
            {collState ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className={styles.headerSpace}>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>列表</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>用户</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.headerMenu}>
            <Link to="/feedback">
              <BulbOutlined />
              反馈
            </Link>
            <Link to="/help">
              <QuestionCircleOutlined />
              帮助
            </Link>
            <a
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              <LogoutOutlined />
              退出
            </a>
          </div>
        </div>
        <div className={styles.content}>{props.children}</div>
        <div className={styles.footer}>
          <strong>Management ©2018 Created by Leo</strong>
        </div>
      </div>
    </>
  );
};
export default BasicLayout;
