import type { Metadata } from 'next'
import React, { PropsWithChildren } from "react";
import { Box, Container } from '@mui/material';
// import { Inter } from 'next/font/google'
import { inter } from "./fonts";
import CssBaseline from '@mui/material/CssBaseline'; // Import the CssBaseline component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/homePage/NavBar";
import Footer from "../components/homePage/Footer";
// const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className={inter.className}>
      <body>
        {/* Add the CssBaseline component to override the 8px margin */}
        <CssBaseline />
        <Navbar />
        <div className="container">{children}</div>
        {/* Footer*/}
        <Box
          sx={{
            backgroundColor: "#FFF",
            padding: "20px 0",
            width: "100%",
          }}
        >
          <Container>
            <Footer />
          </Container>
        </Box>
      </body>
    </html>
  );
}