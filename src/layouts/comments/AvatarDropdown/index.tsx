import React, { useCallback } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';
import styles from './index.module.css';

interface AvatarDropdownProps {
  name: string;
  avatar: string;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ name, avatar }) => {

  const loginOut = async () => {

  };

  const onMenuClick = useCallback((event:any) => {
    const { key } = event;
    // if (key === 'logout') {
    //   userDispatcher.updateCurrentUser({});
    //   loginOut();
    // }
  }, []);

  const menu = {
    items: [
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
