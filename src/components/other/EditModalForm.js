import {useEffect } from 'react';
import { Modal, Input, Form, Switch } from 'antd';

export default function (props) {
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
        /*
        errorInfo:
        {
        values: {
            username: 'username',
            password: 'password',
        },
        errorFields: [
            { name: ['password'], errors: ['Please input your Password!'] },
        ],
        outOfDate: false,
        }
        */
      });
  };

  useEffect(() => {
    if (props && props.optionId) {
      getOptionDetail({
        id: props.optionId,
      }).then((res) => {
        if (res.code === 200) {
          const formData = {
            ...form.getFieldsValue(),
          };
          Object.keys(formData).forEach((key) => {
            formData[key] = res.data[key];
          });
          form.setFieldsValue(formData);
        }
      });
    }
  }, []);

  return (
    <Modal
      open={props.visible}
      title="添加或编辑"
      getContainer={false}
      onOk={onSubmit}
      okBnProps={{
        loading:props?.saving,
      }}
      onCancel={props.onCancel}
    >
      <Form
      form={form}
        layout="vertial"
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
