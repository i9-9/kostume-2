'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from './context/LocationContext';
import { countries, GROUP_ORDER, countriesByGroup } from './data/countries';

export default function Home() {
  const { setRegion } = useLocation();

  useEffect(() => {
    try {
      let visitCount = 0;
      let region = null;

      try {
        visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
        region = localStorage.getItem('region');
      } catch (e) {
        console.warn('localStorage not available');
      }

      if (region && visitCount > 0) {
        visitCount += 1;
        try {
          localStorage.setItem('visitCount', visitCount.toString());
        } catch (e) {}

        if (visitCount % 5 === 0) {
          try {
            localStorage.setItem('visitCount', '0');
          } catch (e) {}
        } else {
          window.location.href = '/home/';
        }
      } else {
        visitCount += 1;
        try {
          localStorage.setItem('visitCount', visitCount.toString());
        } catch (e) {}
      }
    } catch (error) {
      console.error('Error handling visit count:', error);
    }
  }, []);

  const handleSelection = (code: string) => {
    setRegion(code);
    window.location.href = '/home/';
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-center px-8 py-16 bg-white"
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
          src="/img/feb26/location.webp"
          alt="Location"
          width={600}
          height={800}
          sizes="(max-width: 768px) 70vw, 320px"
          className="max-h-[260px] w-auto object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="w-full max-w-3xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {GROUP_ORDER.map((group) => {
            const groupCountries = countriesByGroup[group];
            if (!groupCountries) return null;
            return (
              <div key={group} className="flex flex-col items-center gap-y-2 min-w-[100px]">
                <p className="text-[9px] font-bold tracking-widest text-black/40 uppercase mb-1">
                  {group}
                </p>
                {groupCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleSelection(country.code)}
                    className="link-location text-left whitespace-nowrap"
                    type="button"
                  >
                    {country.label}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.main>
  );
}
