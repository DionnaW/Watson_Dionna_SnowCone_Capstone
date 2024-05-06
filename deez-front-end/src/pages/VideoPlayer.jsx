import React from 'react';
import ReactPlayer from 'react-player';
import Video from './assets/video,mp4';

function VideoPlayer() {
  return (
    <video src="./src/assets/video.mp4" width="600" height="360" controls>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;