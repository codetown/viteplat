import React from 'react';
import { Button, Form, Input, Select, Space, DatePicker, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';
export default function (props) {
    const [form] = Form.useForm();
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }

        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }

        return isJpgOrPng && isLt2M;
    };
    return <Form form={form} labelCol={{
        span: 6,
    }}
        wrapperCol={{
            span: 18,
        }} layout="horizontal" className={styles.inputForm}>
        {props?.fields?.map((item, index) => {
            let ele = <Input placeholder="请输入" maxLength={item?.maxLength} />;
            if (item?.type === 'number') {
                ele = <Input.Number max={item?.max} min={item?.min} />;
            }
            if (item?.type === 'textArea') {
                ele = <Input.TextArea maxLength={item?.maxLength} row={item?.rows} />;
            }
            if (item?.type === 'switch') {
                ele = <Switch />;
            }
            if (item?.type === 'radio') {
                ele = <Radio.Group options={item?.options} />;
            }
            if (item?.type === 'checkbox') {
                ele = <Checkbox.Group options={item?.options} />;
            }
            if (item?.type === 'select') {
                ele = <Select options={item?.options} placeholder="请选择" />;
            }
            if (item?.type === 'datePicker') {
                ele = <DatePicker placeholder="请选择日期" format="YYYY-MM-DD" />;
            }
            if (item?.type === 'rangePicker') {
                ele = <DatePicker.RangePicker placeholder={["开始时间", "结束时间"]} format="YYYY-MM-DD" />;
            }
            if (item?.type === 'image') {
                ele = <CropAndUpload beforeUpload={item?.beforeUpload} onPreview={item?.beforeUpload} />
            }
            if (item?.type === 'upload') {
                ele = <Upload action={item?.action} listType="picture-card" valuePropName={item?.name} maxCount={item?.maxCount} beforeUpload={beforeUpload} onChnage={(file)=>{
                    console.info("onchange=>",file);
                }}>
                    <div>
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            上传文件
                        </div>
                    </div>
                </Upload>;
            }
            return (<Form.Item label={item?.label} name={item?.name} rules={item.rules} key={`${item?.name}-${index}`}>
                {ele}
            </Form.Item>)
        })}
        <div className={styles.formBottom}>
            <Button type="primary" onClick={(e) => {
                e.preventDefault();
                form
                .validateFields()
                .then((values) => {
                    props?.onSubmit(values);
                })
            }} loading={props.loading}>提交</Button>
            <span style={{width:48,display:'inline-block'}}>&nbsp;</span>
            <Button onClick={(e) => {
                e.preventDefault();
                form.resetFields();
                props?.onSubmit({})
            }}>重置</Button>
        </div>
    </Form>;
};
