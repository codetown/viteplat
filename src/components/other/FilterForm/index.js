
import { Button, Form, Input, Select, Space, DatePicker } from 'antd';
import styles from './index.less';
export default function (props) {
  const [form] = Form.useForm();
  return <Form form={form} layout="inline" className={styles.filterForm}>
    {props?.fields?.map((item, index) => {
      let ele = <Input placeholder="请输入" />;
      if (item?.type === 'select') {
        ele = <Select placeholder="请选择" options={item?.options} />;
      }
      if (item?.type === 'datePicker') {
        ele = <DatePicker placeholder="请选择日期" format="YYYY-MM-DD" />;
      }
      if (item?.type === 'rangePicker') {
        ele = <DatePicker.RangePicker placeholder={["开始时间", "结束时间"]} format="YYYY-MM-DD" />;
      }
      return (<Form.Item label={item?.label} name={item?.name} key={`${item?.name}-${index}`}>
        {ele}
      </Form.Item>)
    })}
    <Form.Item>
      <Space>
        <Button type="primary" onClick={(e) => {
          e.preventDefault();
          props?.onFilter(form.getFieldsValue());
        }} loading={props.loading}>查询</Button>
        <Button onClick={(e) => {
          e.preventDefault();
          form.resetFields();
          props?.onFilter({})
        }}>重置</Button>
      </Space>
    </Form.Item>
  </Form>;
};
