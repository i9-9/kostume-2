import './globals.css'
import localFont from 'next/font/local'

const helvetica = localFont({
  src: './helvetica.ttf',
  display: 'swap',
})


export const metadata = {
  title: 'THIS IS KOSTÜME', 
  icons: {
    url: 'public/icon.svg',
    type: 'image/svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={helvetica.className}>
      <body>{children}</body>
    </html>
  )
}
