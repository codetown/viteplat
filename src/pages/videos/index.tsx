import { useEffect, useRef } from 'react';
import { Card, Modal, Form, Input, List, message } from 'antd';
import classes from './index.module.scss';
import VideoJsPlayer from '@/components/VideoJS';
import useVideoStore from '@/stores/video';
import { getVideoDetail } from '@/services/videos';
const { Search } = Input;
const FormItem = Form.Item

export default function () {
  const { searchVideos, loading, items, total, current, pageSize, currentVideo, showPlayer, setState } = useVideoStore((state: any) => state)
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
    }
    // ,
    // sources: [ // 视频来源路径
    //   {
    //     src: '//vjs.zencdn.net/v/oceans.mp4',
    //     type: 'video/mp4',
    //     poster: '//vjs.zencdn.net/v/oceans.png'
    //   }
    // ]
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
    defaultCurrent: 1,
    defaultPageSize: 24,
    showSizeChanger: true,
    pageSizeOptions: [24, 16, 12],
    pageSize,
    current,
    total,
    showTotal: (total: number) => `共${total}条`,
    onChange: (current: any, pageSize: number) => {
      const newPageInfo = { current, pageSize };
      search(newPageInfo);
    },
  };
  const [form] = Form.useForm();
  const search = (params: any) => {
    if (loading) {
      return;
    }
    searchVideos(params)
  };
  const preview = async (item: any) => {
    const detailRes = await getVideoDetail(item.id);
    if (detailRes.code != 200) {
      return
    }
    const videoUrl = detailRes?.data?.vfiles?.[0]?.fileURL;
    console.info(detailRes?.data, item);
    if (videoUrl) {
      if (playerRef?.current) {
        const newSrc = {
          src: videoUrl,
          type: 'application/x-mpegURL',
          poster: item.poster
        };
        console.info(newSrc)
        playerRef?.current?.src(newSrc);
        playerRef?.current?.play();
        playerRef?.current?.currentTime(0);
        setState({ currentVideo: detailRes?.data, showPlayer: true })
      } else {
        message.error('播放器未初始化')
      }
    } else {
      message.error('播放地址错误！');
    }
  };

  useEffect(() => {
    search({});
  }, []);
  const cardList = items && (
    <List
      rowKey="id"
      loading={loading}
      pagination={pageConst}
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
          <a className={classes.videoItem} title={item.title} onClick={() => preview(item)}>
            <img title={item.title} alt={item.title} src={item.poster} />
            <span>{item.title}</span>
          </a>
        </List.Item>
      )}
    />
  );
  return (
    <div className={classes.coverCardList}>
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
                search({ title: value, pageNo: 1, pageSize: 24 });
              }}
            />
          </FormItem>
        </Form>
      </Card>
      <div className={classes.cardList}>{cardList}</div>
      <Modal className={classes.preview} width={960} open={showPlayer} keyboard={false} maskClosable={false}
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
