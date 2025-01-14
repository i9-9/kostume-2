"use client"

import React, { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import VideoHero from '../components/VideoHero';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import menuItemsEs from '../data/es-menu'; 
import menuItemsEn from '../data/en-menu';
import Banner from '../components/Banner';
import TextBanner from '../components/TextBanner';

export type Region = 'Argentina' | 'Worldwide';

export interface MenuItemProps {
  href: string;
  label: string; 
  subcategories: string[];
  links: string[];
}

const Home: React.FC = () => {
  const [region, setRegion] = useState<Region>('Argentina');
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const savedRegion = localStorage.getItem('region') as Region | null;
    if (savedRegion) {
      setRegion(savedRegion);
    } else {
      const defaultRegion: Region = 'Argentina';
      setRegion(defaultRegion);
      localStorage.setItem('region', defaultRegion);
    }

    // Detect device type based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDeviceType('desktop');
      } else {
        setDeviceType('mobile');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // Call once on mount to set initial device type

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const externalLinks: Record<Region, string> = {
    Argentina: 'https://eshop.kostumeweb.net/ar',
    Worldwide: 'https://eshop.kostumeweb.net/us',
  };

  const marqueeText: Record<Region, string> = {
    Argentina: '3 Y 6 CUOTAS SIN INTERES · ',
    Worldwide: 'WORLDWIDE SHIPPING · ',
  };

  const menuItem: Record<Region, MenuItemProps[]> = {
    Argentina: menuItemsEs,
    Worldwide: menuItemsEn 
  };

  return (
    <div className='max-w-full min-h-screen bg-black'>
        <Marquee marqueeText={marqueeText[region]} />
        <Header link={externalLinks[region]} menu={menuItem[region]} />
        <TextBanner text='( This is ) SALE ( 30% en items seleccionados ) ( Solo Online )' />
        {/* <Banner collection="collection1" 
          region={region}
          externalLinks={externalLinks} 
          text="#48SS25" 
          deviceType={deviceType} /> */}
        <p className='bg-[#121212] text-xs text-center font-bold p-4 my-4'>
          Original ready-to-wear designed in Buenos Aires. Made in Argentina
        </p>
        <Gallery link={externalLinks[region]} />
        <Footer />
    </div>
  );
}

export default Home;
