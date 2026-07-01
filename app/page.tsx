'use client';

import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from './context/LocationContext';
import { countries, GROUP_ORDER, countriesByGroup, Country } from './data/countries';

export default function Home() {
  const { setRegion } = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedCountry, setSuggestedCountry] = useState<Country | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

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

    detectUserLocation();
  }, []);

  const detectUserLocation = async () => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const locale = navigator.language.toLowerCase();
      
      let suggestedCode: string | null = null;

      if (locale.includes('ar') || timezone.includes('Buenos_Aires')) {
        suggestedCode = 'ar';
      } else if (locale.includes('es-es') || timezone.includes('Madrid')) {
        suggestedCode = 'es';
      } else if (locale.includes('es-mx') || timezone.includes('Mexico')) {
        suggestedCode = 'mx';
      } else if (locale.includes('es-cl') || timezone.includes('Santiago')) {
        suggestedCode = 'cl';
      } else if (locale.includes('pt-br') || timezone.includes('Sao_Paulo')) {
        suggestedCode = 'br';
      } else if (locale.includes('en-us') || timezone.includes('New_York') || timezone.includes('Chicago') || timezone.includes('Los_Angeles')) {
        suggestedCode = 'us';
      } else if (locale.includes('en-gb') || timezone.includes('London')) {
        suggestedCode = 'gb';
      } else if (locale.includes('en-au') || timezone.includes('Sydney')) {
        suggestedCode = 'au';
      } else if (timezone.includes('Paris')) {
        suggestedCode = 'fr';
      } else if (timezone.includes('Berlin')) {
        suggestedCode = 'de';
      } else if (timezone.includes('Tokyo')) {
        suggestedCode = 'jp';
      } else if (timezone.includes('Seoul')) {
        suggestedCode = 'kr';
      }

      if (suggestedCode) {
        const country = countries.find(c => c.code === suggestedCode);
        if (country) {
          setSuggestedCountry(country);
        }
      }
    } catch (error) {
      console.warn('Could not detect location:', error);
    }
  };

  const handleSelection = (code: string) => {
    setSelectedCountry(code);
    setIsLoading(true);
    setRegion(code);
    
    setTimeout(() => {
      window.location.href = '/home/';
    }, 400);
  };

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countries;
    const query = searchQuery.toLowerCase();
    return countries.filter(country => 
      country.label.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const popularCountries = useMemo(() => {
    return ['ar', 'us', 'es', 'br', 'mx', 'gb']
      .map(code => countries.find(c => c.code === code))
      .filter(Boolean) as Country[];
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, code: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelection(code);
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="bg-black text-white">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-16 bg-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeVariants}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-sm font-bold tracking-widest text-black uppercase mb-4">
                Loading...
              </div>
              <motion.div
                className="w-16 h-0.5 bg-black mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row justify-center items-center text-title mb-6 sm:mb-8">
        <h1 className="title flex flex-col md:flex-row items-center">
          <span className="title">THIS</span>
          <span className="title">IS</span>
          <span className="title">KOSTÜME</span>
        </h1>
      </div>

      <motion.div
        className="flex justify-center mb-8"
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
          className="max-h-[200px] sm:max-h-[260px] w-auto object-contain"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="w-full max-w-md mb-6"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search countries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 text-xs font-bold tracking-wider uppercase border border-black/20 focus:border-black focus:outline-none transition-colors text-center"
            aria-label="Search countries"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors font-bold"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </motion.div>

      {suggestedCountry && !searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="text-[9px] font-bold tracking-widest text-black/40 uppercase mb-3">
            Suggested for you
          </p>
          <motion.button
            onClick={() => handleSelection(suggestedCountry.code)}
            onKeyDown={(e) => handleKeyDown(e, suggestedCountry.code)}
            className="link-location text-lg relative group"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {suggestedCountry.label}
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-black origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      )}

      {!searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[9px] font-bold tracking-widest text-black/40 uppercase mb-3 text-center">
            Popular
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularCountries.map((country) => (
              <motion.button
                key={country.code}
                onClick={() => handleSelection(country.code)}
                onKeyDown={(e) => handleKeyDown(e, country.code)}
                className="link-location text-sm px-4 py-2 border border-black/10 hover:border-black transition-all duration-200"
                type="button"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(0,0,0,0.03)' }}
                whileTap={{ scale: 0.97 }}
              >
                {country.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        {searchQuery ? (
          filteredCountries.length > 0 ? (
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredCountries.map((country) => (
                <motion.button
                  key={country.code}
                  onClick={() => handleSelection(country.code)}
                  onKeyDown={(e) => handleKeyDown(e, country.code)}
                  className="link-location whitespace-nowrap relative group"
                  type="button"
                  variants={itemVariants}
                  whileHover={{ x: 3 }}
                  tabIndex={0}
                >
                  {highlightMatch(country.label, searchQuery)}
                  <motion.div
                    className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-black/20 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-black/40 py-8"
            >
              No countries found
            </motion.div>
          )
        ) : (
          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-8">
            {GROUP_ORDER.map((group) => {
              const groupCountries = countriesByGroup[group];
              if (!groupCountries) return null;
              return (
                <motion.div
                  key={group}
                  className="flex flex-col items-center gap-y-2 min-w-[120px]"
                  variants={itemVariants}
                >
                  <p className="text-[9px] font-bold tracking-widest text-black/40 uppercase mb-2">
                    {group}
                  </p>
                  {groupCountries.map((country) => (
                    <motion.button
                      key={country.code}
                      onClick={() => handleSelection(country.code)}
                      onKeyDown={(e) => handleKeyDown(e, country.code)}
                      className="link-location text-left whitespace-nowrap relative group w-full hover:translate-x-1 transition-transform duration-200"
                      type="button"
                      whileHover={{ x: 4 }}
                      tabIndex={0}
                    >
                      {country.label}
                      <motion.div
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black/20 group-hover:w-full transition-all duration-300"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-[8px] tracking-widest text-black/30 uppercase">
          Select your region to continue
        </p>
      </motion.div>
    </motion.main>
  );
}
