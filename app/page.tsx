"use client";
import React from "react";
import { CssBaseline } from '@mui/material';
import HomeScreen from "@/pages/HomeScreen";

export default function Home() {
  return (
    <>
      {/* Add the CssBaseline component to override the 8px margin */}
      <CssBaseline />
      <HomeScreen />
    </>
  );
}
