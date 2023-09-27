import type { Metadata } from 'next'
import React, { PropsWithChildren } from "react";
import { Box, Container } from '@mui/material';
import { inter } from "./fonts";
import theme from "@/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'; // Import the CssBaseline component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/homePage/NavBar";
import Footer from "../components/homePage/Footer";

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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}