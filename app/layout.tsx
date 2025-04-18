import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AOSInit from './components/AOSInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elena y Adrián',
  description: 'Únete a este día tan especial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}