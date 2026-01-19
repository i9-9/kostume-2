type Region = 'Argentina' | 'Worldwide';

export interface FooterLinkInput {
  href: string;
  text: string;
  hrefByRegion?: Partial<Record<Region, string>>;
}

interface FooterSectionInput {
  title: string;
  links: FooterLinkInput[];
}

const footer: FooterSectionInput[] = [
    { 
      title: 'Contact',
      links: [
        { href: 'mailto:contacto@kostumeweb.net', text: 'EMAIL' },
        { href: 'https://wa.me/5491167671108', text: 'WHATSAPP' }
      ]
    },
    {
      title: 'Info',
      links: [
        { href: 'https://eshop.kostumeweb.net/us/about-us/', text: 'ABOUT US', hrefByRegion: { Argentina: 'https://eshop.kostumeweb.net/nosotros/', Worldwide: 'https://eshop.kostumeweb.net/us/about-us/' } },
        { href: 'https://eshop.kostumeweb.net/us/faqs/', text: 'FAQ', hrefByRegion: { Argentina: 'https://eshop.kostumeweb.net/preguntas-frecuentes/', Worldwide: 'https://eshop.kostumeweb.net/us/faqs/' } }
      ]
    },
    {
      title: 'Social M.',
      links: [
        { href: 'https://www.instagram.com/kostumeba', text: 'INSTAGRAM' },
        { href: 'https://www.tiktok.com/@kostumeba', text: 'TIKTOK' }
      ]
    },
    {
      title: 'Store',
      links: [
        { href: 'https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7 ', text: 'HONDURAS 4771, PALERMO' },
        { href: 'https://wa.me/5491167671108', text: '+54 9 11 5350 5298' }
      ]
    }  
  ];
  
export default footer;