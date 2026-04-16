import './globals.css'
import { Providers } from './providers'
import OrganizationSchema from './components/OrganizationSchema'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import WebsiteSchema from './components/WebsiteSchema'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata = {
  title: 'KOSTÜME | Ready-to-Wear',
  description: 'Shop KOSTÜME premium ready-to-wear fashion designed in Buenos Aires. Discover our collections of denim, eyewear, and contemporary clothing. Made in Argentina, shipped worldwide.',
  keywords: 'kostume, fashion, clothing, argentina, buenos aires, ready-to-wear, denim, eyewear, argentine fashion, designer clothing',
  metadataBase: new URL('https://kostumeweb.net'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/es',
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'KOSTÜME | Ready-to-Wear',
    description: 'Shop KOSTÜME premium ready-to-wear fashion designed in Buenos Aires. Discover our collections of denim, eyewear, and contemporary clothing. Made in Argentina, shipped worldwide.',
    url: 'https://kostumeweb.net',
    siteName: 'KOSTÜME',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://kostumeweb.net/img/seo/kostume-og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'KOSTÜME Original Ready-to-Wear designed in Buenos Aires. Made in Argentina.',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOSTÜME | Ready-to-Wear',
    description: 'Shop KOSTÜME premium ready-to-wear fashion designed in Buenos Aires. Discover our collections of denim, eyewear, and contemporary clothing. Made in Argentina, shipped worldwide.',
    creator: '@kostume_',
    images: [
      {
        url: 'https://kostumeweb.net/img/seo/kostume-twitter-large.jpg',
        width: 1200,
        height: 600,
        alt: 'KOSTÜME Original Ready-to-Wear designed in Buenos Aires. Made in Argentina.',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://eshop.kostumeweb.net" crossOrigin="" />
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="" />
        <link
          rel="preload"
          href="/fonts/HelveticaNeueLTPro-55-Roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </head>
      <body className='min-h-screen bg-white text-black'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
