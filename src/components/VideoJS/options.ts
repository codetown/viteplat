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
export default videoJsOptions