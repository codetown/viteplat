import useCurdDemoStore from "@/stores/curdDemo"
import { CopyOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons"
import { Button, Card, Drawer, Modal, Space, Table, message } from 'antd'
import FilterForm from '@/components/FilterForm'
import InputForm from '@/components/InputForm';
import { useEffect } from "react"
import { removeEmployee } from "@/services/employees";
import dayjs from "dayjs";
const genderArr = ['未知', '男', '女']
const statusArr = ['未知', '启用', '禁用']
const filterFileds = [
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
const getTypeByName=(columns:any[],name:string)=>{
    let columnType=''
    for (let index = 0; index < columns.length; index++) {
        if(columns[index].name==name){
            columnType=columns[index].type;
            break;
        }        
    }
    return columnType;
}
const inputFields = [
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
    {
        label: '创建日期',
        name: 'createdTime',
        type: 'rangePicker'
    }
]
export default function CurdDemo() {
    const { items, total, current, pageSize, modalOpen, drawerOpen, loading, filterData, searchEmployees, setState } = useCurdDemoStore((state: any) => state)
    const columns: any[] = [
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
            render(_: any, record: any) {
                return (
                    <>
                        <Button type="link" icon={<FormOutlined />} title="编辑" onClick={() => { setState({ modalOpen: true }) }}>
                            编辑
                        </Button>
                        <Button type="link" icon={<DeleteOutlined />} title="删除" onClick={async () => {
                            setState({ loading: true })
                            const res = await removeEmployee(record.id);
                            if (res.code === 200) {
                                message.success('删除成功')
                                await searchEmployees({ ...filterData })
                            }
                            setState({ loading: false })
                        }}>
                            删除
                        </Button>
                        <Button type="link" icon={<CopyOutlined title="查看" />} onClick={() => { setState({ drawerOpen: true }) }}>
                            查看
                        </Button>
                    </>
                )
            }
        }
    ]
    useEffect(() => {
        searchEmployees({ current, pageSize })
    }, [])
    return (
        <>
            <Card
                className="tableCard"
                extra={
                    <Space>
                        <Button>批量删除</Button>
                        <Button type='primary'>新增</Button>
                    </Space>
                }
                title="模块名称">
                <div style={{ padding: "8px 24px" }}>
                    <FilterForm
                        loading={loading}
                        fields={filterFileds}
                        onFilter={(values: any) => {
                            const searchParams:any={}
                            for (const key in values) {
                                if (Object.prototype.hasOwnProperty.call(values, key)&&(values[key]||values[key]===0||values[key]==='')) {
                                    // const lowerKey=key.toLowerCase()
                                    if(getTypeByName(filterFileds,key)==='rangePicker'&&values[key]?.length===2&&(key.indexOf('Range')>0||key.indexOf('Date')>0||key.indexOf('Time')>0||key.indexOf('At')>0))
                                    {
                                        searchParams[`${key}Start`]=dayjs(values[key][0].format('YYYY-MM-DD 00:00:00')).valueOf()/1000;
                                        searchParams[`${key}End`]=dayjs(values[key][1].format('YYYY-MM-DD 23:59:59')).valueOf()/1000;
                                    }else{
                                        searchParams[key]=values[key]
                                    }
                                }
                            }
                            searchEmployees({ current: 1, pageSize: pageSize }, searchParams)
                        }}
                    />
                </div>
                <Table
                    rowKey="id"
                    loading={loading}
                    columns={columns}
                    dataSource={items}
                    pagination={{
                        current,
                        pageSize,
                        total,
                        onChange: async (current: number, pageSize: number) => {
                            searchEmployees({ pageSize: pageSize, current: current }, filterData)
                        }
                    }}
                />
            </Card>
            <Modal title="增加或者修改" open={modalOpen} maskClosable={false} keyboard={false} onCancel={() => {
                setState({ modalOpen: false });
            }}>
                <InputForm fields={inputFields} loading={loading} />
            </Modal>
            <Drawer title="增加或者修改" width={480} open={drawerOpen} maskClosable={false} keyboard={false} onClose={() => {
                setState({ drawerOpen: false });
            }}>
                <InputForm fields={inputFields} loading={loading} />
            </Drawer>
        </>
    )
}