import RowActionButtons from "./components/rowActionButtons"
import { rowActions } from "./rowActions"
const genderArr = ['未知', '男', '女']
const statusArr = ['未知', '启用', '禁用']
export const columns:any[] = [
    {
        title: '姓名',
        dataIndex: 'realName'
    },
    {
        title: '昵称',
        dataIndex: 'nickName'
    },
    {
        title: '性别',
        render: (_: any, record: any) => genderArr[record.gender]
    },
    {
        title: '邮箱',
        dataIndex: 'email'
    },
    {
        title: '状态',
        render: (_: any, record: any) => statusArr[record.status]
    },
    {
        title: '创建时间',
        dataIndex: 'createdAt'
    },
    {
        title: '操作',
        render:(_: any, record: any) =>(<RowActionButtons record={record} actions={rowActions}  />)
    }
]