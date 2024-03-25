"use client";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import HotelRooms from "@/components/explore/HotelRooms"; // Importing HotelRooms component from the 'explore' folder
import SearchBar from "@/components/explore/SearchBar"; // Importing SearchBar component from the 'explore' folder
import HeroSection from "@/components/explore/HeroSection"; // Importing HeroSection component from the 'explore' folder

/**
 * ExploreScreen component represents the explore screen of the website.
 * It includes sections like Hero section, Search bar, and Hotel rooms.
 */

const ExploreScreen = ({
  searchParams,
}: {
  searchParams?: {
    query: string; //declear the query as a prop
    selector: string;
    page: number;
  };
}) => {
  const query = searchParams?.query || " ";
  const value = searchParams?.selector || " ";
  console.log("value", value);
  const page = searchParams?.page || 1;

  console.log("Search Params:", searchParams, value);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          height: "600px",
          width: "100%",
          display: "inline-block",
        }}
      >
        <Container>
          <HeroSection />
        </Container>
      </Box>

      {/* Search Bar Section */}
      <Box
        sx={{
          backgroundColor: "#FFF",
          width: "100%",
        }}
      >
        <Container>
          <SearchBar />
        </Container>
      </Box>

      {/* Hotel Rooms Section */}
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <HotelRooms query={query} value={value} page={page} />
          {/* pass the query to Hotel room component*/}
        </Container>
      </Box>
    </>
  );
};

export default ExploreScreen;
