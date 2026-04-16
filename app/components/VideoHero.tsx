import React from 'react';
import { useLocation } from '../context/LocationContext';

const VIMEO_VIDEO_ID = '1183457699';
const VIMEO_EMBED_URL = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0`;

/** Zoom extra hacia el centro: recorta bandas del player (letterbox) que quedan dentro del iframe. */
const ZOOM_DESKTOP = 1.14;
const ZOOM_MOBILE = 1.12;

/** 16:9 video cubriendo un área landscape (desktop) */
const iframeCoverDesktop: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100vw',
  height: '56.25vw',
  minWidth: '100%',
  minHeight: '100%',
  transform: `translate(-50%, -50%) scale(${ZOOM_DESKTOP})`,
  transformOrigin: 'center center',
  border: 0,
};

/** 16:9 video cubriendo un marco vertical 9:16 (mobile): ancho = (16/9)/(9/16) × 100% del ancho del marco */
const iframeCoverMobilePortrait: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '100%',
  width: 'calc(100% * 256 / 81)',
  maxWidth: 'none',
  transform: `translate(-50%, -50%) scale(${ZOOM_MOBILE})`,
  transformOrigin: 'center center',
  border: 0,
};

const VideoHero = () => {
  const { region } = useLocation();
  const heroLink = region === 'Argentina'
    ? 'https://eshop.kostumeweb.net/51aw26/ver-51aw26/'
    : 'https://eshop.kostumeweb.net/us/51aw26/ver-51aw26/';

  const iframeCommon = {
    src: VIMEO_EMBED_URL,
    title: 'KOSTÜME Hero Video',
    allow: 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media',
    referrerPolicy: 'strict-origin-when-cross-origin' as const,
    'aria-label': 'KOSTÜME Hero Video',
    className: 'pointer-events-none max-w-none',
  };

  return (
    <div className="relative h-full min-h-0 w-full flex-1">
      {/* Mobile: marco vertical 9:16 + video 16:9 en modo cover */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black md:hidden">
        <a
          href={heroLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-full max-h-full w-full items-center justify-center"
        >
          <div className="relative aspect-[9/16] h-full w-auto max-w-full overflow-hidden bg-black">
            <iframe {...iframeCommon} style={iframeCoverMobilePortrait} />
          </div>
        </a>
      </div>

      {/* Desktop: área flexible + cover landscape */}
      <div className="absolute inset-0 hidden overflow-hidden bg-black md:block">
        <a
          href={heroLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 block"
        >
          <iframe {...iframeCommon} style={iframeCoverDesktop} />
        </a>
      </div>
    </div>
  );
};

export default VideoHero;
