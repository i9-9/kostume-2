import React from 'react';
import Image from 'next/image';

const VideoHero = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:block relative group">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image 
            src="/temporary/temporary_redirect_desktop.jpg"
            alt="KOSTÜME Temporary Redirect"
            fill
            className="object-cover"
            priority
          />
        </div>
        <a
          href="https://eshop.kostumeweb.net/temporaryredirect"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full z-20"
          aria-label="Ver Temporary Redirect"
          style={{ background: 'rgba(0,0,0,0)', cursor: 'pointer' }}
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden relative group">
        <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
          <Image 
            src="/temporary/temporary_redirect_mobile.jpg"
            alt="KOSTÜME Temporary Redirect"
            fill
            className="object-cover"
            priority
          />
        </div>
        <a
          href="https://eshop.kostumeweb.net/temporaryredirect"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full z-20"
          aria-label="Ver Temporary Redirect"
          style={{ background: 'rgba(0,0,0,0)', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default VideoHero;
