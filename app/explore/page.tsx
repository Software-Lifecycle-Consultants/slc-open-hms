import Hero from "@/components/explore/Hero";
import HotelRooms from "@/components/explore/HotelRooms";
import SearchBar from "@/components/explore/SearchBar";
import { Box, Container } from "@mui/material";
import React from "react";


/**
 * ExploreScreen component represents the explore screen of the website.
 * It includes sections like Hero section, Search bar, and Hotel rooms.
 */

const ExploreScreen = () => {
  
  return (
    <>

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
          <Hero />
        </Container>
      </Box>

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

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <HotelRooms />
        </Container>
      </Box>

    </>
  );
};

export default ExploreScreen;