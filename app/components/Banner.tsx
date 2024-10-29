"use client"

import React, { useEffect, useState } from 'react';
import banner from '../data/banner';

const Banner: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = isMobile ? banner.mobile : banner.desktop;

  return (
    <div className="px-4 lg:px-8 my-4">     
      {images.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
          <img src={image.src} alt={image.title} className="w-full h-auto" />
        </a>
      ))}
    </div>
  );
};

export default Banner;
