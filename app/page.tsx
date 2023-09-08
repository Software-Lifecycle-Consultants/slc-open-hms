"use client";
import React from "react";
import { CssBaseline } from '@mui/material';
import HomeScreen from "@/pages/HomeScreen";
import NavBar from "../components/homePage/NavBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Add the CssBaseline component to override the 8px margin */}
      <CssBaseline />
      {/* Add the Navigation Bar */}
      <NavBar />
      {/* Pass other Page Contents*/}
      <main>{children}</main>
    </>
  );
}

export default PageLayout;
