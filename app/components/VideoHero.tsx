import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocation } from '../context/LocationContext';

const VideoHero = () => {
  const { region } = useLocation();
  const location = region === 'Argentina' ? 'ar' : 'us';
  const rainCapsuleLink = `https://eshop.kostumeweb.net/${location}/rain-capsule`;

  return (
    <div className="relative w-full">
      <div className="hidden md:block relative group">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <iframe
            src="https://player.vimeo.com/video/1111419255?autoplay=1&muted=1&loop=1&controls=0&background=1&autopause=0"
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="KOSTÜME Hero Video"
          />
          <a 
            href={rainCapsuleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-[5] block"
            aria-label="Ir a Rain Capsule"
          />
        </div>
      </div>

      <div className="block md:hidden relative group">
        <a 
          href={rainCapsuleLink}
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
            >
              <source src="/video/hero_mobile.mp4" type="video/mp4" />
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <p className="text-white text-center">Video no disponible</p>
              </div>
            </video>
          </div>
        </a>
      </div>
    </div>
  );
}

export default VideoHero;
