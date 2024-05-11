// VideoPlayer.tsx
import { useRef, useState } from 'react';
import { useVideoPlayer } from './hook';
import '@videojs/themes/dist/forest/index.css';

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
      <video ref={videoRef} className="video-js" />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
      <button onClick={mute}>Mute</button>
      <button onClick={unmute}>Unmute</button>
      <button onClick={handleSourceChange}>Change Video</button>
      <p>Is Playing: {isPlaying() ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default VideoPlayer;