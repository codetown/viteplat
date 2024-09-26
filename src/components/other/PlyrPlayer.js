import { useEffect, useRef } from "react";
export default (props) => {

//   const { options, onReady } = props;

//   useEffect(() => {
//     // make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       const videoElement = videoRef.current;
//       if (!videoElement) return;

//       const player = playerRef.current = videojs(videoElement, options, () => {
//         console.log("player is ready");
//         onReady && onReady(player);
//       });
//     } else {
//       // you can update player here [update player through props]
//       // const player = playerRef.current;
//       // player.autoplay(options.autoplay);
//       // player.src(options.sources);
//     }
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <video
//   ref={usePlyr(ref, {
//     ...useHls(hlsSource, options),
//     source,
//   })}
//   className="plyr-react plyr"
// />
//   );
}