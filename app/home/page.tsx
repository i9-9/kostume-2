"use client"

import React, { useEffect, useState } from 'react';
import Marquee from '../components/Marquee';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import menuItemsEs from '../data/es-menu'; 
import menuItemsEn from '../data/en-menu';
import Banner from '../components/Banner';
import TextBanner from '../components/TextBanner';
import PopupModal from '../components/PopupModal';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '../context/LocationContext';

export type Region = 'Argentina' | 'Worldwide';

export interface MenuItemProps {
  href: string;
  label: string; 
  subcategories: string[];
  links: string[];
}

const Home: React.FC = () => {
  const { region, language } = useLocation();
  const [deviceType, setDeviceType] = React.useState<'desktop' | 'mobile'>('desktop');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDeviceType('desktop');
      } else {
        setDeviceType('mobile');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const externalLinks: Record<Region, string> = {
    Argentina: 'https://eshop.kostumeweb.net/ar',
    Worldwide: 'https://eshop.kostumeweb.net/us',
  };

  const marqueeText: Record<Region, string> = {
    Argentina: '15% OFF POR TRANSFERENCIA BANCARIA - HASTA 3 CUOTAS SIN INTERÉS · ',
    Worldwide: 'WORLDWIDE SHIPPING · ',
  };

  const menuItem: Record<Region, MenuItemProps[]> = {
    Argentina: menuItemsEs,
    Worldwide: menuItemsEn 
  };
  
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Fashion",
            name: "KOSTÜME Collections",
            description: "Explore KOSTÜME premium collections - Original ready-to-wear designed in Buenos Aires.",
            url: "https://kostumeweb.net/home",
          }),
        }}
      />
      <motion.div 
        className='max-w-full min-h-screen bg-black'
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Marquee marqueeText={marqueeText[region]} />
        <Header />
        {/* <TextBanner text='( This is ) SALE ( 30% en items seleccionados ) ( Solo Online )' /> */}
        {/* <Banner 
          collection="collection1" 
          region={region}
          externalLinks={externalLinks} 
          deviceType={deviceType} 
        /> */}
        <Banner 
          collection="hero" 
          region={region}
          externalLinks={externalLinks} 
          deviceType={deviceType} 
        />
        <p className='bg-[#121212] text-xs text-center font-bold p-4 my-4'>
          Original ready-to-wear designed in Buenos Aires. Made in Argentina
        </p>
        <Gallery link={externalLinks[region]} location={region === 'Argentina' ? 'ar' : 'us'} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </motion.div>
      
      <PopupModal 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </>
  );
}

export default Home;
