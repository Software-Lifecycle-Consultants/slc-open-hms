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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const isAdminRoute = segments.includes('admin');
  //const isAdminRoute = segments.some((segment) => segment === 'admin');
  const isAdminDashboardRoute = segments.includes('dashboard');
  console.log("isAdminRoute is :" + isAdminRoute );
  console.log("isAdminDashboardRoute is :" + isAdminDashboardRoute );
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isAdminRoute ? (
            <AdminLayout> 
              {isAdminDashboardRoute ? <AdminNavbar /> : null}
              {children}
              </AdminLayout>  
          ) : (
            <>
              <Navbar />
              <div className="container">{children}</div>
              <Box sx={{ backgroundColor: '#1A242D', padding: '20px 0', width: '100%' }}>
                <Container>
                  <Footer />
                </Container>
              </Box>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}