"use client";
import React from "react";
import { CssBaseline } from '@mui/material';
import HomeScreen from "@/pages/HomeScreen";
import NavBar from "../components/homePage/NavBar";

export default function Home() {
  return (
    <>
      {/* Add the CssBaseline component to override the 8px margin */}
      <CssBaseline />
      {/* Add the Navigation Bar */}
      <NavBar />
      <HomeScreen />
    </>
  );
}
