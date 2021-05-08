import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    render() {
    const opts = {
      height: '550',
      width: '1255',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props
    return <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />;
  }
}

export default Video; 