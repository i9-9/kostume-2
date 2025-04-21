import './globals.css'
import localFont from 'next/font/local'

const helvetica = localFont({
  src: './fonts/Helvetica.ttf', 
  display: 'swap',
})

export const metadata = {
  title: 'THIS IS KOSTÜME',
  description: 'Original ready-to-wear designed in Buenos Aires. Made in Argentina',
  keywords: 'kostume, fashion, clothing, argentina, buenos aires, ready-to-wear, denim, eyewear',
  metadataBase: new URL('https://kostumeweb.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'THIS IS KOSTÜME',
    description: 'Original ready-to-wear designed in Buenos Aires. Made in Argentina',
    url: 'https://kostumeweb.net',
    siteName: 'KOSTÜME',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/img/banner_1.jpg',
        width: 1200,
        height: 630,
        alt: 'KOSTÜME Fashion',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THIS IS KOSTÜME',
    description: 'Original ready-to-wear designed in Buenos Aires. Made in Argentina',
    images: ['/img/banner_1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
      <body className='min-h-screen bg-black text-white'>{children}
      </body>
    </html>
  )
}
