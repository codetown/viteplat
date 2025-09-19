import { Button, Card, Modal, Space, Table } from 'antd'
import FilterForm from '@/components/FilterForm'
import InputForm from '../InputForm';

// 表格fileds/columns，查询表单fileds/columns，写入数据表单（创建和修改）
export default function Curd(props: any) {

    const {
        items,
        total,
        current,
        pageSize,
        filterFileds,
        columns,
        searchRecords,
        loading,
        modalOpen,
        setModalOpen,
        // drawerOpen,
        // setDrawerOpen
    } = props;

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
        {
            label: '创建日期',
            name: 'createdAt',
            type: 'rangePicker'
        }
    ]
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
                <div style={{ padding: "8px 24px" }}><FilterForm
                    fields={fields}
                    onFilter={(values: any) => {
                        searchRecords({ current: 1, pageSize: pageSize }, values)
                    }}
                /></div>
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
                            searchRecords({ pageSize: pageSize, current: current }, filterFileds)
                        }
                    }}
                />
            </Card>
            <Modal open={modalOpen} maskClosable={false} keyboard={false} onClose={() => {
                setModalOpen(false);
            }}>
                <InputForm fields={fields} />
            </Modal>
            {/*<Drawer open={drawerOpen} maskClosable={false} keyboard={false} onClose={() => {
                setDrawerOpen(false);
            }}>
                <InputForm fields={fields} />
            </Drawer>*/}
        </>
    )
}
