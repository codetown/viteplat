import {useEffect } from 'react';
import { Modal, Input, Form, Switch } from 'antd';
import { getOptionDetail } from '@/services/options'
export default function (props:any) {
  const [form] = Form.useForm();
  const onSubmit = () => {
    console.info("onSubmit=>")
    form
      .validateFields()
      .then((values) => {
        props?.onSave(values);
      })
      .catch((errorInfo) => {
        console.info('errorInfo', errorInfo);
      });
  };

  useEffect(() => {
    if (props?.rowData) {
      console.info("rowData=>",props?.rowData);
      getOptionDetail({
        id: props.rowData.id,
      }).then((res:any) => {
        console.info("res=>",res);
        if (res.code === 200) {
          const formData = {
            ...form.getFieldsValue(),
          };
          Object.keys(formData).forEach((key) => {
            if(key==='isDefault'){
              formData[key] =res.data[key]>0;
            }else{
              formData[key] = res.data[key];
            }
          });
          console.info("formData=>",formData);
          form.setFieldsValue(formData);
        }
      });
    }else{
      form.resetFields();
    }
  }, [props?.rowData]);

  return (
    <Modal
      forceRender
      getContainer={false}
      open={props.open}
      title="添加或编辑"
      onOk={onSubmit}
      okButtonProps={{
        loading:props?.saving,
      }}
      onCancel={props.onCancel}
    >
      <Form
      form={form}
        layout="vertical"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          paddingTop: 16,
        }}
      >
        <Form.Item
          label="字段标签"
          name="fieldLabel"
          rules={[
            {
              required: true,
              message: '请输入字段标签',
            },
          ]}
        >
          <Input placeholder="请输入字段标签" size="large" />
        </Form.Item>
        <Form.Item
          label="字段变量"
          name="fieldKey"
          rules={[
            {
              required: true,
              message: '请输入字段变量',
            },
          ]}
        >
          <Input placeholder="请输入字段变量" size="large" />
        </Form.Item>
        <Form.Item
          label="选项文本"
          name="optionLabel"
          rules={[
            {
              required: true,
              message: '请输入选项文本',
            },
          ]}
        >
          <Input placeholder="请输入选项文本" size="large" />
        </Form.Item>
        <Form.Item
          label="选项取值"
          name="optionValue"
          rules={[
            {
              required: true,
              message: '请输入选项值',
            },
          ]}
        >
          <Input placeholder="请输入选项值" size="large" />
        </Form.Item>
        <Form.Item label="是否是默认" name="isDefault" valuePropName="checked">
          <Switch checkedChildren="是" unCheckedChildren="否" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
