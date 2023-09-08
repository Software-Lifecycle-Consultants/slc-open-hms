import Footer from "@/components/homePage/Footer";
import Hero from "@/components/explore/Hero";
import HotelRooms from "@/components/explore/HotelRooms";
import SearchBar from "@/components/explore/SearchBar";
import { Box, Container } from "@mui/material";
import React from "react";
import PageLayout from "../app/page"

const ExploreScreen = () => {
  return (
    <>
      {/* Wrap the HomeScreen content with PageLayout */}
      <PageLayout>

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
      
      </PageLayout>
    </>
  );
};

// const isMobile = useMediaQuery("(max-width:767px)");
// const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
// const isWeb = useMediaQuery("(min-width:1024px)");

// slidesToShow: isMobile ? 1 : isTablet ? 2 : isWeb ? 3 : 5,

export default ExploreScreen;
