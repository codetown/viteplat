import { useState, useEffect, useRef } from 'react';
import { Card, message, Form, Button,Input } from 'antd';
import FilterForm from '@/components/FilterForm';
// import styles from './index.module.scss';
// import avatar from '@/assets/avatar.jpeg';
import CropAndUpload from '@/components/CropAndUpload';
import { postAndUpload } from '@/services/common';
import FormItem from 'antd/es/form/FormItem';
import AvatarUpload from '@/components/AvatarUpload';
const WorkFlow = () => {
  // const [loading, setLoading] = useState(false);
  // const [dataSource, setDataSource] = useState([]);
  // const searchForm = useRef();
  // const [tableHeight, setTableHeight] = useState(48);
  // const [pagination, setPagination] = useState({
  //   current: 1,
  //   pageSize: 10,
  //   showTotal: (total:number) => `共${total}条`,
  // });
  const [form] = Form.useForm();
  const search = (params:any) => {
    console.info("search=>",params)
    // setLoading(true);
    // getMemberList({
    //   ...form.getFieldsValue(),
    //   page_no: params?.current||1,
    //   page_size: params?.pageSize||10,
    // }).then((res) => {
    //   if (res && res.code === 200) {
    //     setPagination({...pagination,current:params?.current,pageSize:params?.pageSize,total:res.data.total})
    //     setDataSource(res.data.items);
    //   }else{
    //     setDataSource([]);
    //     setPagination({...pagination,total:0})
    //   }
    //   setLoading(false);
    //   console.info('searchForm?.current?.clientHeight',searchForm.current.tableHeight);
    //   console.info(searchForm?.current?.clientHeight);
    //   setTableHeight(searchForm?.current?.clientHeight||48);
    // });
  };

  useEffect(() => {
    search({ current: 1, pageSize: 10 });
  }, []);
  const fields = [{
    label: "工作名",
    name: "flowName",
    type: "input"
  },
  {
    label: "状态",
    name: "status",
    type: "select",
    options: [
      { label: "未启用", value: 0 },
      { label: "已启用", value: 1 }
    ]
  },
  {
    label: "截至日期",
    name: "deadline",
    type: "datePicker"
  },
  {
    label: "创建日期",
    name: "createdTime",
    type: "rangePicker"
  },
  ];
  // const fields2 = [{
  //   label: "工作名",
  //   name: "flowName",
  //   type: "input"
  // },
  // {
  //   label: "状态",
  //   name: "status",
  //   type: "select",
  //   options: [
  //     { label: "未启用", value: 0 },
  //     { label: "已启用", value: 1 }
  //   ]
  // },
  // {
  //   label: "头像",
  //   name: "avatar",
  //   type: "upload",
  //   maxCount: 1
  // },
  // {
  //   label: "截至日期",
  //   name: "deadline",
  //   type: "datePicker"
  // },
  // {
  //   label: "创建日期",
  //   name: "createdTime",
  //   type: "rangePicker"
  // },
  // ];
  // const columns = [
  //   {
  //     title: '头像',
  //     dataIndex: 'avatar',
  //     key: 'avatar',
  //     width: 80,
  //     align: 'center',
  //     render: () => {
  //       return (<img src={avatar} className={styles.avatar} />);
  //     },
  //   },
  //   {
  //     title: '昵称',
  //     key: 'other',
  //     render: (item:any) => {
  //       const textArr = ['未设置', '男生', '女生'];
  //       return (
  //         <>
  //           <p className={styles.userInfo}>{item.nickName}</p>
  //           <p className={styles.userInfo} style={{ fontSize: 12, color: '#999' }}>
  //             {textArr[item.gender]}
  //           </p>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     title: '登陆账户名',
  //     key: 'accountNo',
  //     render: (item:any) => {
  //       return (
  //         <>
  //           <p className={styles.userInfo}>{item.accountNo}</p>
  //           <p className={styles.userInfo}>{item.email}</p>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     title: '真实姓名',
  //     dataIndex: 'realName',
  //     key: 'realName',
  //   },
  //   {
  //     title: '绑定的手机号',
  //     dataIndex: 'mobile',
  //     key: 'mobile',
  //   },
  //   {
  //     title: '经验值',
  //     dataIndex: 'expPoint',
  //     key: 'expPoint',
  //   },
  //   {
  //     title: '状态',
  //     dataIndex: 'status',
  //     key: 'status',
  //     render: (value:any) => {
  //       const stArr = ['未设置', '启用', '停用'];
  //       return stArr[value];
  //     },
  //   },
  // ];
  const filterForm = (
    <div>
      <FilterForm fields={fields} onFilter={(formData:any) => {
        console.info(formData);
        search(formData)
      }} />
      {/* <Form className="searchForm" layout="inline" form={form}>
      <Form.Item label="登录名" name="account_no">
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item label="手机号" name="mobile">
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item label="性别" name="gender">
        <Select style={{ width: 100 }} placeholder="请选择性别" allowClear>
          <Select.Option value={2}>女</Select.Option>
          <Select.Option value={1}>男</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="状态" name="status">
        <Select style={{ width: 100 }} placeholder="请选择状态" allowClear>
          <Select.Option value={2}>已停用</Select.Option>
          <Select.Option value={1}>正常</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            loading={loading}
            type="primary"
            onClick={() => {
              search({ current: 1});
            }}
          >
            查询
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
              search({ current: 1});
            }}
          >
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form> */}
    </div>
  );
  const [fileList, setFileList] = useState([
    // {
    //     uid: '-1',
    //     name: 'image.png',
    //     status: 'done',
    //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  const [imageUrl, setImageUrl] = useState('');
  // const getBase64 = (img:Blob, callback:Function) => {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // };
  // const handleChange = (info:any) => {
  //   if (info.file.status === 'uploading') {
  //     return;
  //   }
  //   setFileList(info?.fileList)
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url:string) => {
  //       setImageUrl(url);
  //     });
  //   }
  // };


  const beforeUpload = (file:File) => {
    return new Promise((resolve, reject) => {

      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error('只能上传JPG/PNG格式的文件!');
        return reject(false);
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error('上传图片不得大于2MB!');
        return reject(false);
      }

      return resolve(true)
    });
  };

  const onPreview = async (file:any) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    setImageUrl(src)
  };
  return (
    <Card
      title={filterForm}
    >
      {/* <Table
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        size="small"
        rowKey="id"
        scroll={{y:document.body.clientHeight- tableHeight - 186} }
        pagination={pagination}
        onChange={(values) => {
          console.info('changeValues', values);
          search(values);
        }}
      /> */}
      {/* <InputForm fields={fields2} onSubmit={(data) => {
                console.info("data=>", data);
            }} /> */}
      {fileList.map((item:any, index:number) => (item?.thumbUrl && <img key={index + 1} width="500" height="500" src={item?.thumbUrl} />))}

      <Form form={form}>
        <Form.Item name="images" valuePropName="images" label="相册" rules={[{required:true,message:'请选择上传文件'}]}>
          <CropAndUpload beforeUpload={beforeUpload} onPreview={onPreview} action={null} />
        </Form.Item>
        <Form.Item name="avatar" valuePropName="avatar" label="相册" rules={[{required:true,message:'请选择上传文件'}]}>
          <AvatarUpload beforeUpload={beforeUpload} onPreview={onPreview} />
        </Form.Item>
        <Button onClick={async () => {
          // const checkResult= await form.validateFields();
          const formFields = form.getFieldsValue();
          const formData = new FormData();
          Object.keys(formFields).forEach(key => {
            if(key!='images')
            formData.append(key, formFields[key]);
          });
          formData.append("file", formFields.images.file.originFileObj);
          console.info("formFields=>",formFields)
            postAndUpload('/api/v1/upload-test', formData).then(res => {
              console.info("res=>", res);
            }).catch(e => {
              console.info("e=>", e)
            })
         
        }}>确定</Button>
      </Form>
    </Card>
  );
};
export default WorkFlow;
