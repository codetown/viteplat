import {
  WarningOutlined,
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  AppstoreOutlined,
  SettingOutlined,
  SolutionOutlined,
  // SettingOutlined,
  // DatabaseOutlined,
  // UploadOutlined
} from '@ant-design/icons'
import { ReactNode } from 'react'

type SiderMenuItemType = {
  name: string
  path?: string
  icon?: ReactNode
  children?: SiderMenuItemType[]
}
const asideMenuConfig: SiderMenuItemType[] = [
  {
    name: '控制面板',
    path: '/',
    icon: <DashboardOutlined />
  },
  {
    name: '系统管理',
    path: '/system',
    icon: <AppstoreOutlined />,
    children: [
      {
        name: '管理员',
        path: '/system/administrators',
        icon: <UserOutlined />
      },
      {
        name: '角色管理',
        path: '/system/roles'
      },
      {
        name: '权限管理',
        path: '/system/permissions'
      },
      {
        name: '系统配置',
        path: '/system/web-config'
      },
      {
        name: '数据字典',
        path: '/system/options'
      }
    ]
  },
  // {
  //   name: '管理员',
  //   path: '/administrators',
  //   icon: <UserOutlined />
  // },
  // {
  //   name: '平台配置',
  //   path: '/web-config',
  //   icon: <SettingOutlined />
  // },
  // {
  //   name: '数据字典',
  //   path: '/options',
  //   icon: <DatabaseOutlined />
  // },
  {
    name: '员工管理',
    path: '/app/employees',
    icon: <TeamOutlined />
  },
  {
    name: '视频列表',
    path: '/app/videos',
    icon: <VideoCameraOutlined />
  },
  {
    name: '功能示例',
    path: '/demo/form-example',
    icon:<SolutionOutlined />,
    children: [
      {
        name: '单个表单',
        path: '/demo/form'
      },
      {
        name: '表单列表',
        path: '/demo/form-list'
      },
      {
        name: '高级上传',
        path: '/demo/upload-advance'
      },
      {
        name: '视频播放',
        path: '/demo/hook-video-demo',
      },
      {
        name: 'Curd Demo',
        path: '/demo/curd',
      }
    ]
  },
  {
    name: '应用配置',
    icon: <SettingOutlined />,
    children: [
      {
        name: '拖拽示例',
        path: '/app/pages-config/drag-demo'
      },
      {
        name: '创建页面',
        path: '/app/pages-config/create'
      },
      {
        name: '工作台',
        path: '/app/pages-config/workbench'
      },
      {
        name: '页面配置',
        path: '/app/pages-config',
      },
      {
        name: '相册',
        path: '/app/album',
      },
      {
        name: '游戏开发素材',
        path: '/app/game-dev',
      },
      {
        name: '在线教育',
        path: '/app/education',
      }
    ]
  },
  {
    name: '结果&异常',
    icon: <WarningOutlined />,
    children: [
      {
        name: '成功',
        path: '/success'
      },
      {
        name: '404',
        path: '/404'
      }
    ]
  }
]

export { asideMenuConfig }
