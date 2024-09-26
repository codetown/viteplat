import React from 'react';
import { message, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
const {useState}=React;
export default function (props:any) {
  const { onChange } =props
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const getBase64 = (img:Blob, callback:Function) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleChange = (info:any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url:string) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  
  const beforeUpload = (file:any) => {
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
  
  return <Upload 
  className={styles.avatarUpload} 
  listType="picture-card"
  maxCount={1}  
  {...props} 
  // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  beforeUpload={beforeUpload} 
  onChange={onChange}>
    <PlusOutlined />
    <span>上传</span>
  </Upload>;
};
