// useVideoPlayer.ts
import { useState, useEffect } from 'react';
import videojs from 'video.js';
import { videojsOptions } from './videojsOptions';
import Player from 'video.js/dist/types/player';

interface VideoPlayerHook {
  player: Player | null;
  play: () => void;
  pause: () => void;
  dispose: () => void;
  seek: (seconds: number) => void;
  mute: () => void;
  unmute: () => void;
}

export const useVideoPlayer = (videoRef: React.MutableRefObject<HTMLVideoElement | null>): VideoPlayerHook => {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    let instance: Player | null = null;

    if (videoRef.current) {
      instance = videojs(videoRef.current, videojsOptions, () => {
        console.log('Video.js player is ready');
      });

      instance.on('dispose', () => {
        setPlayer(null);
      });
    }

    setPlayer(instance);

    return () => {
      if (instance) {
        instance.dispose();
      }
    };
  }, [videoRef]);

  const play = () => player?.play();
  const pause = () => player?.pause();
  const dispose = () => player?.dispose();
  const seek = (seconds: number) => player?.currentTime(seconds);
  const mute = () => player?.muted(true);
  const unmute = () => player?.muted(false);

  return { player, play, pause, dispose, seek, mute, unmute };
};