import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KOSTÜME',
  description: 'Explore KOSTÜME premium collections - Original ready-to-wear designed in Buenos Aires. Featuring denim, eyewear, and more.',
  openGraph: {
    title: 'KOSTÜME',
    description: 'Explore our latest fashion collections - denim, eyewear and more. Made in Argentina.',
    images: [
      {
        url: 'https://kostumeweb.net/img/seo/kostume-collection-og.jpg',
        width: 1200,
        height: 630,
        alt: 'KOSTÜME Collections'
      }
    ],
    type: 'website',
    url: 'https://kostumeweb.net/home',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOSTÜME',
    description: 'Explore our latest fashion collections - denim, eyewear and more. Made in Argentina.',
    images: ['https://kostumeweb.net/img/seo/kostume-collection-og.jpg'],
  }
}; 