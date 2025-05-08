import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Video */}
      <div className="hidden md:block relative" style={{ paddingTop: '56.25%' }}>
        <iframe 
          src="https://player.vimeo.com/video/1079929666?title=0&byline=0&portrait=0&controls=0&muted=1&autoplay=1&loop=1&quality=1080p&background=1"
          className="absolute top-0 left-0 w-full h-full object-cover" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      {/* Mobile Video */}
      <div className="block md:hidden relative" style={{ paddingTop: '133.33%' }}>
        <iframe 
          src="https://player.vimeo.com/video/1082597488?title=0&byline=0&portrait=0&controls=0&muted=1&autoplay=1&loop=1&quality=720p&background=1"
          className="absolute top-0 left-0 w-full h-full object-cover" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default VideoHero;
