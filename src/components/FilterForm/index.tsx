import { Button, Form, Input, Select, DatePicker } from 'antd'
import classes from './index.module.scss'

export default function FilterForm(props: any) {
  const [form] = Form.useForm()
  return (
    <Form form={form} layout="vertical" className={classes.filterForm} size='large'>
      {props?.fields?.map((item: any, index: number) => {
        let ele = <Input placeholder="请输入" allowClear />
        if (item?.type === 'select') {
          ele = <Select placeholder="请选择" options={item?.options} allowClear />
        }
        if (item?.type === 'datePicker') {
          ele = <DatePicker placeholder="请选择日期" format="YYYY-MM-DD" allowClear />
        }
        if (item?.type === 'rangePicker') {
          ele = <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} format="YYYY-MM-DD" allowClear />
        }
        return (
          <Form.Item label={item?.label} name={item?.name} key={`${item?.name}-${index}`}>
            {ele}
          </Form.Item>
        )
      })}
      <Form.Item>
        <div className={classes.btnGrp}>
          <Button
            type="primary"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault()
              props?.onFilter(form.getFieldsValue())
            }}
            loading={props.loading}
            htmlType="submit">
            查询
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault()
              form.resetFields()
              props?.onFilter({})
            }}>
            重置
          </Button>
          </div>
      </Form.Item>
    </Form>
  )
}
