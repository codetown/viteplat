import { useState, useEffect } from 'react';
import { Card, message, Form, Button } from 'antd';
import FilterForm from '@/components/FilterForm';
import CropAndUpload from '@/components/CropAndUpload';
import { postUpload } from '@/services/common';
const WorkFlow = () => {
  const [form] = Form.useForm();
  const search = (params:any) => {
    console.info("search=>",params)
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
    name: "createdAt",
    type: "rangePicker"
  },
  ];
  const filterForm = (
    <div>
      <FilterForm fields={fields} onFilter={(formData:any) => {
        console.info(formData);
        search(formData)
      }} />
    </div>
  );
  const [imageUrl, setImageUrl] = useState('');
  const getBase64 = (img:Blob, callback:Function) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleChange = (info:any) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url:string) => {
        setImageUrl(url);
      });
    }
  };


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
      getBase64(file, (url:string) => {
        setImageUrl(url);
      });
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
  const customRequest=async (option:any)=>{
    console.info("option=>",option,imageUrl);
    option.onSuccess(imageUrl)
    // const {file}=option;
    // const formData=new FormData();
    // formData.append("file",file);
    // const res=await postAndUpload('/api/v1/upload-test',formData);
    // console.info("res=>",res);
  }
  return (
    <Card
      title={filterForm}
    >
      {/* {imageUrl&&<img src={imageUrl} alt="" width="500" height="500"/>} */}
      {/* {fileList.map((item:any, index:number) => (item?.thumbUrl && <img key={index + 1} width="200" height="200" src={item?.thumbUrl} />))} */}

      <Form form={form}>
        <Form.Item name="images" valuePropName="images" label="相册" rules={[{required:true,message:'请选择上传文件'}]}>
          <CropAndUpload valuePropName="images" beforeUpload={beforeUpload} onPreview={onPreview} onChange={handleChange} customRequest={customRequest} />
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
            postUpload('/api/v1/upload-test', formData).then(res => {
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
