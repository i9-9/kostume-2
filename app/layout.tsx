import './globals.css'
import localFont from 'next/font/local'
import { Providers } from './providers'

const helvetica = localFont({
  src: './fonts/Helvetica.ttf', 
  display: 'swap',
})

export const metadata = {
  title: 'KOSTÜME | Original Ready-to-Wear Fashion from Buenos Aires',
  description: 'Discover KOSTÜME - Original ready-to-wear designed in Buenos Aires. Made in Argentina.',
  keywords: 'kostume, fashion, clothing, argentina, buenos aires, ready-to-wear, denim, eyewear, argentine fashion, designer clothing',
  metadataBase: new URL('https://kostumeweb.net'),
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/es',
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'KOSTÜME | Premium Fashion from Buenos Aires',
    description: 'Original ready-to-wear designed in Buenos Aires. Made in Argentina.',
    url: 'https://kostumeweb.net',
    siteName: 'KOSTÜME',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/img/seo/kostume-og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'KOSTÜME Premium Fashion Collection',
      },
      {
        url: '/img/seo/kostume-denim-og.jpg',
        width: 1200,
        height: 630,
        alt: 'KOSTÜME Denim Collection',
      },
      {
        url: '/img/seo/kostume-eyewear-og.jpg',
        width: 1200,
        height: 630,
        alt: 'KOSTÜME Eyewear Collection',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOSTÜME | Fashion from Buenos Aires',
    description: 'Original ready-to-wear designed in Buenos Aires. Made in Argentina.',
    creator: '@kostume_',
    images: [
      {
        url: '/img/seo/kostume-twitter-large.jpg',
        width: 1200,
        height: 600,
        alt: 'KOSTÜME Premium Fashion Collection',
      }
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',  // Replace with your Google verification token
  },
  other: {
    'pinterest-rich-pin': 'true',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={helvetica.className}>
      <head>
        <link rel="preconnect" href="https://eshop.kostumeweb.net" crossOrigin="" />
      </head>
      <body className='min-h-screen bg-black text-white'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
