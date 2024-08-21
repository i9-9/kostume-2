import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <iframe 
        src="https://player.vimeo.com/video/1000538036?title=0&byline=0&portrait=0&controls=0&muted=1&autoplay=1&loop=1&quality=1080p"
        className="absolute top-0 left-0 w-full h-full" 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default VideoHero;
