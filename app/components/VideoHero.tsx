import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Video */}
      <div className="hidden md:block relative group" style={{ paddingTop: '56.25%' }}>
        <iframe 
          src="https://player.vimeo.com/video/1079929666?title=0&byline=0&portrait=0&controls=0&muted=1&autoplay=1&loop=1&quality=1080p&background=1"
          className="absolute top-0 left-0 w-full h-full object-cover" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        <a
          href="https://eshop.kostumeweb.net/ar/49aw25"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full z-20"
          aria-label="Ver colección #49AW25"
          style={{ background: 'rgba(0,0,0,0)', cursor: 'pointer' }}
        />
      </div>

      {/* Mobile Video */}
      <div className="block md:hidden relative group" style={{ paddingTop: '133.33%' }}>
        <iframe 
          src="https://player.vimeo.com/video/1082597488?title=0&byline=0&portrait=0&controls=0&muted=1&autoplay=1&loop=1&quality=720p&background=1"
          className="absolute top-0 left-0 w-full h-full object-cover" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        <a
          href="https://eshop.kostumeweb.net/ar/49aw25"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full z-20"
          aria-label="Ver colección #49AW25"
          style={{ background: 'rgba(0,0,0,0)', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default VideoHero;
