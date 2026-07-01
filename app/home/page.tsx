"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Marquee from '../components/Marquee';
import Header from '../components/Header';
import VideoHero from '../components/VideoHero';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { useLocation } from '../context/LocationContext';
import menuItemsEs from '../data/es-menu'; 
import menuItemsEn from '../data/en-menu';
import { getEshopBase } from '../data/countries';

const ProductCarousel = dynamic(() => import('../components/ProductCarousel'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const PopupModal = dynamic(() => import('../components/PopupModal'), { ssr: false });

export interface MenuItemProps {
  href: string;
  label: string; 
  subcategories: string[];
  links: string[];
}

const marqueeByLang: Record<string, string> = {
  es: '15% OFF POR TRANSFERENCIA BANCARIA - HASTA 3 CUOTAS SIN INTERÉS · ',
  en: 'WORLDWIDE SHIPPING · ',
};

const Home: React.FC = () => {
  const { region, language } = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const externalLink = getEshopBase(region);
  const marqueeText = marqueeByLang[language] ?? marqueeByLang.en;
  const menu = language === 'es' ? menuItemsEs : menuItemsEn;

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
            "@type": "WebPage",
            name: "KOSTÜME Collections",
            description: "Explore KOSTÜME premium collections - Original ready-to-wear designed in Buenos Aires.",
            url: "https://kostumeweb.net/home",
            isPartOf: {
              "@id": "https://kostumeweb.net/#website"
            }
          }),
        }}
      />
      <motion.div 
        className='max-w-full min-h-screen overflow-x-hidden bg-white'
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Marquee marqueeText={marqueeText} />
        <div className="flex h-[100vh] min-h-0 w-full flex-col shrink-0">
          <Header />
          <div className="min-h-0 flex min-w-0 flex-1 flex-col">
            <VideoHero />
          </div>
        </div>
        <h1 className='bg-white text-black text-xs text-center font-bold p-4 my-4'>
          Original ready-to-wear designed in Buenos Aires. Made in Argentina
        </h1>
        <ProductCarousel />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Footer region={region} language={language} />
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
