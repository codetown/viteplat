// import React, { useEffect, useRef } from 'react';
// import Plyr from 'plyr';

// interface PlyrComponentProps {
//     videoId: string;
//     options?: Plyr.Options;
// }

// const PlyrComponent: React.FC<PlyrComponentProps> = ({ videoId, options }) => {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const plyrRef = useRef<Plyr | null>(null);

//     useEffect(() => {
//         if (videoRef.current) {
//             plyrRef.current = new Plyr(videoRef.current, options);
//         }

//         return () => {
//             // 组件卸载时销毁播放器实例
//             if (plyrRef.current) {
//                 plyrRef.current.destroy();
//             }
//         };
//     }, [options]);

//     return (
//         <div>
//             <video ref={videoRef} id={videoId} controls>
//                 <source src="path/to/video.mp4" type="video/mp4" />
//             </video>
//         </div>
//     );
// };

// export default PlyrComponent;
