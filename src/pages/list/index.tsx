import { useEffect, useState } from 'react'
import { Button, Card, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { CopyOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons'
import useAdminStore from '@/stores/admin'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    dataIndex: 'realName'
  },
  {
    title: '登录名',
    dataIndex: 'loginName'
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt'
  },
  {
    title: '操作',
    render() {
      return (
        <>
          <Button type="link" icon={<FormOutlined />}></Button>
          <Button type="link" icon={<DeleteOutlined />}></Button>
          <Button type="link" icon={<CopyOutlined />}></Button>
          {/* <FormOutlined />
          <DeleteOutlined />
          <CopyOutlined /> */}
        </>
      )
    }
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

export default function List() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const { items, total, searchAdmins } = useAdminStore((state: any) => state)
  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }
  useEffect(() => {
    searchAdmins({ current: 1, pageSize: 20 })
  }, [])
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <Card title="列表" extra={<Button>新增</Button>}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={items} pagination={{ total }} />
    </Card>
  )
}
