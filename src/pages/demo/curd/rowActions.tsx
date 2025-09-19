import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

export const rowActions: any[] = [
    {
        title: '查看',
        type: 'link',
        icon: <FormOutlined />,
        action: (record: any) => {
            console.info("查看record",record)
            // setState({ modalOpen: true })
        }
    },
    {
        title: '编辑',
        type: 'link',
        icon: <FormOutlined />,
        action: (record: any) => {
            console.info("编辑record",record)
            // setState({ modalOpen: true })
        }
    },
    {
        title: '删除',
        type:'link',
        icon: <DeleteOutlined />,
        action: async (record:any) => {
            console.info("删除record",record)
            // setState({ loading: true })
            // const res = await removeEmployee(record.id);
            // if (res.code === 200) {
            //     message.success('删除成功')
            //     await searchEmployees({ ...filterData })
            // }
            // setState({ loading: false })
        }
    },
]