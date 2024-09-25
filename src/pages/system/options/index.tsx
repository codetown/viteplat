import { useEffect, useState } from 'react';
import { Card, Input, Table, Form, Button, Space, TablePaginationConfig, message } from 'antd';
import AddOrEdit from './addOrEdit';
import useOptionsStore from '@/stores/options';
import { postOption, putOption } from '@/services/options';
export default function () {
  const { items, total, listLoading, searchOptions } = useOptionsStore((state: any) => state);
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [rowData, setRowData] = useState<any>(null);
  const search = () => {
    // dispatch({
    //   type: 'options/fetchList',
    //   payload: { ...form.getFieldsValue(), current: 1 }
    // });
    searchOptions();
  };

  useEffect(() => {
    search();
  }, []);

  const columns: any = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      align: 'center',
    },
    {
      title: '字段名',
      dataIndex: 'fieldLabel',
      key: 'fieldLabel',
    },
    {
      title: '字段变量',
      dataIndex: 'fieldKey',
      key: 'fieldKey',
    },
    {
      title: '选项内容',
      dataIndex: 'optionLabel',
      key: 'optionLabel',
    },
    {
      title: '选项值',
      dataIndex: 'optionValue',
      key: 'optionValue',
    },
    {
      title: '是否默认',
      dataIndex: 'isDefault',
      key: 'isDefault',
      width: 80,
      align: 'center',
      render: (value: any) => {
        const options = ['否', '是'];
        return options[value];
      },
    },
    {
      title: '操作',
      render: (item: any) => (
        <Space>
          <Button
            size='small'
            type='link'
            onClick={() => {
              setRowData(item);
              setModalVisible(true);
            }}
          >
            编辑
          </Button>
          <Button
            size='small'
            type='link'
            onClick={() => { }}
          //   dispatch({
          //     type: 'options/remove',
          //     payload: item,
          //     callback(res) {
          //       search({current:1});
          //     },
          //   })
          //
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const filterForm = (
    <Form id="searchForm" layout="inline" form={form} >
      <Form.Item label="字段名" name="fieldLabel">
        <Input placeholder="请输入字段名" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" onClick={() => search()} loading={listLoading}>
            查询
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
              search();
            }}
          >
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <Card
        title={filterForm}
        className="tableCard"
        extra={
          <Button
            type="primary"
            onClick={() => {
              setRowData(null);
              setModalVisible(true);
            }}
          >
            新增字典项
          </Button>
        }
      >
        <Table
          loading={listLoading}
          dataSource={items}
          columns={columns}
          size="small"
          rowKey="id"
          scroll={{ y: document.body.clientHeight - 186 }}
          pagination={
            total > 10
              ? {
                size: 20,
                total,
                pageSizeOptions: [10, 20, 50],
                showTotal: (recordTotal: number) => `共${recordTotal}条`
              } as unknown as TablePaginationConfig
              : false
          }
        />
      </Card>
      <AddOrEdit
        open={modalVisible}
        rowData={rowData}
        onSave={(values: any) => {
          const params = {
            ...values,
            isDefault: values.isDefault ? 1 : 0,
          };
          let doFunc = postOption;
          let backInfo = "添加成功";
          if (rowData && rowData?.id) {
            params.id = rowData.id;
            doFunc = putOption
            backInfo = '修改成功';
            setRowData(null);
          }
          doFunc(values).then((res: any) => {
            if (res?.code === 200) {
              message.success(backInfo);
              form.resetFields();
              setModalVisible(false);
              search();
            } else {
              message.error(res?.message);
            }
          })
        }}
        onCancel={() => {
          setModalVisible(false);
        }}
      />
    </>
  );
}
