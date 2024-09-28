import { useState, useEffect, useRef } from 'react';
import { Card, Input, Table, Form, Button, Space, Select } from 'antd';
import FilterForm from '@/components/FilterForm';
import classes from './index.module.scss';
// import avatar from '@/assets/avatar.jpeg';

import { getMemberList } from '@/services/common';

export default function () {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const [tableHeight, setTableHeight] = useState(48);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
        showTotal: (total: number) => `共${total}条`,
    });
    const searchForm = useRef<any>();
    const search = (params: any) => {
        setLoading(true);
        getMemberList({
            // ...form.getFieldsValue(),
            current: params?.current || 1,
            pageSize: params?.pageSize || 10,
        }).then((res: any) => {
            if (res && res.code === 200) {
                setPagination({ ...pagination, current: params?.current, pageSize: params?.pageSize, total: res.data.total })
                setDataSource(res.data.items);
            } else {
                setDataSource([]);
                setPagination({ ...pagination, total: 0 })
            }
            setLoading(false);
            console.info('searchForm?.current?.clientHeight', searchForm.current.tableHeight);
            console.info(searchForm?.current?.clientHeight);
            setTableHeight(searchForm?.current?.clientHeight || 48);
        });
    };

    useEffect(() => {
        search({ current: 1, pageSize: 10 });
    }, []);
    const fields = [{
        label: "工作名",
        name: "flowName",
        type: "input"
    },
    {
        label: "状态",
        name: "status",
        type: "select",
        options: [
            { label: "未启用", value: 0 },
            { label: "已启用", value: 1 }
        ]
    },
    {
        label: "截至日期",
        name: "deadline",
        type: "datePicker"
    },
    {
        label: "创建日期",
        name: "createdTime",
        type: "rangePicker"
    },
    ];
    
    const columns: any[] = [
        {
            title: '头像',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 80,
            align: 'center',
            render: (value: any) => {
                return <img src={value} className={classes.avatar} />;
            },
        },
        {
            title: '昵称',
            key: 'other',
            render: (item: any) => {
                const textArr = ['未设置', '男生', '女生'];
                return (
                    <>
                        <p className={classes.userInfo}>{item.nickName}</p>
                        <p className={classes.userInfo} style={{ fontSize: 12, color: '#999' }}>
                            {textArr[item.gender]}
                        </p>
                    </>
                );
            },
        },
        {
            title: '登陆账户名',
            key: 'accountNo',
            render: (item: any) => {
                return (
                    <>
                        <p className={classes.userInfo}>{item.accountNo}</p>
                        <p className={classes.userInfo}>{item.email}</p>
                    </>
                );
            },
        },
        {
            title: '真实姓名',
            dataIndex: 'realName',
            key: 'realName',
        },
        {
            title: '绑定的手机号',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: '经验值',
            dataIndex: 'expPoint',
            key: 'expPoint',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (value: any) => {
                const stArr = ['未设置', '启用', '停用'];
                return stArr[value];
            },
        },
    ];
    const filterForm = (
        <div ref={searchForm}>
            <FilterForm fields={fields} onFilter={(formData: any) => {
                console.info(formData);
                search(formData)
            }} />
        </div>
    );
    return (
        <Card
            title={filterForm}
            className="tableCard"
        >
            <Table
                dataSource={dataSource}
                columns={columns}
                loading={loading}
                size="small"
                rowKey="id"
                scroll={{ y: document.body.clientHeight - tableHeight - 200}}
                pagination={pagination}
                onChange={(values) => {
                    console.info('changeValues', values);
                    search(values);
                }}
            />
        </Card>
    );
};
