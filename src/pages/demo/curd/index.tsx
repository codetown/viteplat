import useCurdDemoStore from "@/stores/curdDemo"
import { Button, Card, Drawer, Modal, Space, Table } from 'antd'
import FilterForm from '@/components/FilterForm'
import InputForm from '@/components/InputForm';
import { useEffect } from "react"
// import { removeEmployee } from "@/services/employees";
import dayjs from "dayjs";
import { filterFileds } from "./filterFields";
import { columns } from "./columns";
import { inputFields } from "./inputFields";

const getTypeByName = (columns: any[], name: string) => {
    let columnType = ''
    for (let index = 0; index < columns.length; index++) {
        if (columns[index].name == name) {
            columnType = columns[index].type;
            break;
        }
    }
    return columnType;
}
export default function CurdDemo() {
    const { items, total, current, pageSize, modalOpen, drawerOpen, loading, filterData, searchEmployees, setState } = useCurdDemoStore((state: any) => state)

    const handleAdd = () => {
        setState({
            modalOpen: true,
            title: '新增'
        })
    }
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
                        <Button type='primary' onClick={handleAdd}>新增</Button>
                    </Space>
                }
                title="模块名称">
                <FilterForm
                    loading={loading}
                    fields={filterFileds}
                    onFilter={(values: any) => {
                        const searchParams: any = {}
                        for (const key in values) {
                            if (Object.prototype.hasOwnProperty.call(values, key) && (values[key] || values[key] === 0 || values[key] === '')) {
                                // const lowerKey=key.toLowerCase()
                                if (getTypeByName(filterFileds, key) === 'rangePicker' && values[key]?.length === 2 && (key.indexOf('Range') > 0 || key.indexOf('Date') > 0 || key.indexOf('Time') > 0 || key.indexOf('At') > 0)) {
                                    searchParams[`${key}Start`] = dayjs(values[key][0].format('YYYY-MM-DD 00:00:00')).valueOf() / 1000;
                                    searchParams[`${key}End`] = dayjs(values[key][1].format('YYYY-MM-DD 23:59:59')).valueOf() / 1000;
                                } else {
                                    searchParams[key] = values[key]
                                }
                            }
                        }
                        searchEmployees({ current: 1, pageSize: pageSize }, searchParams)
                    }}
                />
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
            <Modal title="增加或者修改" centered open={modalOpen} maskClosable={false} keyboard={false} onCancel={() => {
                setState({ modalOpen: false });
            }} onOk={()=>{
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