import { useState } from "react";
import { Modal,Form, Input, Select, DatePicker, Upload, Switch, Radio, Checkbox, InputNumber } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import CropAndUpload from '@/components/CropAndUpload'
import classes from './index.module.scss'


export function useModalForm(inputFields: any[],onSubmit: (formData:any) =>Promise<boolean>) {
    const [modalOpen, setModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formRef]=Form.useForm()
    const ModalForm = (
        <Modal title="增加或者修改" loading={loading} centered open={modalOpen} maskClosable={false} keyboard={false} onCancel={() => {
            setModalOpen(true)
        }} onOk={() => {
            formRef.validateFields()
            formRef.validateFields().then(async (values) => {
                setLoading(true)
                const success=await onSubmit(values);
                if(success){
                    setLoading(false)
                }
            })
        }}>
            <Form
                size='large'
                form={formRef}
                labelCol={{
                    span: 6
                }}
                wrapperCol={{
                    span: 18
                }}
                layout="horizontal"
                className={classes.inputForm}>
                {inputFields?.map((item: any, index: number) => {
                    let ele = <Input placeholder="请输入" maxLength={item?.maxLength} />
                    if (item?.type === 'number') {
                        ele = <InputNumber max={item?.max} min={item?.min} />
                    }
                    if (item?.type === 'textArea') {
                        ele = <Input.TextArea maxLength={item?.maxLength} rows={item?.rows} />
                    }
                    if (item?.type === 'switch') {
                        ele = <Switch />
                    }
                    if (item?.type === 'radio') {
                        ele = <Radio.Group options={item?.options} />
                    }
                    if (item?.type === 'checkbox') {
                        ele = <Checkbox.Group options={item?.options} />
                    }
                    if (item?.type === 'select') {
                        ele = <Select options={item?.options} placeholder="请选择" />
                    }
                    if (item?.type === 'datePicker') {
                        ele = <DatePicker placeholder="请选择日期" format="YYYY-MM-DD" />
                    }
                    if (item?.type === 'rangePicker') {
                        ele = <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} format="YYYY-MM-DD" />
                    }
                    if (item?.type === 'image') {
                        ele = <CropAndUpload valuePropName={item.name} beforeUpload={item?.beforeUpload} onPreview={item?.onPreview} onChange={item?.onChange} customRequest={item?.customRequest} />
                    }
                    if (item?.type === 'upload') {
                        ele = (
                            <Upload
                                action={item?.action}
                                listType="picture-card"
                                maxCount={item?.maxCount}
                                beforeUpload={item?.beforeUpload}
                                onChange={item?.onChange}>
                                <div>
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8
                                        }}>
                                        上传文件
                                    </div>
                                </div>
                            </Upload>
                        )
                    }
                    return (
                        <Form.Item
                            label={item?.label}
                            name={item?.name}
                            rules={item?.rules}
                            key={`input-form-${item?.name}-${index}`}
                            valuePropName={item.type == 'image' ? item?.name : undefined}
                        >
                            {ele}
                        </Form.Item>
                    )
                })}
            </Form>
        </Modal>
    )
    return {
        setModalOpen,
        setLoading,
        ModalForm
    }
}