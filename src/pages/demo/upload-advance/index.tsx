import { UploadOutlined } from '@ant-design/icons'
import { Button, Card, Col, List, Progress, Row, Upload, UploadFile } from 'antd'
import { useEffect, useState } from 'react'

const CHUNK_SIZE: number = 4096 * 512
// 拆分文件

const getChunkList = (file: File, size: number = CHUNK_SIZE) => {
  const fileChunkList = []
  let offset: number = 0
  while (offset <= file.size) {
    let end = offset + size
    if (end > file.size) {
      end = file.size
    }
    const chunk = file.slice(offset, end)
    fileChunkList.push({ index: fileChunkList.length, offset, endTag: end, chunkSize: end - offset, chunk })
    offset += size
  }
  return fileChunkList
}

const fileList: UploadFile[] = [
  // {
  //   uid: '0',
  //   name: 'xxx.png',
  //   status: 'uploading',
  //   percent: 33,
  // },
  // {
  //   uid: '-1',
  //   name: 'yyy.png',
  //   status: 'done',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // },
  // {
  //   uid: '-2',
  //   name: 'zzz.png',
  //   status: 'error',
  // },
]
export default function UploadAdvance() {
  // const [form] = Form.useForm()

  // const onFinish = (values: any) => {
  //   console.log('Received values of form: ', values)
  // }
  const [files, setFiles] = useState([{ fileName: '大文件X', percent: 1.23, status: 'stop' }])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFiles((pervFiles) => {
        const newFiles = [...pervFiles]
        if (newFiles[0].percent < 100) {
          newFiles[0].percent += 0.13
        } else {
          clearInterval(timer)
        }
        return newFiles
      })
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Card title="高级上传">
      <Row gutter={24}>
        <Col span={12}>
          <Upload
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[...fileList]}
            beforeUpload={(file) => {
              const chunks = getChunkList(file)
              const formData = new FormData()

              // const fileOb = {
              //   uid: "rc-upload-1688109952269-3",
              //   lastModified: 1688088612188,
              //   lastModifiedDate: "",
              //   name: "b61c54746bea4.webp",
              //   size: 12364,
              //   type: "image/webp",
              //   webkitRelativePath: ""
              // }
              for (let i = 0; i < chunks.length; i++) {
                formData.append('index', `${chunks[i].index}`)
                formData.append('fileName', file.name)
                formData.append('fileHash', `${file.size}`)
                formData.append('chunkHash', `${chunks[i].chunkSize}`)
                formData.append('chunkSize', `${chunks[i].chunkSize}`)
                formData.append('file', `${chunks[i].chunk}`)
                break
              }
              console.info(formData, 'formData')
              fetch('/api/v1/upload-chunk', {
                method: 'POST',
                body: formData
              }).then((res) => {
                console.info('res=>', res)
              })
              return false
            }}
            onChange={(info) => {
              console.info('info=>', info)
            }}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Col>
        <Col span={12}>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            variant
            dataSource={files}
            renderItem={(item) => (
              <List.Item>
                <Progress percent={Number(item.percent.toFixed(2))} />
                <Button>暂停</Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Card>
  )
}
