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
              {children}
            </AdminLayout>
          ) : (
            <>
              {/* The NavBar of the web page */}
              <Navbar />
              {/* The box that wrappes the main content {children}  and Footer*/}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100vh',
                }}
              >
                {/* Inner BoxTo allow children to grow and take up available space. */}
                <Box
                  sx={{
                    flex: '1 0 auto',
                  }}
                >
                  <div className="container">{children}</div>
                </Box>
                {/* The Footer of the web page */}
                <Box
                  sx={{
                    flexShrink: 0, // To prevent Footer from shrinking, and to position at the bottom of the page.
                    backgroundColor: '#1A242D',
                    padding: '20px 0',
                    width: '100%',
                  }}
                >
                  <Container>
                    <Footer />
                  </Container>

                </Box>
              </Box>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}