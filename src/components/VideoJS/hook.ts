// useVideoPlayer.ts
import { useState, useEffect } from 'react';
import videojs from 'video.js';
import videojsOptions from './options'; // 假设你已经定义了Video.js的默认配置
import Player from 'video.js/dist/types/player';

interface VideoPlayerControls {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSrc: (src: string, type?: string) => void;
  mute: () => void;
  unmute: () => void;
  isPlaying: () => boolean;
}

/**
 * 使用Video.js的React Hook
 * @param videoRef 视频元素的引用
 * @returns 包含播放控制方法的对象
 */
export const useVideoPlayer = (videoRef: React.MutableRefObject<HTMLVideoElement | null>): VideoPlayerControls => {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    let instance: Player | null = null;

    // 初始化Video.js播放器
    if (videoRef.current) {
      instance = videojs(videoRef.current, videojsOptions, () => {
        console.log('Video.js player is ready.');
      });
      setPlayer(instance);
    }

    // 清理函数
    return () => {
      if (instance) {
        instance.dispose();
        setPlayer(null);
      }
    };
  }, [videoRef, videojsOptions]);

  const play = () => player?.play();
  const pause = () => player?.pause();
  const stop = () => {
    player?.pause();
    player?.currentTime(0);
  };
  const setSrc = (src: string, type: string = 'video/mp4') => {
    if (player) {
      player.src({ src, type });
      player.ready(() => player.load());
      player.on('loadedmetadata', () => {
        if (player.autoplay()) {
          play();
        }
      });
    }
  };
  const mute = () => player?.muted(true);
  const unmute = () => player?.muted(false);
  const isPlaying = () => player?.paused() === false;

  return { play, pause, stop, setSrc, mute, unmute, isPlaying };
};