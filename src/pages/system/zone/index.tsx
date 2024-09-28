import { useState } from 'react'
import { Card, message } from 'antd'
import InputForm from '@/components/InputForm'

export default function Zone() {
  const [imageUrl, setImageUrl] = useState('')
  const getBase64 = (img: Blob, callback: Function) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  const onChange = (info: any) => {
    if (info.file.status === 'uploading') {
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url: string) => {
        setImageUrl(url)
      })
    }
  }

  const beforeUpload = (file: File) => {
    return new Promise((resolve, reject) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

      if (!isJpgOrPng) {
        message.error('只能上传JPG/PNG格式的文件!')
        return reject(false)
      }

      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isLt2M) {
        message.error('上传图片不得大于2MB!')
        return reject(false)
      }
      getBase64(file, (url: string) => {
        setImageUrl(url)
      })
      return resolve(true)
    })
  }

  const onPreview = async (file: any) => {
    let src = file.url

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)

        reader.onload = () => resolve(reader.result)
      })
    }

    setImageUrl(src)
  }
  const customRequest = async (option: any) => {
    console.info('option=>', option, imageUrl)
    option.onSuccess(imageUrl)
    // const {file}=option;
    // const formData=new FormData();
    // formData.append("file",file);
    // const res=await postAndUpload('/api/v1/upload-test',formData);
    // console.info("res=>",res);
  }
  const fields = [
    {
      label: '头像',
      name: 'avatar',
      type: 'image',
      maxCount: 1,
      rules:[{required:true,message:'请上传头像'}],
      beforeUpload,
      customRequest,
      onChange,
      onPreview
    },
    {
      label: '昵称',
      name: 'nickname',
      type: 'input',
      rules:[{required:true,message:'请输入昵称'}],
    },
    {
      label: '手机号',
      name: 'mobile',
      type: 'input',
      rules:[{required:true,message:'请输入手机号'}],
    },
    {
      label: '联系邮箱',
      name: 'email',
      type: 'input',
      rules:[{required:true,message:'请输入联系邮箱'}],
    },
    {
      label: '状态',
      name: 'status',
      type: 'select',
      options: [
        { label: '未启用', value: 0 },
        { label: '已启用', value: 1 }
      ]
    },
    {
      label: '截至日期',
      name: 'deadline',
      type: 'datePicker'
    },
    {
      label: '创建日期',
      name: 'createdTime',
      type: 'rangePicker'
    }
  ];
  
  return (
    <Card>
      <InputForm
        fields={fields}
        onSubmit={(data: any) => {
          console.info('data=>', data)
        }}
      />
    </Card>
  )
}
