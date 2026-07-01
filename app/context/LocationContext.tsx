import React, { createContext, useContext, useState, useEffect } from "react";
import { getLang, countryByCode } from "../data/countries";

type Language = "es" | "en";

interface LocationContextProps {
  region: string;
  language: Language;
  setRegion: (code: string) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegionState] = useState<string>("ar");
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem("region");
      if (stored && countryByCode[stored]) {
        setRegionState(stored);
        setLanguage(getLang(stored));
      }
    } catch (error) {
      console.warn("localStorage not available:", error);
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === "region" && e.newValue && countryByCode[e.newValue]) {
        setRegionState(e.newValue);
        setLanguage(getLang(e.newValue));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setRegion = (code: string) => {
    if (!countryByCode[code]) return;
    setRegionState(code);
    setLanguage(getLang(code));

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("region", code);
      } catch (error) {
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
