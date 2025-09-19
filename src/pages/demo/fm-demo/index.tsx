import { Checkbox, Input, Radio, Slider, Upload } from 'antd';
import FormModal from '@/components/FormModal'; // 假设上面的代码保存为 GenericFormModal.js

const App = () => {
  const handleSubmit = (values:any) => {
    console.log('Received values of form: ', values);
  };

  const formItems = [
    {
      label: 'Name',
      name: 'name',
      rules: [{ required: true, message: 'Please input your name!' }],
      children: <Input />,
    },
    {
      label: 'Gender',
      name: 'gender',
      rules: [{ required: true, message: 'Please select your gender!' }],
      children: (
        <Radio.Group options={[{label:'男',value:1},{label:'女',value:2}]}>
        </Radio.Group>
      ),
    },
    {
        label: 'Upload File',
        name: 'uploadFile',
        rules: [{ required: true, message: 'Please upload a file!' }],
        children: (
          <Upload.Dragger>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        ),
      },
      
      // 多选框组
      {
        label: 'Interests',
        name: 'interests',
        rules: [{ required: true, message: 'Please select your interests!' }],
        children: (
          <Checkbox.Group style={{ width: '100%' }}>
            <Checkbox value="reading">Reading</Checkbox>
            <Checkbox value="sports">Sports</Checkbox>
            <Checkbox value="coding">Coding</Checkbox>
            <Checkbox value="traveling">Traveling</Checkbox>
          </Checkbox.Group>
        ),
      },
      
      // 滑动条
      {
        label: 'Volume Control',
        name: 'volume',
        rules: [{ required: false }],
        children: <Slider min={0} max={100} />,
      },
  ];

  return <FormModal title="添加用户" formItems={formItems} onSubmit={handleSubmit} />;
};

export default App;