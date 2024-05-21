// VideoPlayer.tsx
import { useRef } from 'react';
import { useVideoPlayer } from '@/components/VideoJS/hook';
import 'video.js/dist/video-js.css';
import { Button, Space } from 'antd';

export default function () {
  const videoRef = useRef<any>(null);
  const { play, pause, stop, setSrc, mute, unmute, isPlaying } = useVideoPlayer(videoRef);

  // 示例：切换视频源

  const handleSourceChange = () => {
    console.info("change");
    setSrc('https://vip.lz-cdn.com/20220422/9831_0b302b20/index.m3u8', 'application/x-mpegURL');
    play(); // 自动播放新视频
  };

  return (
    <div>
      <div data-vjs-player>
        <div ref={videoRef} />
      </div>
      <div>
        <Space>
          <Button onClick={play}>播放</Button>
          <Button onClick={pause}>暂停</Button>
          <Button onClick={stop}>停止</Button>
          <Button onClick={mute}>静音</Button>
          <Button onClick={unmute}>取消静音</Button>
          <Button onClick={handleSourceChange}>更改</Button>
        </Space>
      </div>
      <p>Is Playing: {isPlaying() ? '正在播放' : '未播放'}</p>
    </div>
  );
};