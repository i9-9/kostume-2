import React, { createContext, useContext, useState, useEffect } from "react";

type Region = "Argentina" | "Worldwide";
type Language = "es" | "en";

interface LocationContextProps {
  region: Region;
  language: Language;
  setRegion: (region: Region) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegionState] = useState<Region>("Argentina");
  const [language, setLanguage] = useState<Language>("es");

  console.log('[LocationProvider] Rendered with region:', region);

  useEffect(() => {
    console.log('[LocationProvider] useEffect running');
    // Ensure we're on the client side
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem("region") as Region | null;
      if (stored && (stored === "Argentina" || stored === "Worldwide")) {
        setRegionState(stored);
        setLanguage(stored === "Worldwide" ? "en" : "es");
      }
    } catch (error) {
      // LocalStorage might be blocked in incognito/private mode
      console.warn("localStorage not available:", error);
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === "region" && e.newValue) {
        const newRegion = e.newValue as Region;
        if (newRegion === "Argentina" || newRegion === "Worldwide") {
          setRegionState(newRegion);
          setLanguage(newRegion === "Worldwide" ? "en" : "es");
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setRegion = (loc: Region) => {
    console.log('[LocationContext] setRegion called with:', loc);

    // Always update state, even if localStorage fails or isn't hydrated yet
    setRegionState(loc);
    setLanguage(loc === "Worldwide" ? "en" : "es");
    console.log('[LocationContext] State updated');

    // Try to save to localStorage, regardless of hydration state
    // This ensures the value is persisted even on first interaction
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem("region", loc);
        console.log('[LocationContext] localStorage.setItem success:', loc);
      } catch (error) {
        // localStorage might be blocked in incognito/private mode
        console.warn("Could not save to localStorage:", error);
      }
    }
  };

  return (
    <LocationContext.Provider value={{ region, language, setRegion }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used within LocationProvider");
  return ctx;
}; 