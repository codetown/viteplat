import { useState } from 'react';
import { Button, Table, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ModalForm from '@/components/ModalForm';

interface Employee {
  id: number;
  name: string;
  age: number;
  gender: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  isFullTime: boolean;
  skills: string[];
  education: string;
  address: string;
  emergencyContact: string;
}

export function EmployeeManagementDemo (){
  const [visible, setVisible] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const formItems = [
    // {name:'avatar',label:'头像',type:'upload.image.cropper' as const,mode:'single' as const,required:true},
    // {name:'photos',label:'照片',type:'upload.image.cropper' as const,mode:'multiple'  as const,required:true},
    { name: 'name', label: '姓名', type: 'input' as const, required: true },
    { name: 'age', label: '年龄', type: 'number' as const, required: true, min: 18, max: 100 },
    {
      name: 'gender',
      label: '性别',
      type: 'radio' as const,
      required: true,
      options: [
        { value: 'male', label: '男' },
        { value: 'female', label: '女' },
      ],
    },
    {
      name: 'department',
      label: '部门',
      type: 'select' as const,
      required: true,
      options: [
        { value: 'hr', label: '人力资源' },
        { value: 'it', label: 'IT' },
        { value: 'finance', label: '财务' },
        { value: 'marketing', label: '市场' },
      ],
    },
    { name: 'position', label: '职位', type: 'input' as const},
    { name: 'salary', label: '薪资', type: 'number' as const },
    { name: 'startDate', label: '入职日期', type: 'datepicker' as const},
    { name: 'isFullTime', label: '是否全职', type: 'switch' as const },
    {
      name: 'skills',
      label: '技能',
      type: 'checkbox' as const,
      options: [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'react', label: 'React' },
        { value: 'node', label: 'Node.js' },
        { value: 'python', label: 'Python' },
      ],
    },
    {
      name: 'education',
      label: '学历',
      type: 'select' as const,
      required: true,
      options: [
        { value: 'highschool', label: '高中' },
        { value: 'bachelor', label: '本科' },
        { value: 'master', label: '硕士' },
        { value: 'phd', label: '博士' },
      ],
    },
    { name: 'emergencyContact', label: '紧急联系人', type: 'input' as const },
    { name: 'resume', label: '简历', type: 'upload.dragger' as const },
    { name: 'address', label: '地址', type: 'textarea' as const },
  ];

  const handleSubmit = (values: any) => {
    const newEmployee: Employee = {
      id: employees.length + 1,
      ...values,
      startDate: values.startDate?.format('YYYY-MM-DD') || '',
      skills: values.skills || [],
      isFullTime: values.isFullTime || false,
    };
    setEmployees([...employees, newEmployee]);
    message.success('员工信息添加成功！');
    setVisible(false);
  };

  const columns: ColumnsType<Employee> = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '性别', dataIndex: 'gender', key: 'gender' },
    { title: '部门', dataIndex: 'department', key: 'department' },
    { title: '职位', dataIndex: 'position', key: 'position' },
    { title: '入职日期', dataIndex: 'startDate', key: 'startDate' },
  ];

  return (
    <div className="p-6">
      <h3>员工管理系统</h3>
      <Button onClick={() => setVisible(true)} type="primary" className="mb-4">
        添加新员工
      </Button>
      <Table dataSource={employees} columns={columns} rowKey="id" />
      <ModalForm
        title="添加新员工"
        open={visible}
        onCancel={() => setVisible(false)}
        onSubmit={handleSubmit}
        formItems={formItems}
      />
    </div>
  );
};

export default EmployeeManagementDemo;

