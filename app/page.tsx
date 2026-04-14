'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from './context/LocationContext';

export default function Home() {
  const { setRegion } = useLocation();

  console.log('[Landing] Component mounted/rendered');

  useEffect(() => {
    console.log('[Landing] useEffect running');

    try {
      let visitCount = 0;
      let region = null;

      try {
        visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
        region = localStorage.getItem('region');
      } catch (e) {
        // localStorage not available (incognito mode)
        console.warn('localStorage not available');
      }

      if (region && visitCount > 0) {
        visitCount += 1;
        try {
          localStorage.setItem('visitCount', visitCount.toString());
        } catch (e) {
          // Ignore localStorage errors
        }

        if (visitCount % 5 === 0) {
          try {
            localStorage.setItem('visitCount', '0');
          } catch (e) {
            // Ignore localStorage errors
          }
        } else {
          window.location.href = '/home/';
        }
      } else {
        visitCount += 1;
        try {
          localStorage.setItem('visitCount', visitCount.toString());
        } catch (e) {
          // Ignore localStorage errors
        }
      }
    } catch (error) {
      console.error('Error handling visit count:', error);
    }
  }, []);

  const handleSelection = (selectedRegion: "Argentina" | "Worldwide") => {
    console.log('[Landing] Button clicked:', selectedRegion);

    // Update the context state first - this ensures immediate state update
    setRegion(selectedRegion);
    console.log('[Landing] setRegion called');

    // Verify localStorage was updated
    const stored = localStorage.getItem('region');
    console.log('[Landing] localStorage after setRegion:', stored);

    // Navigate immediately - use window.location for static export
    console.log('[Landing] Navigating to /home/');
    window.location.href = '/home/';
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <motion.main 
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeVariants}
    >
      <div className="flex flex-col md:flex-row justify-center items-center text-title">
        <h1 className="title flex flex-col md:flex-row items-center">
          <span className="title">THIS</span>
          <span className="title">IS</span>
          <span className="title">KOSTÜME</span>
        </h1>
      </div>
      <motion.div
        className="flex justify-center my-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src="/img/feb26/location.jpg"
          alt="Location"
          width={400}
          height={300}
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.div 
        className="flex flex-col md:flex-row justify-between mt-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <button 
          onClick={() => handleSelection('Argentina')} 
          className="link-location mb-4 md:mb-0 md:pr-10"
          type="button"
        >
          Argentina
        </button>
        <button 
          onClick={() => handleSelection('Worldwide')} 
          className="link-location"
          type="button"
        >
          Worldwide
        </button>
      </motion.div>
    </motion.main>
  );
}
