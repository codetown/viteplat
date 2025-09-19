import { useState } from 'react';
import { Modal, Form, Button } from 'antd';

// 自定义 Hook 用于管理模态框的状态和行为
const useFormModalData = (onSubmit: (items:any) =>Promise<boolean>) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields(); // 关闭时重置表单
  };
  const handleOk = async () => {
    form.validateFields().then( async (values:any) => {
      const res=await onSubmit(values); // 提交表单数据给父组件或进行处理
      if(res){
        handleCancel();   // 成功后关闭弹窗
      }
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  return {
    open,
    showModal,
    handleOk,
    handleCancel,
    form,
  };
};

// 通用的弹出框表单组件
const FormModal = ({ title, formItems, onSubmit }:any) => {
  const { open, showModal, handleOk, handleCancel, form } = useFormModalData(onSubmit);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Form Modal
      </Button>
      <Modal
        title={title}
        open={open} // 使用 open 属性代替 visible
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose // 在关闭时销毁 Modal 内的 DOM 结构
      >
        <Form form={form} layout="vertical" size='large'>
          {formItems.map((item:any) => (
            <Form.Item
              key={item.name}
              label={item.label}
              name={item.name}
              rules={item.rules}
            >
              {item.children}
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default FormModal;