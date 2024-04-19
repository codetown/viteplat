import { TableOutlined, WarningOutlined, FormOutlined, DashboardOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'

type SiderMenuItemType = {
  name: string
  path?: string
  icon?: ReactNode
  children?: SiderMenuItemType[]
}
const asideMenuConfig: SiderMenuItemType[] = [
  {
    name: '工作台',
    path: '/',
    icon: <DashboardOutlined />
  },
  {
    name: '表单',
    path: '/form',
    icon: <FormOutlined />
  },
  {
    name: '表单列表',
    path: '/form-list',
    icon: <FormOutlined />
  },
  {
    name: '管理员',
    path: '/administrators',
    icon: <TableOutlined />
  },
  {
    name: '平台配置',
    path: '/web-config',
    icon: <TableOutlined />
  },
  {
    name: '数据字典',
    path: '/options',
    icon: <TableOutlined />
  },
  {
    name: '员工列表',
    path: '/employees',
    icon: <TableOutlined />
  },
  {
    name: '视频列表',
    path: '/videos',
    icon: <TableOutlined />
  },
  {
    name: '高级上传',
    path: '/upload-advance',
    icon: <TableOutlined />
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
