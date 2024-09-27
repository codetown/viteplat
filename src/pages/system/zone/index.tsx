import { Card } from 'antd'
import InputForm from '@/components/InputForm'
const fields2 = [
  {
    label: '头像',
    name: 'avatar',
    type: 'image',
    maxCount: 1
  },
  {
    label: '昵称',
    name: 'nickname',
    type: 'input'
  },
  {
    label: '手机号',
    name: 'mobile',
    type: 'input'
  },
  {
    label: '联系邮箱',
    name: 'email',
    type: 'input'
  },
  {
    label: '状态',
    name: 'status',
    type: 'select',
    options: [
      { label: '未启用', value: 0 },
      { label: '已启用', value: 1 }
    ]
  },
  {
    label: '截至日期',
    name: 'deadline',
    type: 'datePicker'
  },
  {
    label: '创建日期',
    name: 'createdTime',
    type: 'rangePicker'
  }
]
export default function Zone() {
  return (
    <Card>
      <InputForm
        fields={fields2}
        onSubmit={(data: any) => {
          console.info('data=>', data)
        }}
      />
    </Card>
  )
}
