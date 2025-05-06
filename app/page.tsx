'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Get the current visit count from localStorage, or default to 0
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);

    // Get the region from localStorage
    const region = localStorage.getItem('region');

    // Only redirect if we have a region AND it's not the first visit
    if (region && visitCount > 0) {
      // Increment the visit count
      visitCount += 1;
      localStorage.setItem('visitCount', visitCount.toString());

      // Reset the visit count to 0 after 5 visits
      if (visitCount % 5 === 0) {
      localStorage.setItem('visitCount', '0');
      } else {
        // Redirect to home page
        window.location.href = '/home/';
      }
    } else {
      // First visit or no region set, stay on this page
      visitCount += 1;
      localStorage.setItem('visitCount', visitCount.toString());
    }
  }, []);

  const handleSelection = (region: string) => {
    try {
    // Set the selected region in localStorage
    localStorage.setItem('region', region);

      // Use window.location for static export
      window.location.href = '/home/';
    } catch (error) {
      console.error('Error during navigation:', error);
    }
  };

  // Fade transition variants
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
        <p className="title">THIS</p>
        <p className="title">IS</p>
        <p className="title">KOSTÜME</p>
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
