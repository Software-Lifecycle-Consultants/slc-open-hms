import React from 'react'
import { Box, Container } from "@mui/material";
import HeroBanner from '@/components/guestRoomDetails/HeroBanner';
import AboutRoom from '@/components/guestRoomDetails/AboutRoom';
import Facilities from '@/components/guestRoomDetails/Facilities';
import AdditionalInfo from '@/components/guestRoomDetails/AdditionalInfo';
import Footer from "@/components/homePage/Footer";
import SimilarRooms from '@/components/guestRoomDetails/SimilarRooms';
import Gallery from '@/components/guestRoomDetails/Gallery';

const RoomDetailsScreen = () => {
  return (
    <>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <HeroBanner />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <AboutRoom />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Facilities />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Gallery />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <AdditionalInfo />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <SimilarRooms />
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
      
    </>
  );
}

export default RoomDetailsScreen
