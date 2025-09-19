import React from 'react';
import { Modal, Form, Input, Select, DatePicker, InputNumber, Switch, Radio, Checkbox, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import classes from './index.module.scss'
import CropAndUpload from '../CropAndUpload';
type FormItemType = 'input' | 'select' | 'datepicker' | 'rangepicker' | 'number' | 'switch' | 'radio' | 'checkbox' | 'textarea' | 'upload' | 'upload.dragger' | 'upload.image.cropper';

interface FormItemConfig {
  rules?: any[];
  name: string;
  label: string;
  type: FormItemType;
  mode?: 'single' | 'multiple';
  required?: boolean;
  options?: { value: string | number; label: string }[];
  min?: number;
  max?: number;
}

interface ModalFormProps {
  title: string;
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => void;
  formItems: FormItemConfig[];
}

const ModalForm: React.FC<ModalFormProps> = ({
  title,
  open,
  onCancel,
  onSubmit,
  formItems = [],
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSubmit(values);
        form.resetFields();
      })
      .catch(info => {
        console.error('Validate Failed:', info);
      });
  };

  const renderFormItem = (item: FormItemConfig) => {
    const { type, label, options, min, max, mode } = item;

    switch (type) {
      case 'input':
        return <Input placeholder={`请输入${label}`} />;
      case 'select':
        return <Select placeholder={`请选择${label}`} options={options} />;
      case 'datepicker':
        return <DatePicker placeholder={`请选择${label}`} />;
      case 'rangepicker':
        return <DatePicker.RangePicker placeholder={['请选择开始日期', '请选择结束日期']} />;
      case 'number':
        return <InputNumber placeholder={`请输入${label}`} min={min} max={max} width={'100%'} />;
      case 'switch':
        return <Switch />;
      case 'radio':
        return <Radio.Group options={options} />;
      case 'checkbox':
        return <Checkbox.Group options={options} />;
      case 'textarea':
        return <Input.TextArea placeholder={`请输入${label}`} rows={4} />;
      case 'upload':
        return (
          <Upload>
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        );
      case 'upload.dragger':
        return (
          <Upload.Dragger>
            <p className="ant-upload-text" style={{height:62}}>点击或拖拽上传</p>
          </Upload.Dragger>
        );
      case 'upload.image.cropper':
        {
          return (
            <CropAndUpload mode={mode} />
          );
        }
      default:
        return null;
    }
  };

  return (
    <Modal
      title={title}
      width={800}
      centered
      maskClosable={false}
      open={open}
      onCancel={onCancel}
      onOk={handleOk}
      okText="确定"
      cancelText="取消"
    >
      <Form form={form} layout="horizontal" labelCol={{ style: { width: 80 } }} className={classes.modalFormDoubleColumns}>
        {formItems.map((item) => (
          <Form.Item
            key={item.name}
            name={item.name}
            label={item.label}
            rules={item?.rules || undefined}
            className={['textarea', 'upload.dragger'].includes(item.type) ? classes.rowItem : classes.colItem}
          >
            {renderFormItem(item)}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default ModalForm;

