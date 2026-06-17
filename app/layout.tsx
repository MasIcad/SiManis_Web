import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
// Hapus error dengan memastikan file ada
import './globals.css'  // Pastikan file ini benar-benar ada di folder app/
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'SiManis - Electronic Spoon for Sugar-Free Sweet Sensation',
  description: 'Experience the future of sweetness with SiManis, an innovative electronic spoon that stimulates taste buds using precise micro-current and thermal control without any chemical sugar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}