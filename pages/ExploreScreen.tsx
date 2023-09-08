import Footer from "@/components/homePage/Footer";
import Hero from "@/components/explore/Hero";
import HotelRooms from "@/components/explore/HotelRooms";
import SearchBar from "@/components/explore/SearchBar";
import { Box, Container } from "@mui/material";
import React from "react";
import NavBar from "@/components/homePage/NavBar";


const ExploreScreen = () => {
  
  return (
    <>
      {/* <NavBar /> */}
      <NavBar />

      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          padding: "40px 0",
          height: "722px",
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

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default ExploreScreen;
