'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);

    const region = localStorage.getItem('region');

    if (region && visitCount > 0) {
      visitCount += 1;
      localStorage.setItem('visitCount', visitCount.toString());

      if (visitCount % 5 === 0) {
      localStorage.setItem('visitCount', '0');
      } else {
        router.push('/home/');
      }
    } else {
      visitCount += 1;
      localStorage.setItem('visitCount', visitCount.toString());
    }
  }, []);

  const handleSelection = (region: string) => {
    try {
    localStorage.setItem('region', region);

      router.push('/home/');
    } catch (error) {
      console.error('Error during navigation:', error);
    }
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
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-black"
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
