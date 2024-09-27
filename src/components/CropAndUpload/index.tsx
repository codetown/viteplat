import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import styles from './index.module.scss'
export default function CropAndUpload(props: any) {
  return (
    <ImgCrop rotationSlider={props?.rotate} beforeCrop={props?.beforeUpload}>
      <Upload listType="picture-card" maxCount={1} className={styles.cropAndUpload} {...props} >
        + 上传图片
      </Upload>
    </ImgCrop>
  )
}
