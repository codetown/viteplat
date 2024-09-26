import React from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
export default function (props) {
  return <ImgCrop rotate={props?.rotate} beforeCrop={props?.beforeUpload}>
    <Upload
      listType="picture-card"
      {...props}
    >
      + Upload
    </Upload>
  </ImgCrop>;
};
