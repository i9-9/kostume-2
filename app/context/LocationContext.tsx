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

  // Only set initial state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("region") as Region | null;
    if (stored) {
      setRegionState(stored);
      setLanguage(stored === "Worldwide" ? "en" : "es");
    }
    // Listen for storage events to sync across tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === "region" && e.newValue) {
        setRegionState(e.newValue as Region);
        setLanguage(e.newValue === "Worldwide" ? "en" : "es");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setRegion = (loc: Region) => {
    setRegionState(loc);
    setLanguage(loc === "Worldwide" ? "en" : "es");
    localStorage.setItem("region", loc);
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