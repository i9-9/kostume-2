export interface Country {
  code: string;
  label: string;
  lang: 'es' | 'en';
  group: string;
}

const SPANISH_CODES = new Set(['ar', 'cl', 'mx', 'uy', 'es']);

export const getLang = (code: string): 'es' | 'en' =>
  SPANISH_CODES.has(code) ? 'es' : 'en';

export const getEshopBase = (code: string): string =>
  `https://eshop.kostumeweb.net/${code}`;

export const countries: Country[] = [
  // AMERICA
  { code: 'ar', label: 'Argentina', lang: 'es', group: 'America' },
  { code: 'br', label: 'Brasil', lang: 'en', group: 'America' },
  { code: 'cl', label: 'Chile', lang: 'es', group: 'America' },
  { code: 'mx', label: 'México', lang: 'es', group: 'America' },
  { code: 'us', label: 'United States', lang: 'en', group: 'America' },
  { code: 'uy', label: 'Uruguay', lang: 'es', group: 'America' },
  // EUROPE
  { code: 'be', label: 'Belgium', lang: 'en', group: 'Europe' },
  { code: 'de', label: 'Germany', lang: 'en', group: 'Europe' },
  { code: 'dk', label: 'Denmark', lang: 'en', group: 'Europe' },
  { code: 'es', label: 'España', lang: 'es', group: 'Europe' },
  { code: 'fr', label: 'France', lang: 'en', group: 'Europe' },
  { code: 'gb', label: 'United Kingdom', lang: 'en', group: 'Europe' },
  { code: 'it', label: 'Italy', lang: 'en', group: 'Europe' },
  { code: 'nl', label: 'Netherlands', lang: 'en', group: 'Europe' },
  { code: 'pt', label: 'Portugal', lang: 'en', group: 'Europe' },
  { code: 'se', label: 'Sweden', lang: 'en', group: 'Europe' },
  // ASIA PACIFIC & MIDDLE EAST
  { code: 'ae', label: 'UAE', lang: 'en', group: 'Asia Pacific' },
  { code: 'au', label: 'Australia', lang: 'en', group: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', lang: 'en', group: 'Asia Pacific' },
  { code: 'kr', label: 'Korea', lang: 'en', group: 'Asia Pacific' },
];

export const countriesByGroup = countries.reduce<Record<string, Country[]>>(
  (acc, country) => {
    if (!acc[country.group]) acc[country.group] = [];
    acc[country.group].push(country);
    return acc;
  },
  {}
);

export const countryByCode = countries.reduce<Record<string, Country>>(
  (acc, country) => { acc[country.code] = country; return acc; },
  {}
);

export const GROUP_ORDER = ['America', 'Europe', 'Asia Pacific'];
