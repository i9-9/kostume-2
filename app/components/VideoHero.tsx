import React from 'react';
import { useLocation } from '../context/LocationContext';

const DESKTOP_VIDEO = '/img/feb26/video_hero/desktop.mp4';
const MOBILE_VIDEO = '/img/feb26/video_hero/mobile.mp4';

const VideoHero = () => {
  const { region } = useLocation();
  const heroLink = region === 'Argentina'
    ? 'https://eshop.kostumeweb.net/51aw26/ver-51aw26/'
    : 'https://eshop.kostumeweb.net/us/51aw26/ver-51aw26/';

  return (
    <div className="relative w-full">
      {/* Desktop hero */}
      <div className="hidden md:block relative group">
        <a 
          href={heroLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="KOSTÜME Hero Video"
            >
              <source src={DESKTOP_VIDEO} type="video/mp4" />
            </video>
          </div>
        </a>
      </div>

      {/* Mobile hero */}
      <div className="block md:hidden relative group">
        <a 
          href={heroLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="KOSTÜME Hero Video"
            >
              <source src={MOBILE_VIDEO} type="video/mp4" />
            </video>
          </div>
        </a>
      </div>
    </div>
  );
}

export default VideoHero;
