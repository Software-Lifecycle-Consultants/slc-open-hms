'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import { inter } from './fonts';
import theme from '@/Theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/frontend/homePage/NavBar';
import AdminLayout from './admin/layout';
import { useSelectedLayoutSegments } from 'next/navigation';
import AdminNavbar from '@/components/admin/AdminNavBar';
import MainContent from '@/components/frontend/MainContent';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const isAdminRoute = segments?.includes('admin');
  // Checks if the length of the segments array is greater than 1 and if the isAdminRoute variable is true also excluse forgot-password route
  const isAdminDashboardRoute = segments && segments.length > 1 && isAdminRoute && segments[1] !== 'forgot-password';;
  console.log("isAdminRoute is :" + isAdminRoute);
  console.log("isAdminDashboardRoute is :" + isAdminDashboardRoute);
  return (
    <html lang="en" className={inter.className}>
      <body>
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