'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import { inter } from './fonts';
import theme from '@/Theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/homePage/NavBar';
import Footer from '../components/homePage/Footer';
import AdminLayout from './admin/layout';
import { useSelectedLayoutSegments } from 'next/navigation';
import { metadata } from '@/data/metadata'; // Import the metadata constant
import AdminNavbar from '@/components/AdminNavBar';
import MainContent from '@/components/MainContent';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const isAdminRoute = segments.includes('admin');
  //const isAdminRoute = segments.some((segment) => segment === 'admin');
  const isAdminDashboardRoute = segments.includes('dashboard');
  console.log("isAdminRoute is :" + isAdminRoute);
  console.log("isAdminDashboardRoute is :" + isAdminDashboardRoute);
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PFMTG15DNW"
      />
      <Script id='g-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PFMTG15DNW');
        `}
      </Script>
      {/* Google Tag Manager */}
      <Script id='g-tag-manager'>
        {
          `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KLK5J5D4');
          `
        }
      </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KLK5J5D4"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isAdminRoute ? (
            <AdminLayout>
              {isAdminDashboardRoute ? <AdminNavbar /> : null}
              <MainContent showFooter={false}>{children}</MainContent>
            </AdminLayout>
          ) : (
            <>
              <Navbar />
              <MainContent>{children}</MainContent>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}