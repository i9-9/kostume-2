"use client";

import React from 'react';
import banner from '../data/banner';

interface BannerProps {
  region: 'Argentina' | 'Worldwide';
  externalLinks: Record<'Argentina' | 'Worldwide', string>;
}

const Banner: React.FC<BannerProps> = ({ region, externalLinks }) => {
  return (
    <div className="px-4 lg:px-8 my-4">
      <div className="block lg:hidden">
        {banner.mobile.map((image, index) => (
          <a
            key={index}
            href={`${externalLinks[region]}/${image.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.src} alt={image.title} className="w-full h-auto" />
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        {banner.desktop.map((image, index) => (
          <a
            key={index}
            href={`${externalLinks[region]}/${image.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.src} alt={image.title} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
