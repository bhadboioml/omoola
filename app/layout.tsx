import type { Metadata } from 'next'
import { Archivo, Fraunces, Anton } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'BhadBoi OML | Afrobeats Artist',
  description:
    'The official home of BhadBoi OML — Nigerian Afrobeats singer. Discography, tour dates, gallery, merch and bookings.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${anton.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
