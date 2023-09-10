import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline'; // Import the CssBaseline component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./homePage/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HMS Dev',
  description: 'HMS System under development',
}

import React, { PropsWithChildren } from "react";


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* Add the CssBaseline component to override the 8px margin */}
      <CssBaseline />
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
