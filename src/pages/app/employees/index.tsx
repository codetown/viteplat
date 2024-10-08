import { useEffect, useState } from 'react'
import { Button, Card, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import useEmployeeStore from '@/stores/employee'

import classes from './index.module.scss'
import FilterForm from '@/components/FilterForm'

interface DataType {
  key: React.Key
  avatar: string
  nickName: string
  realName: string
  mobile: string
  gender: number
  status: number
}

const genderArr = ['未知', '男', '女']
const statusArr = ['未知', '启用', '禁用']
const prefix="https://jscdn.httpcn.com/p/hancheng/content/images/pic/guoxue/shuihuzhuan/shz_"
const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    key: 'info',
    render(_, record) {
      return (
        <span className={classes.infoBlock}>
          <img src={`${prefix}${record.avatar}.png`} alt="" width="48" height="48"  onError={(e)=>{e.currentTarget.src = '/loginbg2.jpg'}}/>
          <span>{record.realName}</span>
          <span>{record.mobile}</span>
          {/* {JSON.stringify(record)} */}
        </span>
      )
    }
  },
  {
    title: '昵称',
    dataIndex: 'nickName'
  },
  {
    title: '性别',
    render: (_, record) => genderArr[record.gender]
  },
  {
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    title: '状态',
    render: (_, record) => statusArr[record.status]
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt'
  },
  {
    title: '操作',
    width:90,
    render() {
      return (
        <>
          <Button type="link" size='small' icon={<FormOutlined />} title="编辑">
            编辑
          </Button>
          <Button type="link" size='small' icon={<DeleteOutlined />} title="删除">
            删除
          </Button>
          {/* <Button type="link" size='small' icon={<CopyOutlined title="查看" />}>
            查看
          </Button> */}
          {/* <FormOutlined />
          <DeleteOutlined />
          <CopyOutlined /> */}
        </>
      )
    }
  }
]

export default function Employees() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const { items, total, current, pageSize, filterFileds, searchEmployees } = useEmployeeStore((state: any) => state)
  useEffect(() => {
    searchEmployees({ current: 1, pageSize: 10 })
  }, [])
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const fields = [
    {
      label: '姓名',
      name: 'realName',
      type: 'input'
    },
    {
      label: '昵称',
      name: 'nickName',
      type: 'input'
    },
    {
      label: '手机号',
      name: 'mobile',
      type: 'input'
    },
    {
      label: '邮箱',
      name: 'email',
      type: 'input'
    },
    {
      label: '员工状态',
      name: 'status',
      type: 'select',
      options: [
        { label: '未启用', value: 0 },
        { label: '已启用', value: 1 }
      ]
    },
    // {
    //   label: "截至日期",
    //   name: "deadline",
    //   type: "datePicker"
    // },
    {
      label: '创建日期',
      name: 'createdTime',
      type: 'rangePicker'
    }
  ]
  return (
    <Card
      className="tableCard"
      extra={<Button>新增</Button>}
      title={
        <FilterForm
          fields={fields}
          onFilter={(values: any) => {
            searchEmployees({ current: 1, pageSize: pageSize }, values)
          }}
        />
      }>
      {/* <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
      </div> */}
      <Table
        rowKey="id"
        size='small'
        rowSelection={rowSelection}
        loading={loading}
        columns={columns}
        dataSource={items}
        pagination={{
          current,
          pageSize,
          total,
          onChange: async (current, pageSize) => {
            setLoading(true)
            await searchEmployees({ pageSize: pageSize, current: current }, filterFileds)
            setLoading(false)
          }
        }}
      />
    </Card>
  )
}
