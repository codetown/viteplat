// VideoPlayer.tsx
import { useRef, useState } from 'react';
import { useVideoPlayer } from './hook';
import '@videojs/themes/dist/forest/index.css';
import { Button } from 'antd';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { play, pause, stop, setSrc, mute, unmute, isPlaying } = useVideoPlayer(videoRef);

  // 示例：切换视频源
  const [videoSource, setVideoSource] = useState<string>('path/to/your/video.mp4');

  const handleSourceChange = () => {
    setVideoSource('path/to/new/video.mp4');
    setSrc(videoSource);
    play(); // 自动播放新视频
  };

  return (
    <div>
      <div><video ref={videoRef} className="video-js" /></div>
      <div>
        <Button onClick={play}>播放</Button>
        <Button onClick={pause}>Pause</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={mute}>Mute</Button>
        <Button onClick={unmute}>Unmute</Button>
        <Button onClick={handleSourceChange}>更改</Button>
      </div>
      <p>Is Playing: {isPlaying() ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default VideoPlayer;