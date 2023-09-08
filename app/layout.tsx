import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline'; // Import the CssBaseline component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HMS Dev',
  description: 'HMS System under development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Add the CssBaseline component to override the 8px margin */}
        {/* <CssBaseline /> */}
        {children}
      </body>
    </html>
  )
}
