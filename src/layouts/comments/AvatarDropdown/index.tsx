import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown, Avatar, MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

interface AvatarDropdownProps {
  name: string
  avatar: string
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = (props: { name: string; avatar: string }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const logout = async () => {
    const pathname = location?.pathname
    navigate({
      pathname: '/login',
      search: pathname ? `redirect=${pathname}` : ''
    })
  }

  const menu: MenuProps = {
    onClick: (event: any) => {
      const { key } = event
      if (key === 'logout') {
        logout()
      }
      if(key === 'zone'){
        navigate({pathname:'system/zone'})
      }
    },
    items: [
      {
        key: 'zone',
        label: '个人中心',
        icon: <UserOutlined />,
        className: styles.menu
      },
      {
        key: 'logout',
        label: '退出登录',
        icon: <LogoutOutlined />,
        className: styles.menu
      }
    ]
  }
  return (
    <Dropdown menu={menu}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={props.avatar} alt="avatar" />
        <span>{props.name}</span>
      </span>
    </Dropdown>
  )
}

export default AvatarDropdown
