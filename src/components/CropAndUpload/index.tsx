import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
export default function CropAndUpload(props: any) {
  return (
    <ImgCrop rotationSlider={props?.rotate} beforeCrop={props?.beforeUpload}>
      <Upload listType="picture-card" {...props}>
        + Upload
      </Upload>
    </ImgCrop>
  )
}
