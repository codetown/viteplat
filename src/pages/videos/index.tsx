import { useEffect, useRef } from 'react';
import { Card, Modal, Form, Input, List, message } from 'antd';
import styles from './index.module.scss';
import VideoJsPlayer from '@/components/VideoJsPlayer';
import useVideoStore from '@/stores/video';
const { Search } = Input;
const FormItem = Form.Item

export default function () {
  const { searchVideos,loading, items, total, current, pageSize, getCurrentVideo, currentVideo, showPlayer, setState } = useVideoStore((state: any) => state)
  const playerRef = useRef<any>();

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    preload: 'auto',
    fluid: true,
    playbackRates: [1, 1.5, 2],
    controlBar: {
      volumePanel: {
        inline: true
      },
      fullscreenToggle: true,
      currentTimeDisplay: true,
      timeDivider: true,
      durationDisplay: true,
      pictureInPictureToggle: true,
    },
    sources: [ // 视频来源路径
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
        poster: '//vjs.zencdn.net/v/oceans.png'
      }
    ]
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  const pageConst = {
    showSizeChanger: true,
    pageSizeOptions: [24, 16, 12],
    showTotal: (total: number) => `共${total}条`,
    onChange: (current: any, pageSize: number) => {
      const newPageInfo = { total, current, pageSize };
      if (pageSize !== 24) {
        newPageInfo.current = 1;
      }
      search(newPageInfo);
    },
  };
  const [form] = Form.useForm();
  const search = (params: any) => {
    if (loading) {
      return;
    }
    const pageParams = { page_no: params.current || 1, page_size: params.pageSize || 24 };
    searchVideos({...pageParams,params})
  };
  const preview = async (item: any) => {
    const detialRes = await getCurrentVideo({ id: item.id });
    const videoUrl = detialRes?.data?.vfiles?.[0]?.fileURL;
    if (videoUrl) {
      if (playerRef?.current) {
        playerRef?.current?.src(videoUrl);
        playerRef?.current?.play();
        playerRef?.current?.currentTime(0);
      } else {
        message.error('播放器未初始化')
        setState({ showPlayer: false })
      }
    } else {
      message.error('播放地址错误！');
      setState({ showPlayer: false })
    }
  };

  useEffect(() => {
    search({});
  }, []);
  const cardList = items && (
    <List
      rowKey="id"
      loading={loading}
      pagination={{ ...pageConst, total, current, pageSize }}
      grid={{
        gutter: 16,
        xs: 2,
        sm: 3,
        md: 4,
        lg: 6,
        xl: 6,
        xxl: 8,
      }}
      dataSource={items}
      renderItem={(item: any) => (
        <List.Item>
          {/* <Card className={styles.card} bodyStyle={{ padding: '0 0.5em' }}
            cover={
              
            } /> */}
          <a className={styles.videoItem} title={item.title} onClick={() => preview(item)}>
            <img title={item.title} alt={item.title} src={item.poster} />
            <span>{item.title}</span>
          </a>
        </List.Item>
      )}
    />
  );
  // const formItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //     },
  //     sm: {
  //       span: 16,
  //     },
  //   },
  // };
  return (
    <div className={styles.coverCardList}>
      <Card bordered={false}>
        <Form
          form={form}
          layout="inline"
        >
          <FormItem name="title" style={{ width: 500, margin: '0 auto' }}>
            <Search
              placeholder="请输入搜索关键字"
              allowClear
              enterButton="搜索"
              size="large"
              loading={loading}
              onSearch={(value) => {
                window.console.info('value', value);
                search({ title: value });
              }}
            />
          </FormItem>
          {/*
          <FormItem style={{ width: 500, margin: "0 auto 20px auto" }}>
            <Search
              placeholder="请输入搜索关键字"
              allowClear
              enterButton="搜索"
              size="large"
            />
          </FormItem>
           <StandardFormRow
            title="所属类目"
            block
            style={{
              paddingBottom: 11,
            }}
          >
            <FormItem name="category" style={{ textAlign: 'left' }}>
              <TagSelect expandable>
                <TagSelect.Option value="cat1">类目一</TagSelect.Option>
                <TagSelect.Option value="cat2">类目二</TagSelect.Option>
                <TagSelect.Option value="cat3">类目三</TagSelect.Option>
                <TagSelect.Option value="cat4">类目四</TagSelect.Option>
                <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                <TagSelect.Option value="cat7">类目七</TagSelect.Option>
                <TagSelect.Option value="cat8">类目八</TagSelect.Option>
                <TagSelect.Option value="cat9">类目九</TagSelect.Option>
                <TagSelect.Option value="cat10">类目十</TagSelect.Option>
                <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
                <TagSelect.Option value="cat12">类目十二</TagSelect.Option>
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="其它选项" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} style={{ textAlign: 'left' }} label="作者" name="author">
                  <Select
                    placeholder="不限"
                    style={{
                      maxWidth: 200,
                      width: '100%',
                    }}
                  >
                    <Option value="lisa">王昭君</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} style={{ textAlign: 'left' }} label="好评度" name="rate">
                  <Select
                    placeholder="不限"
                    style={{
                      maxWidth: 200,
                      width: '100%',
                    }}
                  >
                    <Option value="good">优秀</Option>
                    <Option value="normal">普通</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow> */}
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
      <Modal className={styles.preview} width={960} open={showPlayer} 
      forceRender={true} title={currentVideo?.title || ''} 
      onCancel={() => { 
        playerRef?.current?.pause(); 
        setState({ showPlayer: false });
        }} footer={null}>
        <VideoJsPlayer options={videoJsOptions} onReady={handlePlayerReady} />
      </Modal>
    </div>
  );
}
