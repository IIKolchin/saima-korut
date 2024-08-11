import React from 'react';

type VideoComponentProps = {
  src: string;
  width?: string;
  height?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const VideoComponent: React.FC<VideoComponentProps> = ({
  src,
  width = '100%',
  height = 'auto',
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <video
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
