import React, { useCallback } from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import styles from './index.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

interface AvatarDropdownProps {
  name: string;
  avatar: string;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ name, avatar }) => {

  const navigate=useNavigate()
  const location=useLocation()
  const logout = async () => {
    //await fetchLogout();

    const pathname = location?.pathname;
    navigate({
      pathname: '/login',
      search: pathname ? `redirect=${pathname}` : '',
    });
  };

  const onMenuClick = useCallback((event: MenuInfo) => {
    const { key } = event;
    if (key === 'logout') {
      logout();
    }
  }, []);

  const menu = {
    items: [
      {
        key: 'zone', label: '个人中心', icon: <UserOutlined />, onClick: onMenuClick, className: styles.menu,
      },
      {
        key: 'logout', label: '退出登录', icon: <LogoutOutlined />, onClick: onMenuClick, className: styles.menu,
      },
    ],
  };
  return (
    <Dropdown menu={menu}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={avatar} alt="avatar" />
        <span>{name}</span>
      </span>
    </Dropdown>
  );
};

export default AvatarDropdown;
