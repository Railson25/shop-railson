import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['700', '500', '400'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Railson Shop',
  description: 'Your best E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
